/*
class CreateMessage {
    constructor() {
        this.field = document.querySelector('#field');
        this.enterMessage = document.querySelector('#enterMessage');
        this.sendMessage = document.querySelector('#sendMessage');

        this.sendMessage.addEventListener('click', this.pushMessage.bind(this));
    }

    pushMessage() {
        if (this.enterMessage.value != '') {
            let message = this.enterMessage.value;
            list.createList(message,  this.field);
            this.enterMessage.value = '';
        } else if (this.enterMessage.value == '') {
            alert('enter your message');
        }
    }
}

class ListMessages {
    constructor() {
        this.parrent = document.querySelector('#listMessages');
        this.target = document.querySelector('#target');
        this.catalogMessages = [];
        this.createList = this.makeList;
        this.target.addEventListener('click', this.checkMessage.bind(this));
    }
    makeList(textMessage,  field) {
        
        this.catalogMessages.push(textMessage);
        let arrayMessages = this.catalogMessages;
        view.clearBlock(this.parrent);
        view.setBlock(this.parrent, arrayMessages, field);
    }

    checkMessage(event){
        let parent = event.target.parentElement;
        let neighbor = parent.nextElementSibling;
        let catalog = this.catalogMessages;
        for(let i=0; i<catalog.length; i++){
            if(neighbor.innerText === catalog[i]){
                catalog[i] = 'X' + catalog[i];
            }
        }
        this.makeList(); // нужно передать параметры
    }
}

class ViewMessages {
    constructor() {
        this.clearBlock = this.clearField;
        this.setBlock = this.setField;
    }
    clearField(parrent) {
        while (parrent.children.length > 0) {
            parrent.removeChild(parrent.firstChild);
        }
    }
    setField(parrent, arrayMessages, field) {
        console.log(arrayMessages);
        arrayMessages.forEach(function (elem) {
            let p = document.createElement('p');
            p.innerText = elem;
            parrent.appendChild(p);
        });

        moveMessage.stop();
        moveMessage.move(arrayMessages, field);
    }
}

class ShowMessages {
    constructor() {
        this.interval;
        this.move = this.upMessage;
        this.stop = this.stopUpMessage;
    }
    upMessage(arr, field) {
        let i = 0;
        this.interval = setInterval(function () {
            console.log(i);
            field.innerText = arr[i];
            i++;
            if (i >= arr.length) {
                i = 0;
            }
        }, 1000);
    }
    stopUpMessage() {
        clearInterval(this.interval);
    }
}

let message = new CreateMessage();
let list = new ListMessages();
let view = new ViewMessages();
let moveMessage = new ShowMessages();
*/


class TestApp {
    constructor(){
        this.target = document.querySelector('#target');
        this.parrent = document.querySelector('#listMessages');
        this.field = document.querySelector('#field');
        this.enterMessage = document.querySelector('#enterMessage');
        this.sendMessage = document.querySelector('#sendMessage');
        this.sendMessage.addEventListener('click', this.setMessage.bind(this));
        this.catalogMessages = [];
    }

    setMessage(){
        if(this.enterMessage.value != ''){
            let text = this.enterMessage.value;
            this.catalogMessages.push(text);
            this.enterMessage.value = '';
            console.log(this.catalogMessages);
        } else if(this.enterMessage.value == ''){
            alert('enter your message');
        }
    }
    

}


new TestApp();

