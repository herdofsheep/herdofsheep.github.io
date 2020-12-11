
import {LitElement, html} from 'lit-element';
import * as THREE from 'three';
import '../../../../node_modules/lodash/lodash.min.js';

import { GLTFLoader } from '../../../../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { BufferGeometryUtils } from '../../../../node_modules/three/examples/jsm/utils/BufferGeometryUtils.js';
class QuestionMark extends LitElement {

    static get properties() {
        return {
            container:{type: Object},
            camera:{type: Object},
            controls:{type: Object},
            scene:{type: Object}, 
            renderer:{type: Object},
            que:{type: Object},
            queAll:{type: Object},
            duplicated:{tpye:Boolean}
        };
    }

    constructor() {
        super();
        this.duplicated = false;
        this.init();
        this.animate();
    }

    init() {

        this.container = document.getElementById( "container" );

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0xffffff );

        this.camera = new THREE.PerspectiveCamera( 45, (window.innerWidth) / window.innerHeight, 1, 500 );
        this.camera.position.set( 0, 0, 30 );

        var light = new THREE.HemisphereLight( 0xff0000, 100, 10 );
        light.position.set( 0, 0, 10 );
        this.scene.add( light );

        this.que = this.loadModel( '/src/assets/models/gltf/questionmark.glb' );
        this.queAll = new THREE.Mesh();

        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( this.container.clientWidth, this.container.clientHeight );
        this.renderer.gammaOutput = true;

        this.container.appendChild( this.renderer.domElement );

        window.addEventListener( 'resize', this.onWindowResize.bind(this), false );
    }

    // loadModel( url ){
    //     new GLTFLoader().load(url, result => { 
    //         model = result.scene.children[0]; //select first object in the model file
    //         model.position.set(0,0,0); //set model position
    //       });
    //     return model
    // }

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
        if(this.duplicated == false){
            this.duplicate();
        }
        this.render();
    }

    render() {
        var timer = Date.now() * 0.0005;

        this.queAll.rotation.x = timer*2;
        this.queAll.rotation.y = timer;

        this.renderer.render( this.scene, this.camera );
    }

    duplicate() {
        var found = _.get(this.que,['children',0,'children'],null)
        if(found){
            var ques = []
            
            
            var keep = new THREE.Mesh(1,1,1);

            const matrix = new THREE.Matrix4();
            const quaternion = new THREE.Quaternion();
            


            for ( let i = 0; i < 3; i ++ ) {
                
                var meep = new THREE.BoxBufferGeometry(1,1,1);
                // var meep = new THREE.BoxGeometry(1,1,1);

                var mesh = this.que.clone();
                var offset = 40;
                mesh.position.set(-offset+i*offset,0,0);
                var peep = mesh.children[0].children.find(x=>x.type=='Mesh').geometry;
                
                // var bufferGeometry = new THREE.BufferGeometry().fromGeometry( mesh.geometry );
                // var offset = 40;
                // const position = new THREE.Vector3(-offset+i*offset,0,0);
                // const rotation = new THREE.Euler();
                // quaternion.setFromEuler( rotation );

                // const scale = new THREE.Vector3(1,1,1);

                // matrix.compose( position, quaternion, scale );
                // peep.attributes.position.needsUpdate = true;
          
                peep.applyMatrix4( matrix );

                ques.push(peep)
            }

            var mat = new THREE.MeshBasicMaterial( {color: 0x2194ce} );
            const objects = new THREE.Mesh( BufferGeometryUtils.mergeBufferGeometries( ques ), mat );
            this.queAll = objects;
            this.scene.add( objects );
            this.duplicated = true;
        }
    }


}

window.customElements.define('question-mark', QuestionMark);