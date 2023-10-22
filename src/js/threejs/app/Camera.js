import { PerspectiveCamera } from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"

import App from "./App"
import { screenStore } from "../utiles/store"

export default class Camera {

    constructor() {

        this.app = new App()
        this.screenSizes = screenStore.getState()

        this.instance = new PerspectiveCamera(
            75, 
            this.screenSizes.width / this.screenSizes.height,
            0.1, 
            10
        )
        this.instance.position.z = 5
        this.controls = new OrbitControls(this.instance, this.app.canvas)
        this.controls.enableDamping = true
        this.controls.enableRotate = false
        this.controls.enableZoom = false

        screenStore.subscribe(sizes => {
            this.instance.aspect = sizes.width / sizes.height
            this.instance.updateProjectionMatrix()
        })
    }

    looping() {
        this.controls.update()
    }
}