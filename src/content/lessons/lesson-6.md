---
title: fix antialiasing
hasLab: /labs/fix-antialiasing
type: snippet
---
...

const renderer = new WebGLRenderer({
    ...
    antialias: true
})

...

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))