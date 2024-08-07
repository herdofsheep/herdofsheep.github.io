
import { LitElement, html } from 'lit';
import * as THREE from 'three';
import _ from 'lodash';

// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
// import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

class RayCast extends LitElement {
  mouse: THREE.Vector2;
  mousePosX: string;
  mousePosY: string;
  container: HTMLElement | null;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  mesh: THREE.InstancedMesh;
  count: number;
  color: THREE.Color;
  white: THREE.Color;
  renderer: THREE.WebGLRenderer;
  controls: OrbitControls;
  raycaster: THREE.Raycaster;
  XCenter: string;
  YCenter: string;

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
    this.startAnimation();
  }

  init() {
    this.container = this.shadowRoot?.getElementById("container") as HTMLElement;

    this.XCenter = window.innerWidth/2 + "px";
    this.YCenter = window.innerHeight/2 + "px";

    this.mousePosX = this.XCenter;
    this.mousePosY = this.YCenter;

    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
    const amount = parseInt(window.location.search.slice(1)) || 10;

    this.camera.position.set(amount, amount, amount);
    this.camera.lookAt(0, 0, 0);
  
    const light = new THREE.HemisphereLight(0xffffff, 0x888888, 3);
    light.position.set(0, 1, 0);
    this.scene.add(light);
  
    const geometry = new THREE.IcosahedronGeometry(0.5, 3);
    const material = new THREE.MeshPhongMaterial({ color: 0xffffff });
    const count = Math.pow(amount, 3);

    this.mesh = new THREE.InstancedMesh(geometry, material, count);
  
    let i = 0;
    const offset = (amount - 1) / 2;
  
    const matrix = new THREE.Matrix4();
  
    for (let x = 0; x < amount; x++) {
  
      for (let y = 0; y < amount; y++) {
  
        for (let z = 0; z < amount; z++) {
  
          matrix.setPosition(offset - x, offset - y, offset - z);
  
          this.mesh.setMatrixAt(i, matrix);
          this.mesh.setColorAt(i, this.color);
  
          i++;
  
        }
  
      }
  
    }
    this.scene.add(this.mesh);

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild( this.renderer.domElement );
    this.renderer.setAnimationLoop(this.startAnimation);
  
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.enableZoom = false;
    this.controls.enablePan = false;
  
    window.addEventListener('resize', this.onWindowResize);
    document.addEventListener('mousemove', this.onMouseMove);
    this.parentElement.children.loading.style.visibility = 'hidden'
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
  
    const intersection = this.raycaster.intersectObject(this.mesh);
  
    if (intersection.length > 0) {
  
      const instanceId = intersection[0].instanceId;
  
      this.mesh.getColorAt(instanceId,this.color);
  
      if (this.color.equals(this.white)) {
  
        this.mesh.setColorAt(instanceId, this.color.setHex(Math.random() * 0xffffff));
  
        this.mesh.instanceColor.needsUpdate = true;
  
      }
  
    }
  
    this.renderer.render(this.scene, this.camera);
  }
}

window.customElements.define('ray-cast', RayCast);