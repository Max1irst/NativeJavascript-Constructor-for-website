import{model} from './model'
import './styles/main.css'
import { sidebar } from './sidebar'

const $site = document.querySelector("#site")

model.forEach(block => {
    $site.insertAdjacentHTML("beforeend", block.toHTML())
})

const $sidebar = document.querySelector("#sidebar")

sidebar.forEach(sidebar => {
        $sidebar.insertAdjacentHTML("beforeend", sidebar.toHTML())
})

