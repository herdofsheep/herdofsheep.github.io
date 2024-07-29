
import { LitElement, html } from 'lit-element';
import * as THREE from 'three';
import _ from 'lodash';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

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
  mesh: THREE.InstancedMesh;
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
    const quaternion = new THREE.Quaternion();
    const objsToDraw = 51

    const material = new THREE.MeshPhongMaterial({ color: 0xffffff });

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
      this.scene.add( mesh );
    }

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container?.appendChild( this.renderer.domElement );
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
    const modelUrls = [
      { key: 'que', url: '/assets/models/gltf/questionmark.glb' },
      { key: 'work', url: '/assets/models/gltf/radcam.glb' },
      { key: 'github', url: '/assets/models/gltf/github.glb' },
      { key: 'math', url: '/assets/models/gltf/math.glb' },
    ];
  
    const modelPromises = modelUrls.map(async (model) => {
      const geometry = await this.getModelMesh(model.url);
      return { key: model.key, geometry: geometry };
    });
  
    const modelsArray = await Promise.all(modelPromises);
  
    const models = modelsArray.reduce((acc, model) => {
      acc[model.key] = model.geometry;
      return acc;
    }, {});
  
    return models;
  }

  async getModelMesh(url: string): Promise<THREE.BufferGeometry | undefined> {
    const model = await this.loadModel(url);
    if (model && model.children.length > 0) {
      const firstChild = model.children[0];
      if (firstChild.children.length > 0) {
        const meshGeometry = firstChild.children.find(x => x.type === 'Mesh') as THREE.Mesh;
        if (meshGeometry) {
          return meshGeometry.geometry;
        }
        const groupGeometry = firstChild.children.find(x => x.type === 'Group') as THREE.Group;
        if (groupGeometry) {
          const meshes: THREE.BufferGeometry[] = [];
          for (let j = 0; j < groupGeometry.children.length; j++) {
            const meshGeometry = groupGeometry.children[j] as THREE.Mesh;
            const mesh = meshGeometry.geometry;
            meshes.push(mesh);
          }
          return mergeGeometries(meshes);
        }
      }
    }
    return undefined;
  }

  async loadModel(url: string): Promise<THREE.Group | null> {
    const loader = new GLTFLoader();
    return new Promise((resolve, reject) => {
      loader.load(
        url,
        (gltf) => {
          const model = new THREE.Group();
          model.add(gltf.scene);
          gltf.scene.traverse(child => {
            // Perform any additional processing on each child if needed
          });
          resolve(model);
        },
        undefined, // onProgress callback is optional, can be omitted or used if needed
        (error) => {
          console.error('Error loading model:', error);
          reject(null);
        }
      );
    });
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