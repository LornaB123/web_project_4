import toggleModal from "../utils/utils.js";

export default class Popup {
    constructor(popupSelector){
        this._popup = document.querySelector(popupSelector);
    }
        open() {
            this.setEventListeners();
            this.toggleModal();
        }

        close = (e) => {
            (e.target === this._popup || e.target === this._popup.querySelector("popup__close-button"));
            this.toggleModal();
            this.reset();
            document.removeEventListener('keydown', this._handleEscClose);
            this._popup.removeEventListener('click', this._closePopup);
        }

        _handleEscClose = (e) => {
            if(e.key === "Escape") {
                this.close();
            }
        }

        setEventListeners() {
            this._popup.addEventListener("click", this._close);
            document.addEventListener("keydown", this._handleEscClose); 
        }
}
//   //Open Modal Function
//   function openModal(modal){
//     toggleModal(modal);
//     window.addEventListener('keydown', escKeyClose);
//     modal.addEventListener('click', closePopup);
//   }
 
//  //Close Function
//  function closePopup(e){
//    if(e.target === this || e.target === this.querySelector('.popup__close-button')) {
//      closeModal(this);
//      addForm.reset();
//    } 
//  }
 
// const addModal = document.querySelector('.popup_type_add-card');
// const addForm = addModal.querySelector('.add-form');

// //Toggle Functions 
// //Button Popup Toggle Function 
// function toggleModal(modal){ 
//     modal.classList.toggle('popup_open'); 
//   }  
  

  //Escape key close functionality
//   function escKeyClose(e){
//     if(e.key === 'Escape'){
//       closeModal(document.querySelector('.popup_open'));
//       addForm.reset();
//     }
//   }
  
//   function closeModal(modal){
//     toggleModal(modal);
//     window.removeEventListener('keydown', escKeyClose);
//     modal.removeEventListener('click', closePopup);
//   }


