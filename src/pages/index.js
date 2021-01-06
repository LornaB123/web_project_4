import "./index.css";
import {defaultConfig, editModal, addModal, editForm, addForm, cardTemplate, list, editButton, addButton, createButton } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
import initialCards from "../utils/initialCards.js";
import PopupWithImage from "../components/PoppupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";


//call form validator class
const editFormValidator = new FormValidator(defaultConfig, editForm);
const addFormValidator = new FormValidator(defaultConfig, addForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();


//Image Popup
const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners();

//function to create individual cards
function createItem(cardInfo) {
  return new Card({
    data: cardInfo,
    handleCardClick: (name, link) => {
      imagePopup.open(name, link)
    }
  }, cardTemplate).createCard()
}

//call Section to render original cards to the 'elements' section of page
const cardSection = new Section({
  items: initialCards,
  renderer: createItem
}, list)

cardSection.renderer();

//Call new Popups for each type of form: image, add, edit,
//Add Card Form
const addFormPopup = new PopupWithForm({
  popupSelector: '.popup_type_add-card',
  popupSubmit: ([name, link]) => {
    const newCard = createItem({name, link})
    cardSection.addItem(newCard);
   }
  })

addFormPopup.setEventListeners();

//Edit Profile Form
const userInformation =  new UserInfo ({
  nameSelector: '.profile__info-title',
  jobSelector: '.profile__info-subtitle'
});

//Edit Profile Form
const editFormPopup = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  popupSubmit: ([nameSelector, jobSelector]) => {
    userInformation.setUserInfo(nameSelector, jobSelector); 
  } 
});

editFormPopup.setEventListeners();

////event listeners for add card button
addButton.addEventListener('click', (e) => {
  addFormValidator.disableButton();
  //createButton.classList.add('popup__save_disabled');
  //createButton.disabled = true;
  //addForm.reset();
  addFormPopup.open();
 });

//  //event listener for editButton 
//  editButton.addEventListener('click', (e) => {
//   const userData = userInformation.getUserInfo()
//   editFormPopup.open();
// }) 

 //event listener for editButton 
 editButton.addEventListener('click', (e) => {
   const [nameSelector, jobSelector] = userInformation.getUserInfo();
   document.querySelector('.popup__input_type_name').value = nameSelector;
   document.querySelector('.popup__input_type_job').value = jobSelector;
   editFormPopup.open();
});  




// editForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   profileName.textContent = nameInput.value; 
//   profileJob.textContent = jobInput.value;
//   closeModal(editModal);
// });

 //Edit Title Form
// const editFormPopup = newPopupWithForm({
 //  popupSelector: '.popup_type_edit',
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


// Previous Edit Form Submit/Save Button Functionality from Sprint 7

//editButton.addEventListener('click',(e) => openModal(editModal));

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

//export default {imagePopup}
