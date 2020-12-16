const addModal = document.querySelector('.popup_type_add-card');
const addForm = addModal.querySelector('.add-form');

//Toggle Functions 
//Button Popup Toggle Function 
export default function toggleModal(modal){ 
    modal.classList.toggle('popup_open'); 
  }  
  

  //Escape key close functionality
  function escKeyClose(e){
    if(e.key === 'Escape'){
      closeModal(document.querySelector('.popup_open'));
      addForm.reset();
    }
  }
  
  function closeModal(modal){
    toggleModal(modal);
    window.removeEventListener('keydown', escKeyClose);
    modal.removeEventListener('click', closePopup);
  }


  
  export {toggleModal, closeModal};