export default class Section { 
    constructor({renderer}, container) { 
        this._renderer = renderer; 
        this._container = container; 
    } 
    renderItems(items){ 
        items.forEach(item => { 
            this._container.append(this._renderer(item)) 
        }); 
//This is the original code used to render cards in index.js (before Section class creation) 
        // function initiateCardModule(cardInfo, insert){ 
        //     const cardObject = new Card(cardInfo, cardTemplate); 
        //     const card = cardObject.createCard(); 
        //     list[insert](card); 
        //   }  
        //   for(const initialCard of initialCards) initiateCardModule(initialCard, "append"); 
    } 
    addItem(newItem){ 
        this._container.prepend(newItem); 
    } 
} 
