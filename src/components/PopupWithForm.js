import Popup from "./Popup.js";

//class takes callback of form submission into constructor
export default class PopupWithForm extends Popup {
    constructor(popupSelector, popupSubmit){
        super(popupSelector); //the 'add/edit FORMS' as this._popupElement (addForm or editForm)
        this._popupSubmit = popupSubmit;
        this._formElement = document.querySelector('.popup__form');
    }

    //private method, collects data from all input fields
    _getInputValues(){
        this._inputList = this._formElement.querySelector('.popup__input');
        this._inputValues = {};
        this._inputList.forEach(input => {
            this._inputValues[input.name, input.job] = input.value;
            return this._inputValues;
        });
    }

    //modifies setEventListeners, adds click event listener
    //to the close icon, while adding submit event handler
    setEventListeners(){
        this._formElement.addEventListener('submit', (e) => {
            e.preventDefault();
            this._popupSubmit(this._getInputValues());
            this.close();
        })
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
        this._formElement.querySelector('.popup__form').reset();
        super.close();
    }
}
