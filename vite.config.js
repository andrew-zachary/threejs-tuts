import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
    server: {
        port: 4200
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                basics: resolve(__dirname, 'basics/index.html')
            },
        },
    },
})