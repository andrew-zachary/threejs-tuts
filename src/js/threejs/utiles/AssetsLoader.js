import { LoadingManager, TextureLoader, Mesh, MeshMatcapMaterial } from "three"

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
import { FontLoader } from "three/addons/loaders/FontLoader.js"
import { TextGeometry } from "three/addons/geometries/TextGeometry.js"

import App from "../app/App"

export default class AssetsLoader {

    constructor() {

        const manager = new LoadingManager()
        manager.onProgress = function (url, loaded, total) {
            console.log('Loading file: ' + url + '.\nLoaded ' + loaded + ' of ' + total + ' files.')
        }

        this.app = new App()

        this.gltfLoader = new GLTFLoader(manager)
        this.textureLoader = new TextureLoader(manager)
    }

    async loadGLTF({path, scalar}) {

        const model = await this.gltfLoader.loadAsync(path)

        if(scalar) model.scene.scale.setScalar(scalar)

        return this.app.scene.add(model.scene)
    }

    loadMeshWithTexture({path, mapType, material, geometry}) {

        const textureLoader = new TextureLoader()
        const textP1 = textureLoader.load(path)

        material[mapType] = textP1
 
        return this.app.scene.add(new Mesh(geometry, material))
    }

    loadMeshFont(path) {

        const fontLoader = new FontLoader()
        fontLoader.load(path, (font) => {

            const geometry = new TextGeometry('Threejs Tuts!', {
                font,
                size: 1,
                height: 0.2,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.01,
                bevelSize: 0.01,
                bevelOffset: 0,
                bevelSegments: 1
            })
            geometry.center()

            const material = new MeshMatcapMaterial()

            this.loadMeshWithTexture({
                path: '/textures/p1.jpg',
                mapType: 'matcap',
                material,
                geometry
            })
        })
    }
}