import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import initialCards from "../utils/initialCards.js";
//import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PoppupWithImage";
import PopupWithForm from "../components/PopupWithForm";
//import {openModal, closeModal} from "../utils/utils.js";


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
const imageModal = document.querySelector('.popup_type_image'); 
const cardTemplate = document.querySelector('.card__template').content;
const list = document.querySelector('.elements'); 
//Buttons and other DOM elements 
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const createButton = addModal.querySelector('.popup__save');
const nameInput = document.querySelector('.popup__input_type_name'); 
const jobInput = document.querySelector('.popup__input_type_job'); 
const profileName = document.querySelector('.profile__info-title'); 
const profileJob = document.querySelector('.profile__info-subtitle');  
const titleInput = addForm.querySelector('.popup__input_type_title'); 
const linkInput = addForm.querySelector('.popup__input_type_link'); 
//const profileInfo = new UserInfo(profileName, profileJob);
//call form validator class
const editFormValidator = new FormValidator(defaultConfig, editForm);
const addFormValidator = new FormValidator(defaultConfig, addForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

//initiate new Card modal 
// function initiateCardModule(cardInfo, insert){
//   const cardObject = new Card(cardInfo, cardTemplate);
//   const card = cardObject.createCard();
//   list[insert](card);
// }

// for(const initialCard of initialCards) initiateCardModule(initialCard, "append");


//call Section to render original cards to the 'elements' section of page
const cardSection = new Section({
  items: initialCards,
  renderer: (cardInfo) => {
    return new Card({
      data: cardInfo,
      handleCardClick: ({name, link}) => {
        imagePopup.open(link, name)
      }
    }, cardTemplate).createCard()
  }, list
})

cardSection.renderer();

//Call new Popups for each type of form: image, add, edit,

//Image Popup
const imagePopup = new PopupWithImage(imageModal);
imagePopup.setEventListeners();

//Add Form
const addFormPopup = new PopupWithForm({
  popupSelector: addModal,
  popupSubmit: (data) => cardSection(data)
})

addFormPopup.setEventListeners();

////event listeners for click of modal add card button
addButton.addEventListener('click', (e) => {
  createButton.classList.add('popup__save_disabled');
  createButton.disabled = true;
  addFormPopup.open();
 });


 //Edit Title Form
// const editFormPopup = newPopupWithForm({
 //  popupSelector: editModal,
//   poupSubmit: () => profileInfo.setUserInfo(inputName.value, inputJob.value)
 //})
//Modal Open Functions
//Edit Modal Open Function
// function editButtonOpen(){
//   //update fields on main page 
//   profileName.textContent = nameInput.value; 
//   profileJob.textContent = jobInput.value;
//   //open modal
//   openModal(editModal);
// }
//Image Modal Open Function
//function imagePopupOpen(){
 // imageModal(card.link, card.name); 
 // openModal(imagePopup);
//}



//editButton.addEventListener('click',(e) => openModal(editModal));

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

export default {imagePopup}
