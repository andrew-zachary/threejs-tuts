import { BufferGeometry, BufferAttribute, TextureLoader, PointsMaterial, Points } from "three"
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
            position: { x: 0.5, y: -0.1, z: 0.5 }
        }).then(mesh => this.titleTxt = mesh)

        this.assetsLoader.loadMeshFont({
            fontType: this.assets.montserratFont,
            fontLoader, text: 'Click To Start',
            size: 0.4,
            position: { x: 0.5, y: 5, z: 0.5 }
        })

        const vertices = 6000
        const positionArray = new Float32Array(vertices)
        for(let i = 0; i < vertices; i++) {
            positionArray[i] = (Math.random() - 0.5) * 9
        }

        const geometry = new BufferGeometry()
        geometry.setAttribute('position', new BufferAttribute(positionArray, 3))

        const texture = new TextureLoader()
        const dots = texture.load('/textures/snowflake.png')

        const material = new PointsMaterial()
        material.alphaMap = dots
        material.transparent = true
        material.depthTest = false
        material.size = 0.02

        this.points = new Points(geometry, material)
        this.app.scene.add(this.points)
    }

    looping(delta) {
        this.points.rotation.y += delta * 0.1
        this.points.rotation.x += delta * 0.5

        if(this.titleTxt) this.titleTxt.position.y = Math.sin(Date.now() * 0.003) * 0.5
    }
}