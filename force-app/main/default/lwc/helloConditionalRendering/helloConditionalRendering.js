import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible = false
    name = ''
    handleClick(){
        this.isVisible = true
    }
    handleKey(event){
        this.name = event.target.value
    }
    get isShown(){
        return this.name.toLowerCase() === 'hello'
    }
}