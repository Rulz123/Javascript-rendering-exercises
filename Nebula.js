import * as THREE from 'three';

export default class SphereGenerator{
    constructor()
    {   
    }

    generateSphere(){
        const geometry = new THREE.SphereGeometry();
        const material = new THREE.MeshBasicMaterial({color: 0x7F00FF, transparent:true ,opacity:1});
        const sphere = new THREE.Mesh(geometry,material);

        return sphere;
    }
}