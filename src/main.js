import Alpine from "alpinejs"
import collapse from "@alpinejs/collapse"
import hljs from "highlight.js/lib/core"
import javascript from "highlight.js/lib/languages/javascript"

import "./style.scss"
import "highlight.js/styles/tokyo-night-dark.min.css"

import { firstSceneCode, orbitControls } from "./code-snippets"

hljs.registerLanguage('javascript', javascript)

Alpine.plugin(collapse)

Alpine.data('lessons', () => ({
  collection: [
    {
      id:1, 
      title: 'what is threejs', 
      body: `Three.js is a JavaScript library that simplifies the creation of 3D graphics on the web. 
      It makes it easier for developers to work with WebGL, a low-level 3D graphics API, by abstracting away many of its complexities. This allows developers to create interactive and visually appealing 3D experiences for their websites.`,
      active: false,
      type: 'point'
    },
    {
      id:2, 
      title: 'components', 
      img: '/components.jpg',
      active: false,
      type: 'slide'
    },
    {
      id:3, 
      title: 'create first scene',
      code: hljs.highlight(firstSceneCode, {language: 'javascript'}).value,
      active: false,
      type: 'example'
    },
    {
      id:4, 
      title: 'orbit controls',
      code: hljs.highlight(orbitControls, {language: 'javascript'}).value,
      active: false,
      type: 'example',
      hasLab: '/labs/first-scene'
    },
  ],
  toggleLessonShow(id) {
    
    this.collection = this.collection.map(lesson => {
      return lesson.id === parseInt(id) ? {...lesson, active: !lesson.active} : lesson
    })
  }
}))

Alpine.start()

hljs.highlightAll()