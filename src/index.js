import _ from 'lodash';
import * as THREE from 'three';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'Ben'], ' ');

  return element;
}

document.body.appendChild(component());

// Our Javascript will go here.
var scene = new THREE.Scene();
// PARAMS: 
// FOV, Aspect Ratio, near, far planes
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
// Adds this to the HTML
document.body.appendChild( renderer.domElement );
var geometry = new THREE.BoxGeometry();

// Material to put on geometry
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// Adds material to geometry
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// So they cube and camera dont overlap
camera.position.z = 5;

function animate() {
  // Pauses when focus is lost
  requestAnimationFrame( animate );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
}
animate();

