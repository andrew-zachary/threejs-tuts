export const firstSceneCode = `
import { BoxGeometry, 
  Mesh, 
  MeshBasicMaterial, 
  PerspectiveCamera, 
  Scene, 
  WebGLRenderer } from 'three'

// scene
const scene = new Scene()

// camera
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 30)
camera.position.z = 5

// materials
const basicMaterial = new MeshBasicMaterial({color: 'yellow'})

// create cube mesh and add it to the scene
const cubeGeometry = new BoxGeometry(1, 1, 1)
const cubeMesh = new Mesh(cubeGeometry, basicMaterial)
scene.add(cubeMesh)

// render
const canvas = document.querySelector('#pg')
const renderer = new WebGLRenderer({canvas})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)`

export const orbitControls = `
import { OrbitControls } from "three/addons/controls/OrbitControls.js"

...

// orbit controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

const rendering = () => {
  renderer.render(scene, camera)
  controls.update()
  window.requestAnimationFrame(rendering)
}

rendering()
`