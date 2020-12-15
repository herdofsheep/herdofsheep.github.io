
import {LitElement, html} from 'lit-element';
import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


class BasicThree extends LitElement {

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

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        this.scene.add( cube );

        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.gammaOutput = true;

        this.container.appendChild( this.renderer.domElement );

        const self = this

        window.addEventListener( 'resize', this.onWindowResize.bind(this), false );

        this.controls = new OrbitControls( this.camera, this.renderer.domElement );
        this.controls.update();
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
    }

    animate() {        
        window.requestAnimationFrame( () => this.animate() );
        this.render();
    }

    render() {

        this.renderer.render( this.scene, this.camera );
    }

}

window.customElements.define('basic-three', BasicThree);