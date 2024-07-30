
import { html } from 'lit-element';
import * as THREE from 'three';
import _ from 'lodash';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

import ThreeBase from '../js/base';

class RayCast extends ThreeBase {
  dark_grey: THREE.Color;
  raycaster: THREE.Raycaster;
  geometries: object;
  meshes: object;
  white: THREE.Color;
  colours: object;
  cursorType: string = 'default';
  infoVisible: string = 'hidden';

  constructor() {
    super();
    this.setupScene = this.setupScene.bind(this);
    this.white = new THREE.Color().setHex(0xffffff);
    this.raycaster = new THREE.Raycaster();

    this.geometries = {}
    this.meshes = {}

    // this.addEventListener('click', this.clickLink);
    // this.addEventListener('touchstart', this.touchStart)
    // this.addEventListener("touchmove", this.touchMove);
    // this.addEventListener("touchcancel", this.touchMove);
    // this.addEventListener('touchend', this.touchEnd)
  }

  render(){
    return html`
    <style>
      :host {
        cursor: ${this.cursorType}
      }
      .followMouse {
        top: ${this.mousePosY};
        left: ${this.mousePosX};
        color: white;
        font-size:50px;
        visibility: ${this.infoVisible};
        position:absolute;
        z-index: 10;
      }
      #crosshair {
        top: ${this.YCenter};
        left: ${this.XCenter};
        position: absolute;
        visibility: hidden;
        width: 0px;
        height: 0px;
        z-index: 100;
      }
      #upSpoke {
        background: white;
        height: 10px;
        width: 2px;
        transform: translateY(-3px);
      }
      #sideSpoke {
        background: white;
        height: 2px;
        width: 10px;
        transform: translate(-4px,-9px);
      }
      #container{
				top:0px;
				position: absolute;
			}
      @media (hover: none) {
        /* behaviour for touch browsers */
        #crosshair {
          visibility: visible;
        }
      }
    </style>
    <div id="container" ></div>
    <div id="infoText" class="followMouse" ></div>
    <div id="crosshair" >
      <div id="upSpoke"></div>
      <div id="sideSpoke"></div>
    </div>
    `;
  }

  async firstUpdated() {
    // Give the browser a chance to paint
    await new Promise((r) => setTimeout(r, 0));
    this.init();
    const modelUrls = [
      { key: 'que', url: '/assets/models/gltf/questionmark.glb' },
      { key: 'work', url: '/assets/models/gltf/radcam.glb' },
      { key: 'github', url: '/assets/models/gltf/github.glb' },
      { key: 'math', url: '/assets/models/gltf/math.glb' },
    ];
    const files = await this.getFiles(modelUrls)
    this.addModels(files);
    this.setupScene();
    this.startAnimation();
  }

  init() {
    this.container = this.shadowRoot?.getElementById("container") as HTMLElement;

    this.XCenter = window.innerWidth/2 + "px";
    this.YCenter = window.innerHeight/2 + "px";

    this.mousePosX = this.XCenter;
    this.mousePosY = this.YCenter;

    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    this.camera.position.z = 20;

    this.scene.background = new THREE.Color( 0x424242 );
    this.scene.add( new THREE.AmbientLight( 0x555555 ) );

    const light_one = new THREE.SpotLight( 0xffffff, 1.5 );
    light_one.position.set( 0, 500, 20000 );
    this.scene.add(light_one);

    const light_two = new THREE.HemisphereLight(0xffffff, 0x888888, 3);
    light_two.position.set(0, 1, 0);
    this.scene.add(light_two);
  }
  
  addModels(files){
  
    const matrix = new THREE.Matrix4();
    const objsToDraw = 20
    // const material = new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true, vertexColors: true, shininess: 0 });
    const material = new THREE.MeshPhongMaterial({ flatShading: true, shininess: 0 });


    for ( let i = 0; i < Object.keys(files).length; i ++ ) {
      var geometry = files[Object.keys(files)[i]];
      var mesh = new THREE.InstancedMesh(geometry, material, objsToDraw);
      for ( let j = 0; j < objsToDraw; j ++ ) {

        // random position
        const position = new THREE.Vector3();
        position.x = Math.random() * 100 - 50;
        position.y = Math.random() * 100 - 50;
        position.z = Math.random() * 100 - 50;
        matrix.setPosition(position);
        mesh.setMatrixAt(j, matrix);
        
        // random rotation
        const rotation = new THREE.Euler();
        rotation.x = Math.random() * 2 * Math.PI;
        rotation.y = Math.random() * 2 * Math.PI;
        rotation.z = Math.random() * 2 * Math.PI;
        mesh.setRotationFromEuler(rotation);
      }
      this.meshes[Object.keys(files)[i]] = mesh;
      this.scene.add( mesh );
    }
  }

  setupScene() {
  
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container?.appendChild( this.renderer.domElement );
    this.renderer.setAnimationLoop(this.startAnimation);
  
    this.controls = new TrackballControls( this.camera, this.renderer.domElement );
    this.controls.rotateSpeed = -1.0;

    window.addEventListener('resize', this.onWindowResize);
    document.addEventListener('mousemove', this.onMouseMove);
    var loadingDiv =this.parentElement?.querySelector('#loading') as HTMLElement;
    loadingDiv.style.visibility = 'hidden'

  };

  startAnimation() {
    this.controls.update();
  
    this.raycaster.setFromCamera(this.mouse, this.camera);
    this.renderer.setRenderTarget( null );

    const key = 'que'
  
    const intersection = this.raycaster.intersectObject(this.meshes[key]);
  
    if (intersection.length > 0) {
  
      const instanceId = intersection[0].instanceId;
    
  
      this.meshes[key].setColorAt(instanceId, this.white);
      this.meshes[key].instanceColor.needsUpdate = true;
    
    }
  
    this.renderer.render(this.scene, this.camera);
  }
}

window.customElements.define('ray-cast', RayCast);