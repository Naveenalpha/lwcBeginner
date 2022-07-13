import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname = 'ZeroToHero'
    users = ['a','b']
    obj = {name:'naveen'}
    handler(event){
        this.fullname = event.target.value;
    }
    



}

