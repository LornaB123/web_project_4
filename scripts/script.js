//Modals 
const editModal= document.querySelector('.popup_type_edit'); 
const addModal = document.querySelector('.popup_type_add-card'); 
const editForm = editModal.querySelector('.edit-form'); 
const addForm = addModal.querySelector('.add-form'); 
const imagePopup = document.querySelector('.popup_type_image'); 
 
//Buttons and other DOM elements 
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupPic = imagePopup.querySelector('.popup__image'); 

const closeButton = editModal.querySelector('.popup__close-button'); 
const imageCloseButton = imagePopup.querySelector('.popup__close-button'); 
const addCloseButton = addModal.querySelector('.popup__close-button'); 

const saveButton = document.querySelector('.popup__save'); 
const createButton = addModal.querySelector('.popup__save');

const nameInput = document.querySelector('.popup__input_type_name'); 
const jobInput = document.querySelector('.popup__input_type_job'); 
const profileName = document.querySelector('.profile__info-title'); 
const profileJob = document.querySelector('.profile__info-subtitle'); 

const cardTemplate = document.querySelector('.card__template').content.querySelector('.elements__element'); 
const list = document.querySelector('.elements'); 
const popupCaption = imagePopup.querySelector('.popup__caption'); 
const titleInput = addForm.querySelector('.popup__input_type_title'); 
const linkInput = addForm.querySelector('.popup__input_type_link'); 
const errorMessage = addModal.querySelector('.popup__input'); 

//Modal Open Functions
//Edit Modal Open Function
function editButtonOpen(){
  //update fields on main page 
  profileName.textContent = nameInput.value; 
  profileJob.textContent = jobInput.value;
  //open modal
  openModal(editModal);
}
//Add Modal Open Function
function addButtonOpen(){
  addCard({name: titleInput.value, link: linkInput.value});
  openModal(addModal);
}
//Image Modal Open Function
function imagePopupOpen(){
  imageModal(card.link, card.name); 
  openModal(imagePopup);
}


//Edit Form Submit/Save Button Functionality
editForm.addEventListener('submit', (e) => {
  e.preventDefault();
  profileName.textContent = nameInput.value; 
  profileJob.textContent = jobInput.value;
  closeModal(editModal);
});
//Add Form Submit/Save Button Functionality
addForm.addEventListener('submit', (e)  => { 
  e.preventDefault(); 
  //create card: 
  addCard({name: titleInput.value, link: linkInput.value}); 
  //close modal after submit 
  closeModal(addModal); 
  addForm.reset(); 
  }); 
 
 
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
  } 
}

//Escape key close functionality
function escKeyClose(e){
  if(e.key === 'Escape'){
    closeModal(document.querySelector('.popup_open'));
  }
}

function closeModal(modal){
  toggleModal(modal);
  window.removeEventListener('keydown', escKeyClose);
  modal.removeEventListener('click', closePopup);
}
 
//event listeners for click of modal open buttons
addButton.addEventListener('click', (e) => openModal(addModal));
editButton.addEventListener('click',(e) => openModal(editModal));

 
  //Function to create new card 
  function createCard(card) { 
    const cardElement = cardTemplate.cloneNode(true); 
    const cardTitle = cardElement.querySelector('.elements__caption'); 
    const cardImage = cardElement.querySelector('.elements__element-pic'); 
    const cardLike = cardElement.querySelector('.elements__favorite'); 
    const cardTrash = cardElement.querySelector('.elements__trash'); 
    cardTrash.addEventListener('click', (e) => { 
      e.target.closest('.elements__element').remove(); 
    }); 
    cardLike.addEventListener('click', (e) => { 
      e.target.classList.toggle('elements__favorite_selected'); 
    }); 
    cardTitle.textContent = card.name; 
    cardImage.setAttribute('src', card.link); 
    cardImage.setAttribute('alt', card.name); 
    cardImage.addEventListener('click', (e) =>{      
      imageModal(card.link, card.name); 
      openModal(imagePopup); 
    }); 
    return cardElement; 
  }

 
//loading card templates to the browser 
function addCard (card) { 
  const cardElement = createCard(card); 
 
  list.prepend(cardElement); 
} 
 
initialCards.forEach(card => { 
  addCard(card); 
}); 
 
function imageModal(link, name) { 
  popupPic.setAttribute('src', link); 
  popupPic.setAttribute('alt', name); 
  popupCaption.textContent = name; 
} 