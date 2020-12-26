// const addModal = document.querySelector('.popup_type_add-card');
// const addForm = addModal.querySelector('.add-form');

export default class Popup {
    constructor(popupSelector){
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscapeClose = this._handleEscapeClose.bind(this);
    }
// //Toggle Functions 
// //Button Popup Toggle Function 
// function toggleModal(modal){ 
//     modal.classList.toggle('popup_open'); 
//   }  
    open(){
        this._popupElement.classList.add('popup_open');
        document.addEventListener('keyup', this._handleEscapeClose);
//Previous code to open modals on sprint 7
//Open Modal Function
//   function openModal(modal){
//      toggleModal(modal);
//      window.addEventListener('keydown', escKeyClose);
//      modal.addEventListener('click', closePopup);
//    }
    }

    close(){
        this._popupElement.classList.remove('popup_open');
        document.removeEventListener('keyup', this._handleEscapeClose);
//   //Close Function
//   function closePopup(e){
//     if(e.target === this || e.target === this.querySelector('.popup__close-button')) {
//       closeModal(this);
//       addForm.reset();
//     } 
//   }
//   function closeModal(modal){
//     toggleModal(modal);
//     window.removeEventListener('keydown', escKeyClose);
//     modal.removeEventListener('click', closePopup);
//   }
    }

    _handleEscapeClose(e){
        if(e.which == 27) {
            this.close();
        }
    }
  
//   //Escape key close functionality
//   function escKeyClose(e){
//     if(e.key === 'Escape'){
//       closeModal(document.querySelector('.popup_open'));
//       addForm.reset();
//     }
//   }
    setEventListeners(){
        this._popupElement.addEventListener('click', (e) => {
            if(!e.target.classList.contains('popup') || e.target.classList.contains('popup__close-button')) {
                this.close();
            }
        })
    }
}


// editButton.addEventListener('click',(e) => openModal(editModal));

// //Edit Form Submit/Save Button Functionality
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

  
  

  


