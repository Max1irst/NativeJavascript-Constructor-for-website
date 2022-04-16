import image from './assets/123.jpg'
import mainImg from './assets/mainImg.jpg'
import { navbar } from './navbar'
import { titleBlock, textBlock, columnsBlock, imageBlock, newBoxBlock } from './classes/blocks'

const card1 = `<div class="card m-1" style="width: 20rem;"><img src="${image}" class="card-img-top" alt="image"><div class="card-body"><h5 class="card-title">Card title</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div>`
export const model =[

    new titleBlock(`Personal Blog ${navbar}`, {
        styles: {
            padding: '1rem 0 0 1rem;',
            "flex-direction": 'row;',
            "justify-content": 'evenly',
            "text-transform": 'uppercase',
            "font-size": '1.8rem',
        }, 
    }),

    new textBlock("Actualy it's the first my lending page that was white by native JS", {
        
        tag: "h5",
        styles: {
            "text-transform": 'uppercase',
            "text-align": 'left',
            padding: '1rem',
            height: '150px' 
        },
    }),

    new newBoxBlock(`${card1}${card1}${card1}${card1}${card1}${card1}`, {
        styles: {
            opacity: '80%'
        },
        itemStyles: {
            "padding-left": '2rem',
            "justify-content": 'flex-start'
        }
    }),

    new columnsBlock( [
        "Saepe, facere. Dolore ullam debitis vero, nisi libero id. Eveniet impedit suscipit qui doloremque neque ratione voluptates odio vero? Numquam, illo corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, facere. Dolore ullam debitis vero, nisi libero id. Eveniet impedit suscipit qui doloremque neque ratione voluptates odio vero? Numquam, illo corrupti.",
        "Dolore ullam debitis vero, nisi libero id. Eveniet impedit suscipit qui doloremque neque ratione voluptates odio vero? Numquam, illo corrupti.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, facere. Dolore ullam debitis vero, nisi libero id. Eveniet impedit suscipit qui doloremque neque ratione voluptates odio vero? Numquam, illo corrupti.", 
    ], {
        styles: {
            display: 'flex;',
            "justify-content": 'flex-end;',
            "flex-direction": 'column;',
            "text-align": 'right',
            padding: '1rem',
            "font-size": '1.5rem',
            height: '450px' 
        }} ),

        new textBlock("Actualy it's the first my lending page that was white by native JS", {
        
            tag: "h5",
            styles: {
                "text-transform": 'uppercase',
                "text-align": 'left',
                padding: '1rem',
                height: '150px' 
            },
        }),

        new imageBlock( mainImg, {
            styles: {
                "padding-top": '2rem'
            },
            imgStyles: {
                position: 'relative',
                left: '1rem',
                width: '700px;',
                height: 'auto;',
            }
        }),

]
