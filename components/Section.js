export default class Section {
    constructor({items, renderer}, cardElementSelector) {
        this._items = items;
        this._renderer = renderer;
        this._cardElementSelector = document.querySelector(cardElementSelector);
        this._addItem(); 
    }
    renderItems(){
        this._renderedItems.forEach(item => this._renderer(item));
        }
    addItem(){
        this._items.forEach(item => {
            const card = this._renderer(item);
            this._cardElementSelector.append(card);
        })
    }
}