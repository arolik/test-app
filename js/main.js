/*
class CreateMessage {
    constructor(){
        this.target = document.querySelector('#target');
        this.field = document.querySelector('#field');
        this.enterMessage = document.querySelector('#enterMessage');
        this.sendMessage = document.querySelector('#sendMessage');
        this.message = '';
        this.id = this.createId();
        this.target.addEventListener('change', this.checkText);
        this.enterMessage.addEventListener('blur', this.setMessage.bind(this));
        this.sendMessage.addEventListener('click', this.pushMessage.bind(this));
    }
    setMessage(event){
        this.message = event.target.value;
    }
    pushMessage(){
        list.createList(this.message, this.id(), this.target, this.field);
    }
    createId(){
        let id = 0;
        return function(){
            id++;
            return id;
        }
    }
    checkText(event){
        let target = event.target;
        let parrent = target.parentElement;
        let neighbor = parrent.nextElementSibling;
        if(event.target.checked == true){
            neighbor.innerText = 'X' + neighbor.innerText;
        }
    }
}

class ListMessages {
    constructor(){
        this.parrent = document.querySelector('#listMessages');
        this.catalogMessages = [];
        this.createList = this.makeList;
    }
    makeList(textMessage, id, target, field){
        let arrayMessages = this.catalogMessages;
        arrayMessages.push({text:textMessage, textId:id, isShow:false});
        view.clearBlock(this.parrent);
        view.setBlock(this.parrent, arrayMessages, target, field);
    }
}

class ViewMessages {
    constructor(){
        this.clearBlock = this.clearField;
        this.setBlock = this.setField;
    }
    clearField(parrent){
        while(parrent.children.length > 0){
            parrent.removeChild(parrent.firstChild);
        }
    }
    setField(parrent, arrayMessages, target, field){
        console.log(arrayMessages);
        arrayMessages.forEach(function(elem){
            let p = document.createElement('p');
            p.innerText = elem.text;
            parrent.appendChild(p);
        });
        moveMessage.stop();
        moveMessage.move(arrayMessages, target, field); 
    }
}

class ShowMessages {
    constructor(){
        this.interval;
        this.move = this.upMessage; 
        this.stop = this.stopUpMessage;       
    }
    upMessage(arr, target, field){
        let i = 0;
        this.interval = setInterval(function(){
        
        target.value = arr[i].textId;
        target.checked = false;
        field.innerText = arr[i].text;
        i++;
        if(i >= arr.length){
            i = 0;
        }
        }, 1000);
    }
    stopUpMessage(){
        clearInterval(this.interval);
    }
}

let message = new CreateMessage();
let list = new ListMessages();
let view = new ViewMessages();
let moveMessage = new ShowMessages();
*/

/* Varriant 2 */

/*
let target = document.querySelector('#target');
let field = document.querySelector('#field');
let parent = document.querySelector('#listMessages');
let enterMessage = document.querySelector('#enterMessage');
let sendMessage = document.querySelector('#sendMessage');
let interval;

let store = {
    message: '',
    messages: [],

    createFieldForMessages(){
        this.clearField();
        this.setField();
        this.stopUpMessage();
        this.upMessage(this.messages);

    },

    clearField(){
        while(parent.children.length > 0){
            parent.removeChild(parent.firstChild);
        }
    },
    setField(){
        let messages = this.messages;
        for(let i=0; i<messages.length; i++){
            let p = document.createElement('p');
            p.innerText = messages[i];
            parent.appendChild(p);
        }
    },
    upMessage(arrayMessages){
        let i = 0;
        interval = setInterval(function(){
            target.checked = false;
            field.innerText = arrayMessages[i];
            i++;
            if(i >= arrayMessages.length){
                i = 0;
            }
        }, 1000);
    },
    stopUpMessage(){
        clearInterval(interval);
    },
    


}

enterMessage.addEventListener('blur', saveMessage);
sendMessage.addEventListener('click', setMessage);
target.addEventListener('change', checkMessage);

function saveMessage(event){
    let message = event.target.value;
    store.message = message;
}

function setMessage(){
    store.messages.push(store.message);
    store.createFieldForMessages();
    console.log(store);
}

function checkMessage(event){
    let target = event.target;
    let parent = target.parentElement;
    let neighbor = parent.nextElementSibling;
    if(target.checked == true){
        neighbor.innerText = 'X' + neighbor.innerText;
    }
    
}
*/

let target = document.querySelector('#target');
let field = document.querySelector('#field');
let parent = document.querySelector('#listMessages');
let enterMessage = document.querySelector('#enterMessage');
let sendMessage = document.querySelector('#sendMessage');
let interval;

let store = {
    message: '',
    messages: [],

    getMessage() {
        this.createList();
        this.clearField();
        this.setField(this.messages);
        this.stop();
        this.showMessage(this.messages.filter(function(elem){
            return elem[0] != 'X';
        }));
        console.log(this.messages);
    },
    createList() {
        this.messages.push(this.message);
    },
    clearField(){
        while(parent.children.length > 0){
            parent.removeChild(parent.firstChild);
        }
    },
    setField(arrayMessages){
        for(let i=0; i<arrayMessages.length; i++){
            let p = document.createElement('p');
            p.innerText = arrayMessages[i];
            parent.appendChild(p);
        }
        
    },

    showMessage(arrayMessages) {
        let i = 0;
        interval = setInterval(function(){
            field.innerText = arrayMessages[i];
            i++;
            if(i >= arrayMessages.length){
                i = 0;
            }
        }, 1000)
    },
    stop(){
        clearInterval(interval);
    }

}

enterMessage.addEventListener('blur', saveMessage);
sendMessage.addEventListener('click', setMessage);
target.addEventListener('click', markMessage);


function saveMessage(event) {
    let message = event.target.value;
    store.message = message;
    event.target.value = '';
}

function setMessage() {
    store.getMessage();
}

function markMessage(event){
    let parent = event.target.parentElement;
    let neighbor = parent.nextElementSibling;
    for(let i=0; i<store.messages.length; i++){
        if(neighbor.innerText === store.messages[i]){
            store.messages[i] = 'X' + store.messages[i];
        }
    }
    store.getMessage();
}