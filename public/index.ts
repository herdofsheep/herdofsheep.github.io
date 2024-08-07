
import { html, css } from 'lit';
import * as THREE from 'three';
import _ from 'lodash';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

import ThreeBase from '../js/base';

interface ModelInfo {
  key: string;
  url: string;
  link: string;
  description: string;
}

class RayCast extends ThreeBase {
  static properties = {
    cursorType: { type: String },
    mousePosX: { type: String },
    mousePosY: { type: String }
  };

  cursorType: string;
  dark_grey: THREE.Color;
  raycaster: THREE.Raycaster;
  geometries: object;
  meshes: object;
  white: THREE.Color;
  colours: object;
  infoVisible: string = 'hidden';
  canClick: boolean;
  beganTouching: boolean;
  private modelInfo: ModelInfo[];
  debugWindow: HTMLElement;
  link: string;
  mousePosX: string;
  mousePosY: string;
  clickingActive: boolean;

  constructor() {
    super();
    this.setupScene = this.setupScene.bind(this);
    this.white = new THREE.Color().setHex(0xffffff);
    this.dark_grey = new THREE.Color().setHex(0x202020);
    this.raycaster = new THREE.Raycaster();

    this.mouse = new THREE.Vector2();
    this.mousePosX = "0px";
    this.mousePosX = "0px";
    this.clickingActive = false;

    this.cursorType = "grab";
    this.infoVisible = 'hidden';
    this.canClick = false;
    this.beganTouching = false;

    this.geometries = {}
    this.meshes = {}

    this.addEventListener('mousedown', this.startClick);
    this.addEventListener('mouseup', this.clickLink);
    this.addEventListener('touchstart', this.touchStart)
    this.addEventListener("touchmove", this.touchMove);
    this.addEventListener("touchcancel", this.touchMove);
    this.addEventListener('touchend', this.touchEnd)
  }

  render(){
    return html`
    <style>
      :host {
        cursor: ${this.cursorType};
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

  startClick() {
    this.clickingActive = false;
    if (this.canClick == true) {
      this.clickingActive = true;
    }
  }

  clickLink() {
    if (this.clickingActive == true) {
      window.location.href = this.link;
    }
  }

  touchStart() {
    if (this.canClick) {
      this.beganTouching = true;
    }
  }

  touchMove() {
    this.beganTouching = false;
  }

  touchEnd() {
    if (this.canClick && this.beganTouching) {
      window.location.href = this.link;
    }
  }

  async firstUpdated() {
    // Give the browser a chance to paint
    await new Promise((r) => setTimeout(r, 0));
    this.init();
    if (this.shadowRoot){
      const debugElement = this.shadowRoot.getElementById("infoText");
      if (debugElement){
        this.debugWindow = debugElement;
      }
    }
    this.setupLights();
    const modelUrls = [
      { key: 'que', url: '/assets/models/gltf/questionmark.glb', link: '/src/what.html', description: "what?"},
      { key: 'work', url: '/assets/models/gltf/radcam.glb', link: '/src/CV.html', description: "work"},
      { key: 'github', url: '/assets/models/gltf/github.glb', link: 'https://github.com/herdofsheep', description: "github"},
      { key: 'math', url: '/assets/models/gltf/math.glb', link: '/src/art.html', description: "art"},
    ];
    const files = await this.getFiles(modelUrls)
    this.modelInfo = modelUrls;
    this.addModels(files);
    this.setupScene();
    this.startAnimation();
  }

  setupLights() {
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    this.camera.position.z = 20;

    this.scene.background = new THREE.Color( 0x424242 );
    this.scene.add( new THREE.AmbientLight( 0x555555 ) );

    const light_one = new THREE.SpotLight( this.white, 1.5 );
    light_one.position.set( 0, 500, 20000 );
    this.scene.add(light_one);

    const light_two = new THREE.HemisphereLight(this.white, 0x888888, 3);
    light_two.position.set(0, 1, 0);
    this.scene.add(light_two);
  }
  
  addModels(files){
  
    const matrix = new THREE.Matrix4();
    const objsToDraw = 20
    const material = new THREE.MeshPhongMaterial({ color: this.white, flatShading: true, shininess: 0 });


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

        mesh.setColorAt(j, this.dark_grey);
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
    this.cursorType = "cell";
    this.infoVisible = 'hidden';
    this.canClick = false;
    this.handleMouse();

    for (const key in this.meshes) {
      const mesh = this.meshes[key];
      const intersection = this.raycaster.intersectObject(mesh);

      for (let i = 0; i < mesh.count; i++) {
        mesh.setColorAt(i, this.dark_grey);
        mesh.instanceColor.needsUpdate = true;
      }
    
      if (intersection.length > 0) {
        this.infoVisible = 'visible';
        this.canClick = true;
        this.cursorType = "pointer";
        const modelInfoItem = this.modelInfo.find(item => item.key === key);
        if (modelInfoItem) {
          this.link = modelInfoItem.link;
          this.debugWindow.innerHTML = modelInfoItem.description;
        }
        const instanceId = intersection[0].instanceId;
        mesh.setColorAt(instanceId, this.white);
        mesh.instanceColor.needsUpdate = true;
      }
    }
    this.renderer.render(this.scene, this.camera);
  }

  handleMouse() {
    this.mousePosX = this.mousePos.x + 15 + "px";
    this.mousePosY = this.mousePos.y + 15 + "px";
  }
}

window.customElements.define('ray-cast', RayCast);