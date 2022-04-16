import userImg from './assets/userImg.jpg'
import { titleBlock, textBlock, columnsBlock, imageBlock, newBoxBlock } from './classes/blocks'

const link1 = '<a href="www.google.com">lorem</a>'
const link2 = '<a href="www.google.com">Ipsun</a>'
const link3 = '<a href="www.google.com">Dolor</a>'
const link4 = '<a href="www.google.com">Prolor</a>'
export const sidebar = [
    new imageBlock(userImg, {
        styles: {}, 
        imgStyles: {
            width: '75px;',
            height: '75px;',
            "border-radius": '50%;',
        }
    }),
    new textBlock("Имя Фамилия", { 
        tag: "p",
        styles: {
            "padding-top": '1rem',
            "text-transform": 'uppercase',
        },
    }),
    new newBoxBlock(`${link1}${link2}${link3}${link4}`, {
        styles: {},
        itemStyles: {
            "text-align": 'center',
        }
    })
]

