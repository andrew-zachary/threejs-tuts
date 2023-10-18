---
title: particles 
hasLab: /labs/particles
type: snippet
---
...

// array of vertices
const positionArray = new Float32Array(4000)
for(let i = 0; i < 4000; i++) {
    positionArray[i] = (Math.random() - 0.5) * 3
}

const geometry = new BufferGeometry()
geometry.setAttribute('position', new BufferAttribute(positionArray, 3))

const texture = (new TextureLoader).load('/textures/snowflake.png')

const material = new PointsMaterial()
material.alphaMap = texture
material.transparent = true
material.depthTest = false
material.size = 0.02

const points = new Points(geometry, material)
scene.add(points)

const rendering = () => {
    ...
    
    points.rotation.y += delta * 0.05 
    points.rotation.x += delta * 0.05

    ...
    window.requestAnimationFrame(rendering)
}

rendering()

...