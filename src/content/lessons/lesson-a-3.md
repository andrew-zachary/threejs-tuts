---
title: ray caster 
hasLab: /labs/ray-caster
type: snippet
---
const shap1material = new MeshBasicMaterial({color: 'white'})
const shap1Geometry = new BoxGeometry(1, 1, 1)
const shap1Mesh = new Mesh(shap1Geometry, shap1material)
shap1Mesh.position.y = 1.5
shap1Mesh.name = "shap1"
scene.add(shap1Mesh)

const shap2material = new MeshBasicMaterial({color: 'white'})
const shap2Geometry = new BoxGeometry(1, 1, 1)
const shap2Mesh = new Mesh(shap2Geometry, shap2material)
shap2Mesh.position.y = 0
shap2Mesh.name = "shap2"
scene.add(shap2Mesh)

const shap3material = new MeshBasicMaterial({color: 'white'})
const shap3Geometry = new BoxGeometry(1, 1, 1)
const shap3Mesh = new Mesh(shap3Geometry, shap3material)
shap3Mesh.position.y = -1.5
shap3Mesh.name = "shap3"
scene.add(shap3Mesh)

let target = null
const raycaster = new Raycaster()
const pointer = new Vector2()

window.addEventListener("mousemove", (e) => {
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1
    pointer.y = -(e.clientY / window.innerHeight) * 2 + 1
    
    // casting ray
    raycaster.setFromCamera(pointer, camera)
    const intersects = raycaster.intersectObjects([shap1Mesh, shap2Mesh, shap3Mesh])

    if(intersects.length > 0) {

        switch (intersects[0].object.name) {
            case 'shap1':
                intersects[0].object.material.color.set('red')
                break;

            case 'shap2':
                intersects[0].object.material.color.set('green')
                break;

            case 'shap3':
                intersects[0].object.material.color.set('yellow')
                break;
        
            default:
                break;
        }

        target = intersects[0]
    } else {

        if(target) target.object.material.color.set('white')
    }
})