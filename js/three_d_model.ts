import { html } from "lit";
import * as THREE from "three";
import _ from "lodash";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import ThreeBase from './base';
import colours from './colours.ts';

class ThreeDModel extends ThreeBase {

  white: THREE.Color;
  light_pink: THREE.Color;
  dark_grey: THREE.Color;

  // camera: THREE.OrthographicCamera;
  model: THREE.Group;
  width: number;
  height: number;
  mesh: THREE.Mesh;

  constructor() {
    super();
    this.setupScene = this.setupScene.bind(this);

    this.white = new THREE.Color().setHex(colours.white);
    this.light_pink = new THREE.Color().setHex(colours.light_pink);
    this.dark_grey = new THREE.Color().setHex(colours.dark_grey);

    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  render(){
    return html`
    <div id="container" ></div>
    `;
  }

  async firstUpdated() {
    // Give the browser a chance to paint
    await new Promise((r) => setTimeout(r, 0));
    this.init();
    const geometry = await this.getModel("/assets/models/gltf/questionmark.glb")
    const material = new THREE.MeshPhongMaterial({ color: this.white, flatShading: true, shininess: 0 });

    this.mesh = new THREE.Mesh(geometry, material);
    this.setupLights();
    this.setupScene();
    this.startAnimation();
  }

  setupLights() {
    this.scene.background = new THREE.Color(this.dark_grey);

    this.camera = new THREE.OrthographicCamera( this.width / - 2, this.width / 2, this.height / 2, this.height / - 2, 1, 1000 );
    this.scene.add( this.mesh );
    this.camera.position.set(0, 0, 0);
    this.camera.lookAt(this.mesh.position);

    const light_one = new THREE.SpotLight( this.white, 1.5 );
    light_one.position.set( 0, 500, 20000 );
    this.scene.add(light_one);

    const light_two = new THREE.HemisphereLight(this.white, 0x888888, 3);
    light_two.position.set(0, 1, 0);
    this.scene.add(light_two);
  }

  setupScene() {
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
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
