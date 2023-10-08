---
title: orbit controls
hasLab: /labs/first-scene
type: snippet
---
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