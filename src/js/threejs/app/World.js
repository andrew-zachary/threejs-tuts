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

        this.assetsLoader.loadMeshFont('/fonts/montserrat-bold.json')
    }

    looping(delta) {}
}