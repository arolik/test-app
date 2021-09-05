
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