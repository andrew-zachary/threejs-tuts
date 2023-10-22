import { WebGLRenderer, Clock } from "three"

import App from "./App"
import { screenStore } from "../utiles/store"

export default class Renderer {

    constructor() {

        this.app = new App()
        this.screenSizes = screenStore.getState()
        this.clock = new Clock()
        this.prevTime = 0
        
        this.instance = new WebGLRenderer({canvas: this.app.canvas, antialias: true})
        this.instance.setSize(this.screenSizes.width, this.screenSizes.height)
        this.instance.setPixelRatio(this.screenSizes.pixelRation)

        this.looping()

        screenStore.subscribe(sizes => {
            this.instance.setSize(sizes.width, sizes.height)
            this.instance.setPixelRatio(sizes.pixelRation)
        })
    }

    calcDelta() {
        const curTime = this.clock.getElapsedTime()
        const delta = curTime - this.prevTime
        this.prevTime = curTime
        return delta
    }

    looping() {
        this.instance.render(this.app.scene, this.app.camera.instance)
        this.app.camera.looping()
        this.app.world.looping(this.calcDelta())
        window.requestAnimationFrame(() => this.looping())
    }
}