
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
			que:{type: Object},
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

        this.container = document.getElementById( "container" );

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0xffffff );

        this.camera = new THREE.PerspectiveCamera( 45, (window.innerWidth) / window.innerHeight, 0.1, 500 );
        this.camera.position.set( 0, 0, 30 );

        var light = new THREE.PointLight( 0xff0000, 100, 10 );
        light.position.set( 0, 0, 10 );
        this.scene.add( light );

        this.que = this.loadModel( '/src/assets/models/gltf/questionmark.glb' );
        this.scene.add( this.que );

        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );
        this.renderer.gammaOutput = true;

        this.container.appendChild( this.renderer.domElement );

        window.addEventListener( 'resize', this.onWindowResize.bind(this), false );
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
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );
    }

    animate() {        
        window.requestAnimationFrame( () => this.animate() );
        this.render();
    }

    render() {
        var timer = Date.now() * 0.0005;

        this.que.rotation.x = timer*2;
        this.que.rotation.y = timer;

        this.renderer.render( this.scene, this.camera );
    }


}

window.customElements.define('question-mark', QuestionMark);