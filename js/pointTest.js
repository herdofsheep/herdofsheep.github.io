/* global THREE */

window.addEventListener('load', init)
let scene
let camera
let renderer
let container
let points, values
let points_arr, values_arr

import * as THREE from 'three';
import 'lodash';
import * as d3 from "d3";

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

function init() {
  scene = new THREE.Scene()
  scene.background = new THREE.Color( 0xffffff );
  
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
  
  document.body.appendChild(renderer.domElement)
  importData()
}

function importData(){

  $.get('./../../assets/data/f80bd6d9-9a6d-4f4d-8f23-ef63b2c851d4_sun.ill', function(data) {
    setVar(data, 'values')
  });
  $.get('./../../assets/data/f80bd6d9-9a6d-4f4d-8f23-ef63b2c851d4.pts', function(data) {
    setVar(data, 'points')
  }); 

}

function setVar(contents, type){
  if(type=='values'){
    values = contents
  }
  if(type=='points'){
    points = contents
  }
  if(points!=undefined && values!=undefined){
    parseFiles()
  }

}

function parseFiles(){

  /////////////////////////
  // process points file //
  /////////////////////////

  var p_arr = points.split(/\r\n|\n|\r/);
  //clear out any lines which happen to be empty
  p_arr = p_arr.filter(word => word.length > 0);
  points_arr = [];

  for ( var i = 0; i < p_arr.length; i += 1 ) {
    //split datapoints by spaces
    var dataPoints = p_arr[i].split(' ');
    //remove empty datapoints created by multiple spaces in a row
    dataPoints = dataPoints.filter(word => word.length > 0);
    var point = {}
    point['x'] = dataPoints[0]
    point['y'] = dataPoints[1]
    point['z'] = dataPoints[2]
    points_arr.push(point)
  }

  /////////////////////////
  // process values file //
  /////////////////////////

  var vSource_arr = values.split(/\r\n|\n|\r/);
  //clear out any lines which happen to be empty
  var v_arr = vSource_arr.slice(14,vSource_arr.length)

  v_arr = v_arr.filter(word => word.length > 0);
  values_arr = [];

  for ( var i = 0; i < v_arr.length; i += 1 ) {
    //split datapoints by spaces
    var dataPoints = v_arr[i].split(' ');
    //remove empty datapoints created by multiple spaces in a row
    dataPoints = dataPoints.filter(word => word.length > 0);

    //go through the datapoints for this, just get 1 mean value
    var sum = 0
    for ( var j = 0; j < dataPoints.length; j += 1 ) {
      sum += parseFloat(dataPoints[j])
    }
    var dataPoint = sum/dataPoints.length

    values_arr.push(dataPoint)
  }

  buildThree()

}

function buildThree(){

  var points = []

  for ( var i = 0; i < points_arr.length; i += 1 ) {
    var x = parseFloat(points_arr[i].x);
    var y = parseFloat(points_arr[i].y);
    var z = parseFloat(points_arr[i].z);

    var mult = 4;

    // var v = new THREE.Vector3(x*mult,y*mult,z*mult);

    points.push(x*mult,y*mult,z*mult)
  }

  const colors = [];
  const color = new THREE.Color();

  const n = 10, n2 = n / 2; // particles spread in the cube

  var max = Math.max(values_arr)

  for ( var i = 0; i < points.length; i++ ){

    var colour =  d3.interpolateCool(values_arr[i]/Math.max(...values_arr))
    var rgb = colour.substring(4, colour.length-1)
         .replace(/ /g, '')
         .split(',');

    var r = parseFloat(rgb[0])/255
    var g = parseFloat(rgb[1])/255
    var b = parseFloat(rgb[2])/255
    
    color.setRGB( r, g, b );
    colors.push( color.r, color.g, color.b );
    
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( points, 3 ) );
  geometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );
  geometry.computeBoundingSphere();

  const material = new THREE.PointsMaterial( { size: 3, vertexColors: true } );
  var mesh = new THREE.Points( geometry, material );

  scene.add(mesh);
  animate()
}

function animate(){
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}
