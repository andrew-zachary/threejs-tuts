import { FontLoader } from "three/addons/loaders/FontLoader.js"

import AssetsLoader from "../utiles/AssetsLoader"

import App from "./App"

import { assetsStore } from "../utiles/store"

export default class World {

    constructor() {
        this.assetsLoader = new AssetsLoader()
        this.assets = assetsStore.getState().assets

        this.app = new App()

        this.build()
    }

    build() {

        const fontLoader = new FontLoader()

        this.assetsLoader.loadMeshFont({
            fontType: this.assets.montserratFont, 
            fontLoader, text: 'Threejs Tuts!',
            size: 1 * (window.innerWidth / 1200),
            position: { x: 0.5, y: 0.5, z: 0.5 }
        })

        this.assetsLoader.loadMeshFont({
            fontType: this.assets.montserratFont,
            fontLoader, text: 'Click To Start',
            size: 0.4,
            position: { x: 0.5, y: 5, z: 0.5 }
        })
    }

    looping(delta) {}
}