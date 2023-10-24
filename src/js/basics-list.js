import Alpine from "alpinejs"
import collapse from "@alpinejs/collapse"
import hljs from "highlight.js/lib/core"
import javascript from "highlight.js/lib/languages/javascript"

import "highlight.js/styles/tokyo-night-dark.min.css"

hljs.registerLanguage('javascript', javascript)

Alpine.plugin(collapse)

Alpine.start()

hljs.highlightAll()