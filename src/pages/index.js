import "./index.css";
import { trashButton, defaultConfig, editModal, addModal, nameInput, jobInput, editForm, addForm, cardTemplate, list, editButton, addButton, createButton } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Card from "../components/Card.js";
//import initialCards from "../utils/initialCards.js";
import PopupWithImage from "../components/PoppupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";


//connect api
// project server URL = https://around.nomoreparties.co/v1/ + ADD Group ID here(group-7)..., 
//authorization = TOKEN( a950b923-6d6c-4927-9948-6833c1950cc9 )
const api = new Api({
     baseUrl: "https://around.nomoreparties.co/v1/group-7",
    headers: {
         authorization: "a950b923-6d6c-4927-9948-6833c1950cc9",
         "Content-Type": "application/json"
     }
 });

//Edit Profile Form
const userInformation =  new UserInfo ({
  nameSelector: '.profile__info-title',
  jobSelector: '.profile__info-subtitle'
});

//api getAppInfo
api.getAppInfo()
.then(([userData, cardListData]) => {
     //call Section to render original cards to the 'elements' section of page
     const cardSection = new Section({
      items: cardListData,
      renderer: createItem
    }, list)
    
    api.getUserInfo()
      .then(res => {
      userInformation.setUserInfo(res.name, res.about)
    })

    cardSection.renderer();

    //Add Card Form
  const addFormPopup = new PopupWithForm({
    popupSelector: '.popup_type_add-card',
    popupSubmit: ([name, link]) => {
      api.addCard({name, link})
      .then(res => {
        const newCard = createItem({name, link})
        cardSection.addItem(newCard);
      })
    }
    })
  addFormPopup.setEventListeners();

  ////event listeners for add card button
  addButton.addEventListener('click', (e) => {
    addFormValidator.disableButton();
    addFormValidator.hideErrors();
    addFormPopup.open();
  });

  //function to create individual cards
function createItem(cardInfo) {
  return new Card({
    data: cardInfo,
    handleCardClick: (name, link) => {
      imagePopup.open(name, link)
    },
    handleDeleteClick: (cardID) => {
      console.log(cardID);

      //api.removeCard(cardID);
      deleteCardPopup.open(cardID);
    }
  }, userData._id,
   cardTemplate).createCard()
}
})

//call form validator class
const editFormValidator = new FormValidator(defaultConfig, editForm);
const addFormValidator = new FormValidator(defaultConfig, addForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

//Image Popup
const imagePopup = new PopupWithImage('.popup_type_image');
imagePopup.setEventListeners();


//Delete Card Form
const deleteCardPopup = new PopupWithForm({
  popupSelector: '.popup_type_delete-card',
  popupSubmit: (cardID) => {
     api.removeCard(cardID)
     .then(() => {
      deleteCardPopup.close();
     })
  }
})
deleteCardPopup.setEventListeners();
// trashButton.addEventListener('click', (e) => {
//   deleteCardPopup.open();
// })

//Call new Popups for each type of form: image, add, edit,
//Edit Profile Form
const editFormPopup = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  popupSubmit: ([nameSelector, jobSelector]) => {
    userInformation.setUserInfo(nameSelector, jobSelector); 
  } 
});

editFormPopup.setEventListeners();

 //event listener for editButton 
 editButton.addEventListener('click', (e) => {
   const [nameSelector, jobSelector] = userInformation.getUserInfo();
   nameInput.value = nameSelector;
   jobInput.value = jobSelector;
   editFormValidator.hideErrors();
   editFormPopup.open();
});  

