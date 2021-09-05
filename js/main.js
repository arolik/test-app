class CreateMessage {
    constructor() {
        this.target = document.querySelector('#target');
        this.field = document.querySelector('#field');
        this.enterMessage = document.querySelector('#enterMessage');
        this.sendMessage = document.querySelector('#sendMessage');
        this.id = this.createId();

        this.sendMessage.addEventListener('click', this.pushMessage.bind(this));
    }

    pushMessage() {
        if (this.enterMessage.value != '') {
            let message = this.enterMessage.value;
            list.createList(message, this.id(), this.target, this.field);
            this.enterMessage.value = '';
        } else if (this.enterMessage.value == '') {
            alert('enter your message');
        }

    }
    createId() {
        let id = 0;
        return function () {
            id++;
            return id;
        }
    }

}

class ListMessages {
    constructor() {
        this.parrent = document.querySelector('#listMessages');
        this.catalogMessages = [];
        this.createList = this.makeList;
    }
    makeList(textMessage, id, target, field) {

        this.catalogMessages.push({
            text: textMessage,
            textId: id,
            isShow: false
        });
        let arrayMessages = this.catalogMessages;
        view.clearBlock(this.parrent);
        view.setBlock(this.parrent, arrayMessages, target, field);
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
    setField(parrent, arrayMessages, target, field) {
        console.log(arrayMessages);
        arrayMessages.forEach(function (elem) {
            let p = document.createElement('p');
            p.innerText = elem.text;
            parrent.appendChild(p);
        });

        moveMessage.stop();
        moveMessage.move(arrayMessages, target, field);
    }
}

class ShowMessages {
    constructor() {
        this.interval;
        this.move = this.upMessage;
        this.stop = this.stopUpMessage;
    }
    upMessage(arr, target, field) {
        let i = 0;
        this.interval = setInterval(function () {
            console.log(i);
            target.checked = false;
            field.innerText = arr[i].text;
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