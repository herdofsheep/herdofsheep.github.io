
import { html, css } from 'lit';
import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

import ThreeBase from './base.ts';
import { any } from 'three/examples/jsm/nodes/Nodes.js';
import colours from './colours.ts';

import mathPath from "/assets/models/gltf/math.glb";
import workPath from "/assets/models/gltf/jennings_lo.glb";
import quePath from "/assets/models/gltf/questionmark.glb";

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
  raycaster: THREE.Raycaster;
  geometries: object;
  meshes: object;

  white: THREE.Color;
  dark_grey: THREE.Color;
  bright_pink: THREE.Color;
  light_pink: THREE.Color;

  colours: object;
  infoVisible: string = 'hidden';
  canClick: boolean;
  beganTouching: boolean;
  private modelInfo: ModelInfo[];
  debugWindow: HTMLElement;
  link: string;
  camera: THREE.PerspectiveCamera;
  mousePosX: string;
  mousePosY: string;
  clickingActive: boolean;

  constructor() {
    super();
    this.setupScene = this.setupScene.bind(this);
    
    this.white = new THREE.Color().setHex(colours.white);
    this.dark_grey = new THREE.Color().setHex(colours.dark_grey);
    this.light_pink = new THREE.Color().setHex(colours.light_pink);
    this.bright_pink = new THREE.Color().setHex(colours.bright_pink);
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
        font-size:50px;
        visibility: ${this.infoVisible};
        position:absolute;
        font-weight: 600;
        color: #ff284d;
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
    if (this.clickingActive == true && this.canClick == true) {
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
      { key: 'que', url: quePath, link: "statement", description: "statement"},
      { key: 'work', url: workPath, link: "CV", description: "CV"},
      { key: 'math', url: mathPath, link: "artwork", description: "artwork"},
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

    this.scene.background = new THREE.Color( this.light_pink );
    this.scene.add( new THREE.AmbientLight( this.bright_pink ) );

    const light_one = new THREE.SpotLight( this.white, 30000 );
    light_one.position.set( 0, 10, 100 );
    this.scene.add(light_one);

    const light_two = new THREE.HemisphereLight(this.white, this.bright_pink, 1);
    light_two.position.set(0, 1, 0);
    this.scene.add(light_two);

    const light_three = new THREE.SpotLight( this.bright_pink, 30000 );
    light_three.position.set( 0, -10, -100 );
    this.scene.add(light_three);
  }
  
  addModels(files){
  
    const objsToDraw = 20
    const material = new THREE.MeshPhongMaterial({ color: this.white, flatShading: true, shininess: 1});


    for ( let i = 0; i < Object.keys(files).length; i ++ ) {
      var geometry = files[Object.keys(files)[i]];
      var mesh = new THREE.InstancedMesh(geometry, material, objsToDraw);
      for ( let j = 0; j < objsToDraw; j ++ ) {
        // Create a transformation matrix
        const matrix = new THREE.Matrix4();
    
        // Random position
        const position = new THREE.Vector3(
          Math.random() * 100 - 50,
          Math.random() * 100 - 50,
          Math.random() * 100 - 50
        );
    
        // Random rotation
        const rotation = new THREE.Euler(
          Math.random() * 2 * Math.PI,
          Math.random() * 2 * Math.PI,
          Math.random() * 2 * Math.PI
        );
    
        // Apply position and rotation to the matrix
        matrix.compose(
          position,
          new THREE.Quaternion().setFromEuler(rotation),
          new THREE.Vector3(1, 1, 1) // scale (1, 1, 1) for no scaling
        );
    
        // Set the transformation matrix for the instance
        mesh.setMatrixAt(j, matrix);
    
        // Set color for the instance
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

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
  }

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
          this.link = (this.parentElement?.querySelector("#"+modelInfoItem.link) as HTMLAnchorElement)?.href;
          this.debugWindow.innerHTML = modelInfoItem.description;
        }
        const instanceId = intersection[0].instanceId;
        mesh.setColorAt(instanceId, this.light_pink);
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