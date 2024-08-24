import { LitElement } from "lit";
import * as THREE from "three";
import _ from "lodash";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import ThreeBase from './base';
import colours from './colours.ts';

class ThreeDModel extends ThreeBase {

  white: THREE.Color;
  light_pink: THREE.Color;
  camera: THREE.OrthographicCamera;
  model: THREE.Group;
  width: number;
  height: number;
  mesh: THREE.InstancedMesh;

  constructor() {
    super();
    this.setupScene = this.setupScene.bind(this);

    this.white = new THREE.Color().setHex(colours.white);
    this.light_pink = new THREE.Color().setHex(colours.light_pink);
  }

  async firstUpdated() {
    // Give the browser a chance to paint
    await new Promise((r) => setTimeout(r, 0));
    this.init();
    const geometry = await this.getModel("/assets/models/gltf/questionmark.glb")
    const material = new THREE.MeshPhongMaterial({ color: this.white, flatShading: true, shininess: 0 });

    this.mesh = new THREE.InstancedMesh(geometry, material, 20);
    this.setupLights();
    this.setupScene();
  }

  setupLights() {
    this.scene.background = new THREE.Color(this.light_pink);

    this.camera = new THREE.OrthographicCamera(
      this.width / -2,
      this.width / 2,
      this.height / 2,
      this.height / -2,
      -100,
      1000,
    );

    var light = new THREE.HemisphereLight(0x470b16, 100, 10);
    light.position.set(0, 0, 10);
    this.scene.add(light);

    this.scene.add( this.mesh );
  }

  setupScene() {
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.width = 100;
    this.height = 100;
    this.renderer.setSize(this.width, this.height);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container?.appendChild( this.renderer.domElement );
    this.renderer.setAnimationLoop(this.startAnimation);

    window.addEventListener('resize', this.onWindowResize);
  };

  onWindowResize() {
    this.camera.left = this.width / -2;
    this.camera.right = this.width / 2;
    this.camera.top = this.height / 2;
    this.camera.bottom = this.height / -2;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
  }
}

window.customElements.define("three-d-model", ThreeDModel);
