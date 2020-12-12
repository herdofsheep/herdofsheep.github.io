
import {LitElement, html} from 'lit-element';
import * as THREE from 'three';
import 'lodash/lodash.min';

import Stats from '../../../../node_modules/three/examples/jsm/libs/stats.module.js';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TrackballControls } from '../../../../node_modules/three/examples/jsm/controls/TrackballControls.js';
import { BufferGeometryUtils } from '../../../../node_modules/three/examples/jsm/utils/BufferGeometryUtils.js';

class RayCast extends LitElement {
  static get properties() {
    return {
      container:{type: Object},
      stats:{type: Object},
      camera:{type: Object},
      controls:{type: Object},
      scene:{type: Object},
      renderer:{type: Object},
      pickingTexture:{type: Object},
      pickingScene:{type: Object},
      highlightBox:{type: Object},
      mouse:{type: Object},
      mousePosX:{type: Object},
      mousePosY:{type: Object},
      offset:{type: Object},
      pickingData:{type: Object},
      cursorType: {type:String},
      canClick: {type:Boolean},
      link: {type:String},
      duplicated: {type:Boolean},
      que:{type: Object},
    };
  }

  constructor() {
    super();
    this.mouse = new THREE.Vector2();
    this.mousePosX = "0px";
    this.mousePosY = "0px";
    this.offset = new THREE.Vector3( 10, 10, 10 );
    this.duplicated = false;
    this.pickingData = [];
    this.cursorType = 'grab';
    this.canClick = false;
    this.link = ""
    this.addEventListener('click', this.clickLink);
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
        background:white;
        position:absolute;
        z-index: 10;
      }
    </style>
    <div id="container" ></div>
    <div id="debug" class="followMouse" ><div>
    `;
  }

  async firstUpdated() {
    // Give the browser a chance to paint
    await new Promise((r) => setTimeout(r, 0));
    this.init();
    this.animate();
  }

  init() {

    this.container = this.shadowRoot.getElementById( "container" );

    this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
    this.camera.position.z = 1000;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color( 0x424242 );

    this.pickingScene = new THREE.Scene();
    this.pickingTexture = new THREE.WebGLRenderTarget( 1, 1 );

    this.scene.add( new THREE.AmbientLight( 0x555555 ) );

    const light = new THREE.SpotLight( 0xffffff, 1.5 );
    light.position.set( 0, 500, 20000 );
    this.scene.add( light );

    this.que = this.loadModel( '/src/assets/models/gltf/questionmark.glb' );

    this.highlightBox = new THREE.Mesh(
      new THREE.BoxBufferGeometry(),
      new THREE.MeshLambertMaterial( { color: 0xffff00 }
      ) );
    this.scene.add( this.highlightBox );

    this.renderer = new THREE.WebGLRenderer( { antialias: true } );
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.container.appendChild( this.renderer.domElement );

    this.controls = new TrackballControls( this.camera, this.renderer.domElement );
    this.controls.rotateSpeed = -1.0;
    this.controls.zoomSpeed = 1.2;
    this.controls.panSpeed = -0.8;
    this.controls.noZoom = false;
    this.controls.noPan = false;
    this.controls.staticMoving = true;
    this.controls.dynamicDampingFactor = 0.3;

    this.stats = new Stats();
    // this.container.appendChild( this.stats.dom );

    this.renderer.domElement.addEventListener( 'mousemove', this.onMouseMove.bind(this) );

  }

  onMouseMove( e ) {

    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;

    this.mousePosX = this.mouse.x + 15 + 'px';
    this.mousePosY = this.mouse.y + 15 + 'px';

  }

  loadModel( url ){
    var loader = new GLTFLoader();
    var model = new THREE.Group;

    loader.load( url , function ( gltf ) {

        gltf.scene.traverse( function ( child ) {});
        model.add( gltf.scene );

    } );

    return model;

  }

  animate() {

    window.requestAnimationFrame( () => this.animate() );

    if(this.duplicated == false){
        this.duplicate();
    }

    this.threeRender();
    this.stats.update();

  }

  threeRender() {

    this.controls.update();

    this.pick();

    this.renderer.setRenderTarget( null );
    this.renderer.render( this.scene, this.camera );

  }

  duplicate() {
    var found = _.get(this.que,['children',0,'children'],null)
    if(found){

        const geometriesDrawn = [];
        const geometriesPicking = [];

        const matrix = new THREE.Matrix4();
        const quaternion = new THREE.Quaternion();
        const color = new THREE.Color();

        const pickingMaterial = new THREE.MeshBasicMaterial( { vertexColors: true } );
        const defaultMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true, vertexColors: true, shininess: 0	} );

        for ( let i = 1; i < 51; i ++ ) {

          let geometry = new THREE.BoxBufferGeometry();

          var peep = this.que.children[0].children.find(x=>x.type=='Mesh').geometry.clone();

          const position = new THREE.Vector3();
          position.x = Math.random() * 10000 - 5000;
          position.y = Math.random() * 6000 - 3000;
          position.z = Math.random() * 8000 - 4000;

          const rotation = new THREE.Euler();
          rotation.x = Math.random() * 2 * Math.PI;
          rotation.y = Math.random() * 2 * Math.PI;
          rotation.z = Math.random() * 2 * Math.PI;

          var scaleSize = 50;
          const scale = new THREE.Vector3(scaleSize,scaleSize,scaleSize);

          quaternion.setFromEuler( rotation );
          matrix.compose( position, quaternion, scale );

          peep.applyMatrix4( matrix );

          // give the geometry's vertices a random color, to be displayed

          this.applyVertexColors( peep, color.setHex( 0x060606 ) );

          geometriesDrawn.push( peep );

          // give the geometry's vertices a color corresponding to the "id"

          this.applyVertexColors( geometry, color.setHex( i ) );

          geometriesPicking.push( peep );

          this.pickingData[ i ] = {

            position: position,
            rotation: rotation,
            scale: scale

          };

        }

        const objects = new THREE.Mesh( BufferGeometryUtils.mergeBufferGeometries( geometriesDrawn ), defaultMaterial );
        this.scene.add( objects );

        this.pickingScene.add( new THREE.Mesh( BufferGeometryUtils.mergeBufferGeometries( geometriesPicking ), pickingMaterial ) );

        this.duplicated = true;
      }
  }

  pick() {

    //render the picking scene off-screen

    // set the view offset to represent just a single pixel under the mouse

    this.camera.setViewOffset( this.renderer.domElement.width, this.renderer.domElement.height, this.mouse.x * window.devicePixelRatio | 0, this.mouse.y * window.devicePixelRatio | 0, 1, 1 );

    // render the scene

    this.renderer.setRenderTarget( this.pickingTexture );
    this.renderer.render( this.pickingScene, this.camera );

    // clear the view offset so rendering returns to normal

    this.camera.clearViewOffset();

    //create buffer for reading single pixel

    const pixelBuffer = new Uint8Array( 4 );

    //read the pixel

    this.renderer.readRenderTargetPixels( this.pickingTexture, 0, 0, 1, 1, pixelBuffer );

    //interpret the pixel as an ID

    const id = ( pixelBuffer[ 0 ] << 16 ) | ( pixelBuffer[ 1 ] << 8 ) | ( pixelBuffer[ 2 ] );
    const data = this.pickingData[ id ];

    var debugWindow = this.shadowRoot.getElementById( "debug" );
    debugWindow.innerHTML = 'id: ' + id + '<br>' + pixelBuffer + '<br>' + this.pickingTexture;

    if ( data  && id > 0 ) {

      //move our highlightBox so that it surrounds the picked object

      if ( data.position && data.rotation && data.scale ) {

        this.highlightBox.position.copy( data.position );
        this.highlightBox.rotation.copy( data.rotation );
        this.highlightBox.scale.copy( data.scale ).add( this.offset );
        this.highlightBox.visible = true;
        this.cursorType = "pointer";
        this.link = "src/what.html";
        this.canClick = true;

      }

    } 
    else {

      this.highlightBox.visible = false;
      this.cursorType = "grab";
      this.canClick = false;

    }

  }

  clickLink(){
    if(this.canClick){
      window.location.href = "src/what.html";
    }
  }

  applyVertexColors( geometry, color ) {

    const position = geometry.attributes.position;
    const colors = [];

    for ( let i = 0; i < position.count; i ++ ) {

      colors.push( color.r, color.g, color.b );

    }

    geometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );

  }



}

window.customElements.define('ray-cast', RayCast);