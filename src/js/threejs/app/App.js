import { Scene } from "three"

import Camera from "./Camera"
import Renderer from "./Renderer"
import World from "./World"
import Resize from "../utiles/Resize"

let instance = null

export default class App {

    constructor() {
        if(instance) return instance
        instance = this

        // elements
        this.canvas = document.querySelector('#view')
        this.scene = new Scene()

        // world
        this.world = new World()

        // camera and renderer
        this.camera = new Camera()
        this.renderer = new Renderer()

        // utiles
        this.resize = new Resize()
    }
}