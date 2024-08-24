
import { LitElement } from 'lit';
import * as THREE from 'three';
import _, { find } from 'lodash';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

class ThreeBase extends LitElement {
  mouse: THREE.Vector2;
  mousePos: { x: number, y: number };
  
  container: HTMLElement | null;
  camera: THREE.Camera;
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
    this.mousePos = { x: 0, y: 0 };

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
  };

  async getModel(url): Promise<THREE.BufferGeometry> {
    // Try to load the model and catch any errors
    try {
      const geometry = await this.getModelMesh(url);

      // If the geometry is undefined, throw an error
      if (!geometry) {
        throw new Error(`Model '${url}' failed to load or returned undefined geometry.`);
      }

      return geometry;
    }
    catch (error) {
      // Add more context to the error
      throw new Error(`Failed to load model '${url}': ${error.message}`);
    }
  }

  async getFiles(modelUrls): Promise<object> {
    const modelPromises = modelUrls.map(async (model) => {
      return { key: model.key, geometry: await this.getModel(model.url) };
    });
    const modelsArray = await Promise.all(modelPromises);
    const models = modelsArray.reduce((acc, model) => {
      acc[model.key] = model.geometry;
      return acc;
    }, {});
    return models
  }

  findNestedGeometry(model: THREE.Group): THREE.BufferGeometry | undefined {
    for (const child of model.children) {
        if (child.type === 'Mesh') {
          return (child as THREE.Mesh).geometry;
        } 
        else if (child.type === 'Group') {
          const group = child as THREE.Group;
          const meshes: THREE.BufferGeometry[] = [];
          
          for (const groupChild of group.children) {
              if (groupChild.type === 'Mesh') {
                  meshes.push((groupChild as THREE.Mesh).geometry);
              }
          }
          
          if (meshes.length > 0) {
              return mergeGeometries(meshes);
          }
        }
        
        // Recursively check nested groups
        const nestedGeometry = this.findNestedGeometry(child as THREE.Group);
        if (nestedGeometry) {
            return nestedGeometry;
        }
    }
    
    // If no geometry is found, return undefined
    return undefined;
  }

  async getModelMesh(url: string): Promise<THREE.BufferGeometry | undefined> {
    const model = await this.loadModel(url);
    if (model) {
      return this.findNestedGeometry(model);
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
    this.mousePos = { x: event.clientX, y: event.clientY };
  }

  startAnimation() {
    if(this.controls){
      this.controls.update();
    }
    this.renderer.render(this.scene, this.camera);
  }
}

export default ThreeBase;