

class TestApp {
    constructor(){
        this.target = document.querySelector('#target');
        this.parrent = document.querySelector('#listMessages');
        this.field = document.querySelector('#field');
        this.enterMessage = document.querySelector('#enterMessage');
        this.sendMessage = document.querySelector('#sendMessage');
        this.sendMessage.addEventListener('click', this.setMessage.bind(this));
        this.target.addEventListener('click', this.markMessage.bind(this));
        this.catalogMessages = [];
        this.interval = null;
    }

    setMessage(){
        if(this.enterMessage.value != ''){
            let text = this.enterMessage.value;
            this.createList(text);
            this.enterMessage.value = '';
            this.clearField();
            this.setField();
            this.stop();
            this.moveMessage();
            console.log(this.catalogMessages);

        } /*else if(this.enterMessage.value == ''){
            alert('enter your message');
        }*/
        else {
            this.clearField();
            this.setField();
            this.stop();
            this.moveMessage();
        }
    }
    createList(message){
        this.catalogMessages.push(message);
    }
    clearField(){
        while(this.parrent.children.length > 0){
            this.parrent.removeChild(this.parrent.firstChild);
        }
    }
    setField(){
        let catalog = this.catalogMessages;
        for(let i=0; i<catalog.length; i++){
            let p = document.createElement('p');
            p.innerText = catalog[i];
            this.parrent.appendChild(p);
        }
    }
    stop(){
        clearInterval(this.interval);
    }
    moveMessage(){
        let field = this.field;
        let arrayMessages = this.catalogMessages.filter(function(elem){
            return elem[0] != 'X';
        });
        let i = 0;
        this.interval = setInterval(function(){
            field.innerText = arrayMessages[i];
            i++;
            if(i >= arrayMessages.length){
                i = 0;
            }
        }, 1000)
    }
    markMessage(event){
        let parent = event.target.parentElement;
        let neighbor = parent.nextElementSibling;
        for(let i = 0; i<this.catalogMessages.length; i++){
            if(neighbor.innerText === this.catalogMessages[i]){
                this.catalogMessages[i] = 'X' + this.catalogMessages[i];
            }
        }
        this.setMessage();
    }
}

new TestApp();

