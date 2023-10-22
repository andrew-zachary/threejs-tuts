import { MeshBasicMaterial, SphereGeometry } from "three"
import { createStore } from "zustand"

export const assetsStore = createStore(() => ({
    // assets: [
    //     {
    //         type: 'gltf',
    //         path: '/models/boombox/BoomBox.gltf',
    //         scalar: 100
    //     },
    //     {
    //         type: 'texture',
    //         path: '/textures/texture_2k_earth_daymap.jpg',
    //         material: new MeshBasicMaterial(),
    //         geometry: new SphereGeometry(1, 32, 32)
    //     }
    // ]
    assets: []
}))

export const screenStore = createStore(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRation: Math.min(window.devicePixelRatio, 2)
}))