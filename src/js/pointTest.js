/* global THREE */

window.addEventListener('load', init)
let scene
let camera
let renderer
let mesh
let container

import * as THREE from 'three';
import 'lodash';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

function init() {
  scene = new THREE.Scene()
  
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 40;

  container = document.getElementById( "container" );
  
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  container.appendChild( renderer.domElement );
  
  const controls = new OrbitControls(camera, renderer.domElement)

  controls.enableZoom = false
  
  scene.add(new THREE.AmbientLight(0x404040)) 

  importData()
  
  const loader = new OBJLoader()
  loader.load('https://cdn.glitch.com/fcf3c007-b4eb-4250-ba6b-653fdab94ce3%2Fjapanese_temple.obj?1558792651869',
              (obj) => {
                    let material = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.25 })
                    mesh = new THREE.Points(obj.children[0].geometry, material)
                    mesh.position.y = -15
                    scene.add(mesh)
                    
                },
              (xhr) => {
                  console.log(xhr)
              },
              (err) => {
                  console.error("loading .obj went wrong, ", err)
                }
             )
  
  document.body.appendChild(renderer.domElement)
  animate()
}

function importData(){
  
}

function animate(){
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}
