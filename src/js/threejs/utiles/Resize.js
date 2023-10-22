import { screenStore } from "./store"

export default class Resize {

    constructor() {

        const { setState } = screenStore

        // required for responsive resizing
        // camera.aspect = window.innerWidth / window.innerHeight
        // camera.updateProjectionMatrix()
        // renderer.instance.setSize(window.innerWidth, window.innerHeight)
        // renderer.instance.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        window.addEventListener('resize', () => {
            setState({
                width: window.innerWidth,
                height: window.innerHeight,
                pixelRation: Math.min(window.devicePixelRatio, 2)
            })
        })
    }
}