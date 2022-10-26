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
    }
    attach(observer){
        this.observers.push(observer)
    }
}

class observer{
    constructor(name){
        this.name = name;
    }
    update(){
        console.log(this.name + ":ik ben geupdate!");
    }
}

let subscriber01 = new subscriber(2);
console.log(subscriber01.observers);

let observer01 = new observer("observer 1");
subscriber01.attach(observer01);
console.log(subscriber01.observers);

let observer02 = new observer("observer 2");
subscriber01.attach(observer02);
console.log(subscriber01.observers);