
import * as THREE from 'three';
import 'lodash';
import {LitElement, html} from 'lit-element';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

class RayCast extends LitElement {
  static get properties() {
    return {
      container: {type: Object},
      camera: {type: Object},
      controls: {type: Object},
      scene: {type: Object},
      renderer: {type: Object},
      pickingTexture: {type: Object},
      pickingScene: {type: Object},
      highlightShape: {type: Object},
      mouse: {type: Object},
      mousePosX: {type: Object},
      mousePosY: {type: Object},
      infoVisible: {type: String},
      offset: {type: Object},
      pickingData: {type: Object},
      cursorType: {type:String},
      canClick: {type:Boolean},
      link: {type:String},
      duplicated: {type:Boolean},
      que: {type: Object},
      work: {type: Object},
      queBig: {type: Object},
      workBig: {type: Object},
      files: {type: Array}
    };
  }

  constructor() {
    super();
    this.mouse = new THREE.Vector2();
    this.mousePosX = "0px";
    this.mousePosY = "0px";
    this.beganTouching = false;
    this.offset = new THREE.Vector3( 1, 1, 1 );
    this.duplicated = false;
    this.pickingData = [];
    this.cursorType = 'grab';
    this.canClick = false;
    this.link = ""
    this.addEventListener('click', this.clickLink);
    this.addEventListener('touchstart', this.touchStart)
    this.addEventListener("touchmove", this.touchMove);
    this.addEventListener("touchcancel", this.touchMove);
    this.addEventListener('touchend', this.touchEnd)
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
    this.animate();
  }

  init() {

    this.container = this.shadowRoot.getElementById( "container" );

    this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
    this.camera.position.z = 1000;

    this.XCenter = window.innerWidth/2 + "px";
    this.YCenter = window.innerHeight/2 + "px";

    this.mousePosX = this.XCenter;
    this.mousePosY = this.YCenter;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color( 0x424242 );

    this.pickingScene = new THREE.Scene();
    this.pickingTexture = new THREE.WebGLRenderTarget( 1, 1 );

    this.scene.add( new THREE.AmbientLight( 0x555555 ) );

    const light = new THREE.SpotLight( 0xffffff, 1.5 );
    light.position.set( 0, 500, 20000 );
    this.scene.add( light );

    this.files = ['que', 'work', 'github', 'math'];

    this.work = this.loadModel( '/src/assets/models/gltf/radcam.glb' );
    this.workBig = this.loadModel( '/src/assets/models/gltf/radcamBig.glb' );
    this.que = this.loadModel( '/src/assets/models/gltf/questionmark.glb' );
    this.queBig = this.loadModel( '/src/assets/models/gltf/questionmarkBig.glb' );
    this.github = this.loadModel( '/src/assets/models/gltf/github.glb' );
    this.githubBig = this.loadModel( '/src/assets/models/gltf/githubBig.glb' );
    this.math = this.loadModel( '/src/assets/models/gltf/math.glb' );
    this.mathBig = this.loadModel( '/src/assets/models/gltf/mathBig.glb' );

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

    this.renderer.domElement.addEventListener( 'mousemove', this.onMouseMove.bind(this) );
    window.addEventListener( 'resize', this.onWindowResize.bind(this), false );
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.XCenter = window.innerWidth/2 + 'px';
    this.YCenter = window.innerHeight/2 + 'px';
    this.mousePosX = this.XCenter;
    this.mousePosY = this.YCenter;
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

    if(this.duplicated == true){
      this.threeRender();
    }

  }

  threeRender() {

    this.controls.update();

    this.pick();

    this.renderer.setRenderTarget( null );
    this.renderer.render( this.scene, this.camera );

  }

