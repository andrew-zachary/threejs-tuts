---
title: animations
hasLab: /labs/animations
type: snippet
---
const clock = new Clock()
let prevTime = 0

// do rendering
const rendering = () => {
    ...
    
    const curTime = clock.getElapsedTime()
    const delta = curTime - prevTime
    prevTime = curTime
    cubeMesh.rotation.y += MathUtils.degToRad(1) * delta * 100
    cubeMesh.rotation.x += MathUtils.degToRad(1) * delta * 100

    ...
    window.requestAnimationFrame(rendering)
}

rendering()