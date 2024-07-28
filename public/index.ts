
import { LitElement, html } from 'lit-element';
import * as THREE from 'three';
import _ from 'lodash';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
// import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils.js';import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
// import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

class RayCast extends LitElement {
  mouse: THREE.Vector2;
  mousePosX: string;
  mousePosY: string;
  container: HTMLElement | null;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  count: number;
  color: THREE.Color;
  white: THREE.Color;
  renderer: THREE.WebGLRenderer;
  controls: TrackballControls;
  raycaster: THREE.Raycaster;
  XCenter: string;
  YCenter: string;
  files: object;
  cursorType: string = 'default';
  infoVisible: string = 'hidden';

  constructor() {
    super();
    this.startAnimation = this.startAnimation.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);

    this.mouse = new THREE.Vector2();
    this.mousePosX = "0px";
    this.mousePosX = "0px";
    this.scene = new THREE.Scene();
    this.color = new THREE.Color();
    this.white = new THREE.Color().setHex(0xffffff);
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.raycaster = new THREE.Raycaster();

    this.files = {}

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
    const files = await this.getFiles()
    this.addModels(files)
    this.startAnimation();
  }

  init() {
    this.container = this.shadowRoot?.getElementById("container") as HTMLElement;

    this.XCenter = window.innerWidth/2 + "px";
    this.YCenter = window.innerHeight/2 + "px";

    this.mousePosX = this.XCenter;
    this.mousePosY = this.YCenter;

    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    this.camera.position.z = 1000;
    
    this.scene.background = new THREE.Color( 0x424242 );
    this.scene.add( new THREE.AmbientLight( 0x555555 ) );

    const light = new THREE.SpotLight( 0xffffff, 1.5 );
    light.position.set( 0, 500, 20000 );
    this.scene.add(light);
  }
  
  addModels(files){
    const material = new THREE.MeshPhongMaterial({ color: 0xffffff });
  
    const geometry = new THREE.IcosahedronGeometry(0.5, 3);

    const matrix = new THREE.Matrix4();
    const quaternion = new THREE.Quaternion();
    const objsToDraw = 51

    let keys = Object.keys(this.files);
    let randomIndex = Math.floor(Math.random() * keys.length);
    

    // var geometry = this.files[keys[0]];

    var mesh = new THREE.InstancedMesh(geometry, material, objsToDraw);

    const position = new THREE.Vector3();
    var scaleSize = 500;
    const scale = new THREE.Vector3(scaleSize,scaleSize,scaleSize);
    matrix.compose( position, quaternion, scale );

    mesh.applyMatrix4( matrix );
    this.scene.add( mesh );

    // for ( let i = 1; i < objsToDraw; i ++ ) {
    //   var randomPick = Math.floor(Math.random() * Object.keys(this.files).length);
    //   var geometry = this.files[randomPick];

    //   const position = new THREE.Vector3();
    //   position.x = Math.random() * 10000 - 5000;
    //   position.y = Math.random() * 6000 - 3000;
    //   position.z = Math.random() * 8000 - 4000;

    //   const rotation = new THREE.Euler();
    //   rotation.x = Math.random() * 2 * Math.PI;
    //   rotation.y = Math.random() * 2 * Math.PI;
    //   rotation.z = Math.random() * 2 * Math.PI;

    //   var scaleSize = 50;
    //   const scale = new THREE.Vector3(scaleSize,scaleSize,scaleSize);

    //   quaternion.setFromEuler( rotation );
    //   matrix.compose( position, quaternion, scale );

    //   var mesh = new THREE.InstancedMesh(geometry, material, objsToDraw);
    //   mesh.setMatrixAt(i, matrix);
    //   mesh.setColorAt(i, this.color);
    //   this.scene.add( mesh );
    // }

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild( this.renderer.domElement );
    this.renderer.setAnimationLoop(this.startAnimation);
  
    this.controls = new TrackballControls( this.camera, this.renderer.domElement );
    // this.controls.rotateSpeed = -1.0;
    // this.controls.zoomSpeed = 1.2;
    // this.controls.panSpeed = -0.8;
    // this.controls.noZoom = false;
    // this.controls.noPan = false;
    // this.controls.staticMoving = true;
    // this.controls.dynamicDampingFactor = 0.3;
  
    // window.addEventListener('resize', this.onWindowResize);
    // document.addEventListener('mousemove', this.onMouseMove);
    var loadingDiv =this.parentElement?.querySelector('#loading') as HTMLElement;
    loadingDiv.style.visibility = 'hidden'
  };

  async getFiles() {
    return     {
      "que": this.getModelMesh( '/assets/models/gltf/questionmark.glb' ),
      "work": this.getModelMesh( '/assets/models/gltf/radcam.glb' ),
      "github": this.getModelMesh( '/assets/models/gltf/github.glb' ),
      "math": this.getModelMesh( '/assets/models/gltf/math.glb' ),
    }
  }

  async getModelMesh(url: string): Promise<THREE.BufferGeometry[] | undefined> {
    const model = await this.loadModel(url);
    if (model && model.children.length > 0) {
        const firstChild = model.children[0];
        if (firstChild.children.length > 0) {
            const meshGeometry = firstChild.children.find(x => x.type === 'Mesh') as THREE.Mesh;
            if (meshGeometry) {
                return [meshGeometry.geometry];
            }
            const groupGeometry = firstChild.children.find(x => x.type === 'Group') as THREE.Group;
            if (groupGeometry) {
                const meshes: THREE.BufferGeometry[] = [];
                for (let j = 0; j < groupGeometry.children.length; j++) {
                    const meshGeometry = groupGeometry.children[j] as THREE.Mesh;
                    const mesh = meshGeometry.geometry;
                    meshes.push(mesh);
                }
                return meshes;
            }
        }
    }
    return undefined;
  }

  async loadModel(url: string): Promise<THREE.Group | null> {
      try {
          const response = await fetch(url);
          if (!response.ok) {
              console.log('file not found');
              return null;
          }

          const loader = new GLTFLoader();
          const model = new THREE.Group();

          loader.load(url, function (gltf) {
              gltf.scene.traverse(function (child) {});
              model.add(gltf.scene);
          });

          return model;
      } catch (error) {
          console.error('Error loading model:', error);
          return null;
      }
  }


  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
  }

  onMouseMove( event ) {
    event.preventDefault();
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    this.mousePosX = this.mouse.x + 15 + 'px';
    this.mousePosY = this.mouse.y + 15 + 'px';
  }

  startAnimation() {
    this.controls.update();
  
    this.raycaster.setFromCamera(this.mouse, this.camera);
    this.renderer.setRenderTarget( null );
  
    // const intersection = this.raycaster.intersectObject(this.mesh);
  
    // if (intersection.length > 0) {
  
    //   const instanceId = intersection[0].instanceId;
  
    //   this.mesh.getColorAt(instanceId,this.color);
  
    //   if (this.color.equals(this.white)) {
  
    //     this.mesh.setColorAt(instanceId, this.color.setHex(Math.random() * 0xffffff));
  
    //     this.mesh.instanceColor.needsUpdate = true;
  
    //   }
  
    // }
  
    this.renderer.render(this.scene, this.camera);
  }
}

window.customElements.define('ray-cast', RayCast);