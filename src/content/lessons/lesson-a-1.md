---
title: Mesh Basic Material
hasLab: /labs/mesh-basic-materials
type: snippet
---
...

// materials and textures
const textureLoader = new TextureLoader()
const earthTexture = textureLoader.load("/textures/texture_2k_earth_daymap.jpg")
const moonTexture = textureLoader.load("/textures/texture_2k_moon.jpg")
const earthMaterial = new MeshBasicMaterial({map: earthTexture})
const moonMaterial = new MeshBasicMaterial({map: moonTexture})

// create meshs
const earthGeometry = new SphereGeometry(1, 32, 32)
const moonGeometry = new SphereGeometry(0.3, 32, 32)
const earth = new Mesh(earthGeometry, earthMaterial)
const moon = new Mesh(moonGeometry, moonMaterial)
moon.position.set(1.5, 1.5)
const moonContainer = new Object3D()
moonContainer.add(moon)
scene.add(earth.add(moonContainer))

...

const rendering = () => {
    ...

    // animate earth and moon
    earth.rotation.y += delta * 0.4
    moonContainer.rotation.y += delta * 0.4
    moon.rotation.y += delta * 0.9

    ...
}

...