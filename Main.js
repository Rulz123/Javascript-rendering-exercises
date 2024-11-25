import * as THREE from 'three';
import SphereGenerator from './Nebula.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const sphereClass = new SphereGenerator();

const sphere = sphereClass.generateSphere();

scene.add(sphere);

camera.position.z = 5;

function animate() {
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    sphere.material.opacity = 0.5 + 0.5 * Math.sin(Date.now() * 0.002);
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);