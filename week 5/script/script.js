//data die veranderd onthouden
//kinderen informeren
class subscriber{
    constructor(number){
        console.log("ik word aangemaakt met: " + number)
        this.number = number;
        this.observers = [];
    }
    updateState(newState){
        console.log("mijn nummer is nu: " + this.getState());
        this.number = newState;
        console.log("ik update mijn nummer");
        console.log("mijn nummer is nu: " + this.getState());
        this.notify();
    }
    getState(){
        return this.number
    }
    notify(){
        console.log("informeren...");
        for(let i = 0; i < this.observers.length; i++){
            this.observers[i].update();
        }
    }
    attach(observer){
        this.observers.push(observer)
    }
}

class observer{
    constructor(name, subscriber, htmlElement){
        this.name = name;
        this.subscriber = subscriber;
        this.init();
        this.htmlElement = htmlElement;
    }
    init(){
        console.log("hallo! ik ben observer" + this.name + " en de state van mijn subscriber is " + this.subscriber.getState());
    }
    update(){
        console.log("hallo! ik ben observer" + this.name + " en de state van mijn subscriber is " + this.subscriber.getState());
        this.htmlElement.innerText = this.subscriber.getState();
    }
}

let subscriber01 = new subscriber(2);

let observer01 = new observer("observer 1", subscriber01, document.getElementById("js--id--1"));
subscriber01.attach(observer01);

let observer02 = new observer("observer 2", subscriber01, document.getElementById("js--id--2"));
subscriber01.attach(observer02);

let observer03 = new observer("observer 3", subscriber01, document.getElementById("js--id--3"));
subscriber01.attach(observer03);

let number = 100;

document.getElementsByClassName("numbersCard")[0].onclick = function(){
    subscriber01.updateState(100);
}


let subscriber02 = new subscriber(-1000);

let observer04 = new observer("observer 4", subscriber02, document.getElementById("js--id--4"));
subscriber02.attach(observer04);

let observer05 = new observer("observer 5", subscriber02, document.getElementById("js--id--5"));
subscriber02.attach(observer05);

let observer06 = new observer("observer 6", subscriber02, document.getElementById("js--id--6"));
subscriber02.attach(observer06);

setInterval(function(){
    subscriber01.updateState(subscriber01.getState() +1);
    subscriber02.updateState(subscriber02.getState() +10);
},1000)