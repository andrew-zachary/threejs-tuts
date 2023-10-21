---
title: ray caster 
hasLab: /labs/ray-caster
type: snippet
---
...
shap1Mesh.name = "shap1"
...
shap2Mesh.name = "shap2"
...
shap3Mesh.name = "shap3"

const getIntersects = (e, pointer, raycaster, camera, meshesColl) => {
  
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1
    pointer.y = -(e.clientY / window.innerHeight) * 2 + 1
    
    // casting ray from camera to these meshes
    raycaster.setFromCamera(pointer, camera)
    return raycaster.intersectObjects(meshesColl)
}

let target = null
const raycaster = new Raycaster()
const pointer = new Vector2()

window.addEventListener("mousemove", (e) => {
  
    const intersects = getIntersects(e, pointer, raycaster, camera, [shap1Mesh, shap2Mesh, shap3Mesh])

    document.documentElement.style.cursor = intersects.length ? 'pointer' : ''
})

window.addEventListener("click", (e) => {

    const intersects = getIntersects(e, pointer, raycaster, camera, [shap1Mesh, shap2Mesh, shap3Mesh])

    if(intersects.length > 0) {

        if(target) target.object.material.color.set('white')

        switch (intersects[0].object.name) {
            case 'shap1':
                intersects[0].object.material.color.set('red')
                break

            case 'shap2':
                intersects[0].object.material.color.set('green')
                break

            case 'shap3':
                intersects[0].object.material.color.set('yellow')
                break
        }

        target = intersects[0]
    }
})