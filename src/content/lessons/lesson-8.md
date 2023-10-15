---
title: transformations
type: snippet
---
...

// local position (x, y, z)
cubeMesh.position
// computes distance of two vectors
cubeMesh.position.distanceTo(camera.position)

// local rotation (Euler angles) x, y, z
cubeMesh.rotation
// use MathUtils.degToRad utility to convert from degrees to radians. Because radians are the values you want to calc for rotations.
cubeMesh.rotation.x = MathUtils.degToRad(40)

// local scale x, y, z
cubeMesh.scale
// set all values
cubeGeometry.scale.set(1, 2, 1)

// all 3 Transformations properties have a default value Vector3(0, 0, 0)
// create new 3D vector and asign it to (for example) position prop
const transVector = new THREE.Vector3(0, 5, 0)
cubeMesh.position.copy(transVector)

...