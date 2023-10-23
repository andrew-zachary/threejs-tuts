import { createStore } from "zustand"

export const assetsStore = createStore(() => ({
    assets: {
        montserratFont: '/fonts/montserrat-bold.json'
    }
}))

export const screenStore = createStore(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRation: Math.min(window.devicePixelRatio, 2)
}))