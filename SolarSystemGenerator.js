import * as THREE from 'three';

export default class SolarSystemGenerator {
    constructor(scene) {
        this.scene = scene;
    }

    backgroundGenerator() {

    }

    generatePlanets() {
        const geometry = new THREE.SphereGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x7F00FF, transparent: true, opacity: 1 });
        const sphere = new THREE.Mesh(geometry, material);

        return sphere;
    }

    generateNumbersOfSpheres() {
        var number = Math.random(3, 10);

        return number;
    }

    generateStars() {
        const geometry = new THREE.SphereGeometry(0.25,24,24);
        const material = new THREE.MeshStandardMaterial({color: 0xffffff});
        const star = new THREE.Mesh(geometry,material);

        const [x,y,z] = Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread(200));

        star.position.set(x,y,z);     

       
    }


    randomColourGenerator(numberOfColours) {

    }

    randomPlacementGenerator() {

    }
}