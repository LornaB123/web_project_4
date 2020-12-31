import Popup from "./Popup.js";

//class takes callback of form submission into constructor
export default class PopupWithForm extends Popup {
    constructor({popupSelector, popupSubmit}){
        super(popupSelector); //the 'add/edit FORMS' as this._popupElement (addForm or editForm)
        this._popupSubmit = popupSubmit;
        this._formElement = this._popupElement.querySelector('.popup__form');
        this._submitEventHandler = this._submitEventHandler.bind(this);
    }

    //private method, collects data from all input fields
    _getInputValues(){
        return [...this._popupElement.querySelectorAll('.popup__input')].map(input => input.value);
    }

     _submitEventHandler(){
        this._formElement.addEventListener('submit', (e) => {
            e.preventDefault();
            this._popupSubmit(this._getInputValues());
            this.close();
        });
    }

    // _submitEventHandler(){
    //     this._formElement.addEventListener('submit', (e) => {
    //         e.preventDefault();
    //         this._popupSubmit(this._getInputValues());
    //         this.close();
    //     })
    // }

    //modifies setEventListeners, adds click event listener
    //to the close icon, while adding submit event handler
    setEventListeners(){
        this._popupElement.addEventListener('submit', this._submitEventHandler);
        super.setEventListeners();
// Previous Edit Form Submit/Save Button Functionality from Sprint 7
// editForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   profileName.textContent = nameInput.value; 
//   profileJob.textContent = jobInput.value;
//   closeModal(editModal);
// });
// //Add Form Submit/Save Button Functionality
// addForm.addEventListener('submit', (e)  => { 
//   e.preventDefault(); 
//   //create card: 
//   const newCard = {name: titleInput.value, link: linkInput.value};
//   //initiateCardModule(newCard, "prepend");
//   cardSection.addItem(newCard);

//   //close modal after submit 
//   closeModal(addModal); 
//   addForm.reset(); 
//   }); 

    }
    //modifies close method to reset form once popup is closed
    close(){
        this._popupElement.querySelector('.popup__form').reset();
        super.close();
    }
}
