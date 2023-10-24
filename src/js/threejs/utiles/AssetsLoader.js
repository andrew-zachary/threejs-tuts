import { LoadingManager, TextureLoader, Mesh, MeshMatcapMaterial } from "three"

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
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
 
        const mesh = new Mesh(geometry, material)
        this.app.scene.add(mesh)
        return mesh
    }

    loadMeshFont({fontType, fontLoader, text, size, position}) {

        return new Promise((resolve) => {

            fontLoader.load(fontType, (font) => {

                const geometry = new TextGeometry(text, {
                    font,
                    size,
                    height: 0.2,
                    curveSegments: 12,
                    bevelEnabled: true,
                    bevelThickness: 0.01,
                    bevelSize: 0,
                    bevelOffset: 0,
                    bevelSegments: 0
                })
                geometry.computeBoundingBox()
                geometry.translate(
                    - geometry.boundingBox.max.x * position.x,
                    - geometry.boundingBox.max.y * position.y,
                    - geometry.boundingBox.max.z * position.z,
                )

                const material = new MeshMatcapMaterial()

                resolve(this.loadMeshWithTexture({
                    path: '/textures/p1.jpg',
                    mapType: 'matcap',
                    material,
                    geometry
                }))
            })
        })
    }
}