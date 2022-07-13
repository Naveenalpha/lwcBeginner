import { LightningElement} from 'lwc';

export default class HelloWorld extends LightningElement {
    fullname = 'ZeroToHero'
    users = ['a','b']
    obj = {name:'naveen'}
    num1 =10
    num2= 12
    address = {city:"vizag",population:3200}
    handler(event){
        this.fullname = event.target.value;
    }
    cityhandler(event){
        this.address = {...this.address,"city":event.target.value}
    }

    get firstUser(){
        return this.users[0].toUpperCase()
    }
    get multiplyValue(){
        return this.num1*this.num2
    }


}

