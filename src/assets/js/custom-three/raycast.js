
import {LitElement, html} from 'lit-element';

import * as THREE from 'three';

import Stats from '../../../../node_modules/three/examples/jsm/libs/stats.module.js';

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
      offset:{type: Object},
      pickingData:{type: Object}
    };
  }

  constructor() {
    super();
    this.mouse = new THREE.Vector2();
    this.offset = new THREE.Vector3( 10, 10, 10 );
    this.pickingData = [];
    this.init();
    this.animate();
  }

  init() {

    this.container = document.getElementById( "container" );

    this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
    this.camera.position.z = 1000;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color( 0xffffff );

    this.pickingScene = new THREE.Scene();
    this.pickingTexture = new THREE.WebGLRenderTarget( 1, 1 );

    this.scene.add( new THREE.AmbientLight( 0x555555 ) );

    const light = new THREE.SpotLight( 0xffffff, 1.5 );
    light.position.set( 0, 500, 2000 );
    this.scene.add( light );

    const pickingMaterial = new THREE.MeshBasicMaterial( { vertexColors: true } );
    const defaultMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true, vertexColors: true, shininess: 0	} );

    function applyVertexColors( geometry, color ) {

      const position = geometry.attributes.position;
      const colors = [];

      for ( let i = 0; i < position.count; i ++ ) {

        colors.push( color.r, color.g, color.b );

      }

      geometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );

    }

    const geometriesDrawn = [];
    const geometriesPicking = [];

    const matrix = new THREE.Matrix4();
    const quaternion = new THREE.Quaternion();
    const color = new THREE.Color();

    for ( let i = 0; i < 50; i ++ ) {

      let geometry = new THREE.BoxBufferGeometry();

      const position = new THREE.Vector3();
      position.x = Math.random() * 10000 - 5000;
      position.y = Math.random() * 6000 - 3000;
      position.z = Math.random() * 8000 - 4000;

      const rotation = new THREE.Euler();
      rotation.x = Math.random() * 2 * Math.PI;
      rotation.y = Math.random() * 2 * Math.PI;
      rotation.z = Math.random() * 2 * Math.PI;

      const scale = new THREE.Vector3();
      scale.x = Math.random() * 200 + 100;
      scale.y = Math.random() * 200 + 100;
      scale.z = Math.random() * 200 + 100;

      quaternion.setFromEuler( rotation );
      matrix.compose( position, quaternion, scale );

      geometry.applyMatrix4( matrix );

      // give the geometry's vertices a random color, to be displayed

      applyVertexColors( geometry, color.setHex( Math.random() * 0xffffff ) );

      geometriesDrawn.push( geometry );

      geometry = geometry.clone();

      // give the geometry's vertices a color corresponding to the "id"

      applyVertexColors( geometry, color.setHex( i ) );

      geometriesPicking.push( geometry );

      this.pickingData[ i ] = {

        position: position,
        rotation: rotation,
        scale: scale

      };

    }

    const objects = new THREE.Mesh( BufferGeometryUtils.mergeBufferGeometries( geometriesDrawn ), defaultMaterial );
    this.scene.add( objects );

    this.pickingScene.add( new THREE.Mesh( BufferGeometryUtils.mergeBufferGeometries( geometriesPicking ), pickingMaterial ) );

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
    this.controls.rotateSpeed = 1.0;
    this.controls.zoomSpeed = 1.2;
    this.controls.panSpeed = 0.8;
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

  }

  animate() {

    window.requestAnimationFrame( () => this.animate() );

    this.render();
    this.stats.update();

  }

  render() {

    this.controls.update();

    this.pick();

    this.renderer.setRenderTarget( null );
    this.renderer.render( this.scene, this.camera );

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

    if ( data ) {

      //move our highlightBox so that it surrounds the picked object

      if ( data.position && data.rotation && data.scale ) {

        this.highlightBox.position.copy( data.position );
        this.highlightBox.rotation.copy( data.rotation );
        this.highlightBox.scale.copy( data.scale ).add( this.offset );
        this.highlightBox.visible = true;

      }

    } else {

      this.highlightBox.visible = false;

    }

  }



}

window.customElements.define('ray-cast', RayCast);