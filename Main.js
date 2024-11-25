import * as THREE from 'three';
import SolarSystemGenerator from './SolarSystemGenerator.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls( camera, renderer.domElement );

camera.position.set(0,20,100);
controls.update();
// const solarSystemGenerator = new SolarSystemGenerator();

// const sphere = solarSystemGenerator.generateStars();

function generateStars() {
    const geometry = new THREE.SphereGeometry(0.25,24,24);
    const material = new THREE.MeshBasicMaterial({color: 0xffffff});
    const star = new THREE.Mesh(geometry,material);

    const [x,y,z] = Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread(200));

    star.position.set(x,y,z);    

    star.rotation.x = 0.5;
    star.rotation.y = 0.5

    scene.add(star);
}

Array(200).fill().forEach(generateStars);

function animate() {  
    controls.update();
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);