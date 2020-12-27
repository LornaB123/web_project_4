import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector);
        this._popupLink = this._popupElement.querySelector('.popup__image');
        this._popupName = this._popupElement.querySelector('.popup__caption');
    }

    open(link, name){
        this._popupLink.src = link;
        this._popupName.src = name;
        super.open();
// Previous Edit Form Submit/Save Button Functionality from Sprint 7
// editForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   profileName.textContent = nameInput.value; 
//   profileJob.textContent = jobInput.value;
//   closeModal(editModal);
// });
    }
}
