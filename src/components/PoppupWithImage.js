import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector);
    }

    open(link, caption){
        this._popupElement.querySelector('.popup__image').src = link;
        this._popupElement.querySelector('.popup__caption').src = caption;
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
