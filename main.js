import "./style.scss"

import Alpine from "alpinejs"
import collapse from "@alpinejs/collapse"

Alpine.plugin(collapse)

Alpine.data('lessons', () => ({
  collection: [
    {
      id:1, 
      title: 'what is threejs', 
      body: `Three.js is a JavaScript library that simplifies the creation of 3D graphics on the web. 
      It makes it easier for developers to work with WebGL, a low-level 3D graphics API, by abstracting away many of its complexities. This allows developers to create interactive and visually appealing 3D experiences for their websites.`,
      active: false,
      type: "point"
    },
    {
      id:2, 
      title: 'components', 
      img: '/components.jpg',
      active: false,
      type: "slide"
    },
    {
      id:3, 
      title: 'first scene',
      code: `
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
      renderer.render(scene, camera)
      `,
      active: false,
      type: "example"
    }
  ],
  toggleLessonShow(id) {
    
    this.collection = this.collection.map(lesson => {
      return lesson.id === parseInt(id) ? {...lesson, active: !lesson.active} : lesson
    })
  }
}))

Alpine.start()