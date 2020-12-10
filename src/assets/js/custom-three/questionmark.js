
import {LitElement, html} from 'lit-element';
import * as THREE from 'three';

import { GLTFLoader } from '../../../../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '../../../../node_modules/three/examples/jsm/controls/OrbitControls.js';


class QuestionMark extends LitElement {
    static get properties() {
        return {
            container:{type: Object},
            camera:{type: Object},
            controls:{type: Object},
            scene:{type: Object}, 
            renderer:{type: Object},
			mathena:{type: Object},
            kitty: {type: String}
        };
    }
    constructor() {
        super();
        this.kitty = 'wittle';
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

        this.container = document.createElement( 'div' );
        document.body.appendChild( this.container );

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera( 45, (window.innerWidth) / window.innerHeight, 0.1, 500 );
        this.camera.position.set( 0, 0, 2 );

        var light = new THREE.HemisphereLight( 0xbbbbff, 0x444422 );
        light.position.set( 0, 1, 0 );
        this.scene.add( light );

        // const geometry = new THREE.BoxGeometry();
        // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        // const cube = new THREE.Mesh( geometry, material );
        // this.scene.add( cube );

        this.mathena = this.loadModel( 'src/assets/models/gltf/mathena.gltf' );
        this.scene.add( this.mathena );

        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.gammaOutput = true;

        this.container.appendChild( this.renderer.domElement );

        // window.addEventListener( 'resize', this.onWindowResize, false );

        this.controls = new OrbitControls( this.camera, this.renderer.domElement );
        this.controls.update();
    }

    loadModel( url ){
        // model
        var loader = new GLTFLoader();
        var model = new THREE.Group;

        loader.load( url , function ( gltf ) {

            gltf.scene.traverse( function ( child ) {});
            model.add( gltf.scene );

        } );

        return model;

    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    }

    animate() {
        var self = this;
        
        window.requestAnimationFrame( () => self.animate() );
        this.render();
    }

    render() {
        var timer = Date.now() * 0.0005;

        this.mathena.rotation.x = timer*2;
        this.mathena.rotation.y = timer;

        //backgroundMesh.position.setX(0);
        var xpos = 9*Math.cos( 0.1*timer );
        
        this.mathena.position.setX(xpos);
        this.camera.position.set( xpos, 0, 3 );
        this.camera.lookAt( this.mathena.position );

        this.renderer.render( this.scene, this.camera );
    }


}

window.customElements.define('question-mark', QuestionMark);