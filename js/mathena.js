import { LitElement, html } from "lit";
import * as THREE from "three";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

class Mathena3D extends LitElement {
  static get properties() {
    return {
      container: { type: Object },
      camera: { type: Object },
      controls: { type: Object },
      scene: { type: Object },
      renderer: { type: Object },
      mathena: { type: Object },
      kitty: { type: String },
    };
  }

  constructor() {
    super();
    this.init();
    this.animate();
  }

  render() {
    return html`
      <p>template content</p>
      ${this.kitty}
    `;
  }

  init() {
    this.container = document.getElementById("container");
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      500,
    );
    this.camera.position.set(0, 0, 2);

    var light = new THREE.HemisphereLight(0xbbbbff, 0x444422);
    light.position.set(0, 1, 0);
    this.scene.add(light);

    var texture = new THREE.TextureLoader().load("/assets/images/planets.jpg");
    var scale = 15;

    var geometry = new THREE.PlaneGeometry(1.3847 * scale, 0.3 * scale);
    var material = new THREE.MeshBasicMaterial({ map: texture });

    var backgroundMesh = new THREE.Mesh(geometry, material);

    backgroundMesh.material.depthTest = false;
    backgroundMesh.material.depthWrite = false;

    this.scene.add(backgroundMesh);

    this.mathena = this.loadModel("/assets/models/gltf/mathena.gltf");
    this.scene.add(this.mathena);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.gammaOutput = true;

    this.container.appendChild(this.renderer.domElement);

    const self = this;

    window.addEventListener("resize", this.onWindowResize.bind(this), false);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.update();
  }

  loadModel(url) {
    var loader = new GLTFLoader();
    var model = new THREE.Group();

    loader.load(url, function (gltf) {
      gltf.scene.traverse(function (child) {});
      model.add(gltf.scene);
    });

    return model;
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.render();
  }

  render() {
    var timer = Date.now() * 0.0005;

    this.mathena.rotation.x = timer * 2;
    this.mathena.rotation.y = timer;

    //backgroundMesh.position.setX(0);
    var xpos = 9 * Math.cos(0.1 * timer);

    this.mathena.position.setX(xpos);
    this.camera.position.set(xpos, 0, 3);
    this.camera.lookAt(this.mathena.position);

    this.renderer.render(this.scene, this.camera);
  }
}

window.customElements.define("mathena-3d", Mathena3D);
