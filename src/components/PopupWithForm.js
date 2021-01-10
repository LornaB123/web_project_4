import Popup from "./Popup.js";

//class takes callback of form submission into constructor
export default class PopupWithForm extends Popup {
    constructor({popupSelector, popupSubmit}){
        super(popupSelector); //the 'add/edit FORMS' as this._popupElement (addForm or editForm)
        this._popupSubmit = popupSubmit;
        console.log('popupElement =',this._popupElement)
        this._formElement = this._popupElement.querySelector('.popup__form');
        this._submitEventHandler = this._submitEventHandler.bind(this);
    }

    //private method, collects data from all input fields
    _getInputValues(){
        if(this._info){
            return this._info
        } else {
            return [...this._popupElement.querySelectorAll('.popup__input')].map(input => input.value);
        }
    }

     _submitEventHandler(e){
        //this._formElement.addEventListener('submit', (e) => {
            //this._formElement.addEventListener('submit', this._submitEventHandler.bind(this));
            e.preventDefault();
            this._popupSubmit(this._getInputValues());
            this.close();
        //});
    }

    //modifies setEventListeners, adds click event listener
    //to the close icon, while adding submit event handler
    setEventListeners(){
        this._popupElement.addEventListener('submit', this._submitEventHandler);
        super.setEventListeners();
    }
    //modifies open method
    open(cardInfo){
        this._info = cardInfo;
        super.open();
    }
    //modifies close method to reset form once popup is closed
    close(){
        this._formElement.reset();
        super.close();
    }
}