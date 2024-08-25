import { html } from "lit";
import * as THREE from "three";
import _ from "lodash";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import ThreeBase from './base';
import colours from './colours.ts';

class ThreeDModel extends ThreeBase {

  white: THREE.Color;
  light_pink: THREE.Color;
  bright_pink: THREE.Color;
  dark_grey: THREE.Color;

  highlight: HTMLElement;

  camera: THREE.OrthographicCamera;
  model: THREE.Group;
  width: number;
  height: number;
  mesh: THREE.Mesh;

  constructor() {
    super();
    this.setupScene = this.setupScene.bind(this);

    this.white = new THREE.Color().setHex(colours.white);
    this.light_pink = new THREE.Color().setHex(colours.light_pink);
    this.bright_pink = new THREE.Color().setHex(colours.bright_pink);
    this.dark_grey = new THREE.Color().setHex(colours.dark_grey);

    this.highlight = this.parentElement?.querySelector('.twodlink') as HTMLElement;

    this.width = 100;
    this.height = 100;
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
    const link = this.getAttribute('link')
    const geometry = await this.getModel(link)
    const material = new THREE.MeshPhongMaterial({ color: this.dark_grey, flatShading: true, shininess: 0 });

    this.mesh = new THREE.Mesh(geometry, material);
    this.setupLights();
    this.setupScene();
    this.startAnimation();
  }

  setupLights() {
    this.scene.background = new THREE.Color(this.light_pink);

    this.camera = new THREE.OrthographicCamera( this.width / - 2, this.width / 2, this.height / 2, this.height / - 2, 0, 1000 );
    this.scene.add( this.mesh );
    this.mesh.scale.set( 8, 8, 8 );
    this.mesh.position.set(0, 0, -100);

    const light_one = new THREE.SpotLight( this.white, 1.5 );
    light_one.position.set( 0, 10, 10 );
    this.scene.add(light_one);

    const light_two = new THREE.HemisphereLight(this.white, this.bright_pink,  3);
    light_two.position.set(0, 1, 0);
    this.scene.add(light_two);
  }

  setupScene() {
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.container?.appendChild( this.renderer.domElement );
    this.renderer.setAnimationLoop(this.startAnimation);
  };

  startAnimation() {
      let hover = this.highlight.matches(':hover');
      let focus = this.highlight.matches(':focus');
      const material = this.mesh.material as THREE.MeshPhongMaterial;
      if (hover || focus) {
        material.color.setHex(colours.light_pink);
        material.shininess = 100;
      } else {
        material.color.setHex(colours.dark_grey);
      }
      let timer = Date.now() * 0.0005;
      this.mesh.rotation.x = Math.sin(timer);
      this.mesh.rotation.y = Math.cos(timer);
      this.renderer.render(this.scene, this.camera);
    }
}

window.customElements.define("three-d-model", ThreeDModel);
