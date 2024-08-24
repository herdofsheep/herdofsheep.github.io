import { LitElement } from "lit";
import * as THREE from "three";
import _ from "lodash";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import ThreeBase from './base';
import colours from './colours.ts';

class ThreeDModel extends ThreeBase {

  light_pink: THREE.Color;
  o_camera: THREE.OrthographicCamera;
  model: THREE.Group;

  constructor() {
    super();
    this.setupScene = this.setupScene.bind(this);

    this.light_pink = new THREE.Color().setHex(colours.light_pink);
  }

  setupScene() {
  
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(100, 100);
    this.container?.appendChild( this.renderer.domElement );
    this.renderer.setAnimationLoop(this.startAnimation);

    window.addEventListener('resize', this.onWindowResize);
    document.addEventListener('mousemove', this.onMouseMove);
    var loadingDiv =this.parentElement?.querySelector('#loading') as HTMLElement;
    loadingDiv.style.visibility = 'hidden'

  };

  async firstUpdated() {
    this.init();
    this.setupScene();
    this.animate();
  }

  meep() {
    this.scene.background = new THREE.Color(this.light_pink);

    var width = this.container?.clientWidth || 100;
    var height = this.container?.clientHeight || 100;

    this.o_camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      -100,
      1000,
    );

    var light = new THREE.HemisphereLight(0x470b16, 100, 10);
    light.position.set(0, 0, 10);
    this.scene.add(light);
 
    this.model = this.loadModel("/src/assets/models/gltf/questionmark.glb");
    this.queAll = new THREE.Mesh();

    this.container.appendChild(this.renderer.domElement);

    window.addEventListener("resize", this.onWindowResize.bind(this), false);
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
    var width = this.container.clientWidth;
    var height = this.container.clientHeight;

    this.o_camera.left = width / -2;
    this.o_camera.right = width / 2;
    this.o_camera.top = height / 2;
    this.o_camera.bottom = height / -2;

    this.o_camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    if (this.duplicated == false) {
      this.duplicate();
    }
    this.render();
  }

  render() {
    var timer = Date.now() * 0.0005;

    if (this.ques) {
      for (let i = 0; i < this.ques.length; i++) {
        this.ques[i].rotation.x =
          3.14 * Math.cos(timer * 0.03 * (i + 100)) - 90;
      }
    }

    this.renderer.render(this.scene, this.o_camera);
    this.o_camera.lookAt(this.que.position);
  }

  duplicate() {
    var found = _.get(this.que, ["children", 0, "children"], null);
    if (found) {
      var ques = [];
      const matrix = new THREE.Matrix4();
      const quaternion = new THREE.Quaternion();

      var max = 14;
      for (let i = 0; i < max; i++) {
        var peep = this.que.children[0].children
          .find((x) => x.type == "Mesh")
          .geometry.clone();

        var offset = 50;
        var offsetCalc = (-offset * max) / 2 + i * offset + max;
        const position = new THREE.Vector3(offsetCalc, 0, 5);
        quaternion.setFromEuler(new THREE.Euler(0, 0, 0));
        var scaleSize = 5;
        const scale = new THREE.Vector3(scaleSize, scaleSize, scaleSize);

        matrix.compose(position, quaternion, scale);

        peep.applyMatrix4(matrix);
        var mat = new THREE.MeshStandardMaterial({ color: 0xff0808 });
        peep = new THREE.Mesh(peep, mat);

        ques.push(peep);
      }

      for (let i = 0; i < ques.length; i++) {
        this.scene.add(ques[i]);
      }
      this.ques = ques;
      this.duplicated = true;
    }
  }
}

window.customElements.define("three-d-model", ThreeDModel);
