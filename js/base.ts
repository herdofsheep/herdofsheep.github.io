
import { LitElement, html } from 'lit-element';
import * as THREE from 'three';
import _ from 'lodash';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

class ThreeBase extends LitElement {
  mouse: THREE.Vector2;
  mousePosX: string;
  mousePosY: string;
  container: HTMLElement | null;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  controls: TrackballControls;
  XCenter: string;
  YCenter: string;
  geometries: object;
  meshes: object;

  constructor() {
    super();
    this.startAnimation = this.startAnimation.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);

    this.mouse = new THREE.Vector2();
    this.mousePosX = "0px";
    this.mousePosX = "0px";
    this.scene = new THREE.Scene();

    this.renderer = new THREE.WebGLRenderer({ antialias: true });

    this.geometries = {}
    this.meshes = {}
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
  };

  async getFiles(modelUrls) {

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
    this.renderer.render(this.scene, this.camera);
  }
}

export default ThreeBase;