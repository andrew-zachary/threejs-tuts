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
      body: '/components.jpg',
      active: false,
      type: "slide"
    }
  ],
  toggleLessonShow(id) {
    
    this.collection = this.collection.map(lesson => {
      return lesson.id === parseInt(id) ? {...lesson, active: !lesson.active} : lesson
    })
  }
}))

Alpine.start()