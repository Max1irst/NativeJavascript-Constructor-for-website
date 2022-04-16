import{row, col, css,} from '../utils'

class block {
    constructor (value, options){
        this.value = value,
        this.options = options
    }
    toHTML (){
        throw new Error ('Метод toHTML должен быть реализован')
    }
}
export class titleBlock extends block {
    constructor(value, options){
        super(value, options)
    }
    toHTML () {
        const styles = this.options.styles
        return row((`<p class="col-3">${this.value}</p>`), css(styles),)  
    }
}
export class textBlock extends block {
    constructor(value, options){
        super(value, options)
    }
    toHTML () {
        const {tag,styles} =this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))   
    }
}
export class imageBlock extends block {
    constructor(value, options){
        super(value, options)
    }
    toHTML () {
        const {styles, imgStyles, alt = ""} = this.options
        return row((`<img class="img-fluid" src="${this.value}" alt = "${alt}" style="${css(imgStyles)}"/>`), css(styles))
    }
}
export class newBoxBlock extends block {
    constructor(value, options){
        super(value, options)
    }
    toHTML () {
        const {styles, itemStyles} = this.options
        return row((`<div class="row" style="${css(itemStyles)}">${this.value}</div>`), css(styles)) 
    }
}
export class columnsBlock extends block {
    constructor(value, options){
        super(value, options)
    }
    toHTML () {
        const styles = this.options.styles
        const html = this.value.map(item => col(item))
        return row(html.join(''),css(styles))
    }
}