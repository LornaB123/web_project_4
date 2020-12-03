import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import initialCards from "./initialCards.js";
import {openModal, closeModal} from "./utils.js";

const defaultConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};



//Modals 
const editModal= document.querySelector('.popup_type_edit'); 
const addModal = document.querySelector('.popup_type_add-card'); 
const editForm = editModal.querySelector('.edit-form'); 
const addForm = addModal.querySelector('.add-form'); 
const imagePopup = document.querySelector('.popup_type_image'); 

const cardTemplate = document.querySelector('.card__template').content;
const list = document.querySelector('.elements'); 

//call form validator class
const editFormValidator = new FormValidator(defaultConfig, editForm);
const addFormValidator = new FormValidator(defaultConfig, addForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

//initiate new Card modal 
function initiateCardModule(cardInfo, insert){
  const cardObject = new Card(cardInfo, cardTemplate);
  const card = cardObject.createCard();
  list[insert](card);
}

for(const initialCard of initialCards) initiateCardModule(initialCard, "append");

//Buttons and other DOM elements 
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
//const popupPic = imagePopup.querySelector('.popup__image'); 
const closeButton = editModal.querySelector('.popup__close-button'); 
const imageCloseButton = imagePopup.querySelector('.popup__close-button'); 
const addCloseButton = addModal.querySelector('.popup__close-button'); 
const saveButton = document.querySelector('.popup__save'); 
const createButton = addModal.querySelector('.popup__save');
const nameInput = document.querySelector('.popup__input_type_name'); 
const jobInput = document.querySelector('.popup__input_type_job'); 
const profileName = document.querySelector('.profile__info-title'); 
const profileJob = document.querySelector('.profile__info-subtitle');  
const titleInput = addForm.querySelector('.popup__input_type_title'); 
const linkInput = addForm.querySelector('.popup__input_type_link'); 


//Modal Open Functions
//Edit Modal Open Function
function editButtonOpen(){
  //update fields on main page 
  profileName.textContent = nameInput.value; 
  profileJob.textContent = jobInput.value;
  //open modal
  openModal(editModal);
}
//Image Modal Open Function
function imagePopupOpen(){
  imageModal(card.link, card.name); 
  openModal(imagePopup);
}

//event listeners for click of modal open buttons
addButton.addEventListener('click', (e) => {
  createButton.classList.add('popup__save_disabled');
  createButton.disabled = true;
  openModal(addModal);
});

editButton.addEventListener('click',(e) => openModal(editModal));


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
 
 

 
  // //Function to create new card 
  // function createCard(card) { 
  //   const cardElement = cardTemplate.cloneNode(true); 
  //   const cardTitle = cardElement.querySelector('.elements__caption'); 
  //   const cardImage = cardElement.querySelector('.elements__element-pic'); 
  //   const cardLike = cardElement.querySelector('.elements__favorite'); 
  //   const cardTrash = cardElement.querySelector('.elements__trash'); 
  //   cardTrash.addEventListener('click', (e) => { 
  //     e.target.closest('.elements__element').remove(); 
  //   }); 
  //   cardLike.addEventListener('click', (e) => { 
  //     e.target.classList.toggle('elements__favorite_selected'); 
  //   }); 
  //   cardTitle.textContent = card.name; 
  //   cardImage.setAttribute('src', card.link); 
  //   cardImage.setAttribute('alt', card.name); 
  //   cardImage.addEventListener('click', (e) =>{      
  //     imageModal(card.link, card.name); 
  //     openModal(imagePopup); 
  //   }); 
  //   return cardElement; 
  // }

 
// //loading card templates to the browser 
// function addCard (card) { 
//   const cardElement = createCard(card); 
 
//   list.prepend(cardElement); 
// } 
 
// initialCards.forEach(card => { 
//   addCard(card); 
// }); 
 
// function imageModal(link, name) { 
//   popupPic.setAttribute('src', link); 
//   popupPic.setAttribute('alt', name); 
//   popupCaption.textContent = name; 
// } 