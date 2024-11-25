import * as THREE from 'three';

export default class SolarSystemGenerator{
    constructor()
    {   
    }

    backgroundGenerator(){
        
    }

    generatePlanets(){
        const geometry = new THREE.SphereGeometry();
        const material = new THREE.MeshBasicMaterial({color: 0x7F00FF, transparent:true ,opacity:1});
        const sphere = new THREE.Mesh(geometry,material);

        return sphere;
    }

    generateNumbersOfSpheres(){
        var number = Math.random(3,10);

        return number;
    }

    generateStars(){
        const stars = [Math.random(50,100)];

        let numbersOfStars = stars.length;

        for (let i = 0; i < numbersOfStars; i++){
            const geometry = new THREE.SphereGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
        const sphere = new THREE.Mesh(geometry,material);

        stars.concat(sphere);
        }

        return stars;       
    }

    randomColourGenerator(){
        
    }

    randomPlacementGenerator(){

    }

}