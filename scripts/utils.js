//Toggle Functions 
//Button Popup Toggle Function 
function toggleModal(modal){ 
    modal.classList.toggle('popup_open'); 
  }  
  
  //Open Modal Function
  function openModal(modal){
     toggleModal(modal);
     window.addEventListener('keydown', escKeyClose);
     modal.addEventListener('click', closePopup);
   }
  
  //Close Function
  function closePopup(e){
    if(e.target === this || e.target === this.querySelector('.popup__close-button')) {
      closeModal(this);
      addForm.reset();
    } 
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

  function imageModal(link, name) { 
    popupPic.setAttribute('src', link); 
    popupPic.setAttribute('alt', name); 
    popupCaption.textContent = name; 
  } 
  
  export {openModal, closeModal, imageModal};