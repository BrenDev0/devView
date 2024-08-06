import { newProjectIcon } from "../utils/icons.js"

export const toolbar = () => {
    const toolbar = document.getElementById('toolbar')

    return toolbar.appendChild(newProjectIcon)
}