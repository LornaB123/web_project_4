export default class Section {
    constructor({items, renderer}, cssSelector) {
        this._items = items;
        this._renderer = renderer;
        this._cssSelector = cssSelector;
    }
    renderer(){
        this._items.forEach(item => {
            this._cssSelector.append(this._renderer(item))
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
        // this._items.forEach(item => {
        //     this._cssSelector.prepend(this._renderer(item))
        // });
        this._newItem = newItem;
        this._cssSelector.prepend(this._newItem);
    }
}