  duplicate() {

    var files = this.files;

    const geometriesDrawn = {};
    const geometriesPicking = {};

    const matrix = new THREE.Matrix4();
    const quaternion = new THREE.Quaternion();
    const color = new THREE.Color();

    const pickingMaterial = new THREE.MeshBasicMaterial( { vertexColors: true } );
    const defaultMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, flatShading: true, vertexColors: true, shininess: 0	} );
    const geometriesTypes = []

    var clones = this.cloneFiles(files)
    if(clones == null){
      return;
    }

    //hide the loading label
    this.parentElement.children.loading.style.visibility = 'hidden'

    for (var i in files){
      var currentType = files[i]
      geometriesDrawn[currentType] = [];
      geometriesPicking[currentType] = [];
    }

    for ( let i = 1; i < 51; i ++ ) {

      var randomPick = Math.floor(Math.random() * files.length);  
      var objectThisTime = clones[randomPick];
      var smallObject = objectThisTime.data.clone();

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

      smallObject.applyMatrix4( matrix );

      // give the peep's vertices a random color, to be displayed

      this.applyVertexColors( smallObject, color.setHex( 0x060606 ) );

      geometriesDrawn[objectThisTime.type].push( smallObject );

      // give the peep's vertices a color corresponding to the "id"

      smallObject = smallObject.clone();

      this.applyVertexColors( smallObject, color.setHex( i ) );

      geometriesPicking[objectThisTime.type].push( smallObject );

      this.pickingData[ i ] = {

        position: position,
        rotation: rotation,
        scale: scale,
        type: objectThisTime.type

      };

    }

    this.highlightShape = {}

    for (var i in files){

      var type = files[i]

      if(type == 'work'){
        //0xc96833 --orange
        //0x000422 --darkblue
        var highlightColor = 0xc96833;
      }
      if(type == 'github'){
        //0x21023a --dark purple
        //0x380860 --bright purple
        //0x370e42 --pinkier purple
        var highlightColor = 0x370e42;
      }
      if(type == 'que'){
        var highlightColor = 0xff4162;
      }
      if(type == 'math'){
        //0xd5fdd5 --paler green
        var highlightColor = 0xbfe3bf;
      }

      this.highlightShape[files[i]] = new THREE.Mesh(
        clones[i].bigData,
        new THREE.MeshPhongMaterial( { color: highlightColor, flatShading: false, shininess: 150	}
      ) );
      this.scene.add( this.highlightShape[files[i]] );

      this.objects = new THREE.Mesh( BufferGeometryUtils.mergeBufferGeometries( geometriesDrawn[files[i]] ), defaultMaterial );
      this.scene.add( this.objects );
  
      this.pickingScene.add( new THREE.Mesh( BufferGeometryUtils.mergeBufferGeometries( geometriesPicking[files[i]] ), pickingMaterial ) );
  

    }

    this.duplicated = true;

  }

  cloneFiles(files){

    for (var i in files){
      var found = _.get(this,[files[i],'children',0,'children'],null);
      var foundBig = _.get(this,[files[i]+'Big','children',0,'children'],null);
      if(found == null || foundBig == null){
        return null;
      }
    }

    var clones = [];

    for (var i in files){

      var clone = {};
      var currentType = files[i];

      var littleMesh = _.get(this,[currentType,'children',0,'children']);
      var hasLittleMesh = littleMesh.find(x=>x.type=='Mesh');

      if(hasLittleMesh){
        clone['data'] = littleMesh.find(x=>x.type=='Mesh').geometry;
      }
      else{
        var hasLittleMeshGroup = littleMesh.find(x=>x.type=='Group')
        if( hasLittleMeshGroup ){
          var meshes = []
          for(var j=0; j < hasLittleMeshGroup.children.length; j++){
            var mesh = hasLittleMeshGroup.children[j].geometry
            meshes.push(mesh)
          }
          var groupMeshes = BufferGeometryUtils.mergeBufferGeometries( meshes )
          clone['data'] = groupMeshes;
        }
      }

      var bigMesh = _.get(this,[currentType+'Big','children',0,'children']);
      var hasBigMesh = bigMesh.find(x=>x.type=='Mesh')

      if(hasBigMesh){
        clone['bigData'] = bigMesh.find(x=>x.type=='Mesh').geometry;
      }
      else{
        var hasBigMeshGroup = bigMesh.find(x=>x.type=='Group')
        if( hasBigMeshGroup ){
          var meshes = []
          for(var j=0; j < hasBigMeshGroup.children.length; j++){
            var mesh = hasBigMeshGroup.children[j].geometry
            meshes.push(mesh)
          }
          var groupMeshes = BufferGeometryUtils.mergeBufferGeometries( meshes )
          clone['bigData'] = groupMeshes;
        }
      }

      clone['type'] = currentType
      clones.push(clone);

    }

    return clones;

  }

  pick() {

    //render the picking scene off-screen

    // set the view offset to represent just a single pixel under the mouse

    var mouseX = this.mouse.x;
    var mouseY = this.mouse.y;

    var touchScreen = window.matchMedia("(hover: none)").matches;

    if(touchScreen){
      mouseX = this.XCenter.replace('px', '');
      mouseY = this.YCenter.replace('px', '');
    }

    this.camera.setViewOffset( this.renderer.domElement.width, this.renderer.domElement.height, mouseX * window.devicePixelRatio | 0, mouseY * window.devicePixelRatio | 0, 1, 1 );

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
    var debugWindow = this.shadowRoot.getElementById( "infoText" );

    if( id>0 ){
      this.cursorType = "pointer";
      this.infoVisible = "visible"

      if(data.type == 'work'){
        this.link = "src/portfolio.html";
        debugWindow.innerHTML = 'work portfolio'
      }
      if(data.type == 'github'){
        this.link = "https://github.com/herdofsheep";
        debugWindow.innerHTML = 'github'
      }
      if(data.type == 'que'){
        this.link = "src/what.html";
        debugWindow.innerHTML = "what's this?"
      }
      if(data.type == 'math'){
        this.link = "src/art.html";
        debugWindow.innerHTML = "art portfolio"
      }

      this.canClick = true;
    }
    else{
      this.infoVisible = "hidden"
    }

    if ( data  && id > 0 ) {

      //move our highlightShape so that it surrounds the picked object

      if ( data.position && data.rotation && data.scale && data.type ) {

        this.highlightShape[data.type].position.copy( data.position );
        this.highlightShape[data.type].rotation.copy( data.rotation );
        this.highlightShape[data.type].scale.copy( data.scale ).add( this.offset );
        this.highlightShape[data.type].visible = true;

      }

    } 
    else {

      for (var i in this.files){
        this.highlightShape[this.files[i]].visible = false;
      }
      this.cursorType = "cell";
      this.canClick = false;

    }

  }

  clickLink(){
    if(this.canClick){
      window.location.href = this.link;
    }
  }

  touchStart(){
    if(this.canClick){
      this.beganTouching = true
    }
  }

  touchMove(){
    this.beganTouching = false;
  }

  touchEnd(){
    if(this.canClick && this.beganTouching){
      window.location.href = this.link;
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