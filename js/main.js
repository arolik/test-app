
class CreateMessage {
    constructor(){
        this.enterMessage = document.querySelector('#enterMessage');
        this.sendMessage = document.querySelector('#sendMessage');
        this.message = '';
        this.enterMessage.addEventListener('blur', this.setMessage.bind(this));
        this.sendMessage.addEventListener('click', this.pushMessage.bind(this));
    }
    setMessage(event){
        this.message = event.target.value;
    }
    pushMessage(){
        list.createList(this.message);
    }
}

class ListMessages {
    constructor(){
        this.parrent = document.querySelector('#listMessages');
        this.catalogMessages = [];
        this.createList = this.makeList;
    }
    makeList(textMessage){
        this.catalogMessages.push(textMessage);
        let arrayMessages = this.catalogMessages;
        this.clearField();
        this.setField(arrayMessages);
    }
    clearField(){
        while(this.parrent.children.length > 0){
            this.parrent.removeChild(this.parrent.firstChild);
        }
    }
    setField(arrayMessages){
        for(let i=0; i<arrayMessages.length; i++){
            let p = document.createElement('p');
            p.innerText = arrayMessages[i];
            this.parrent.appendChild(p);
        }
        console.log(this.catalogMessages);
    }
}

let message = new CreateMessage();
let list = new ListMessages();
