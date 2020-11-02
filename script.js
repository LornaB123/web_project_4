//Modals
const addCardModal = document.querySelector('.popup_type_edit');
const addCardModal = document.querySelector('.popup_type_add-card');

//Wrappers
const modalWindow = document.querySelector('.popup');
const editForm = document.querySelector('.popup_form');

const addCardModal = document.querySelector('.popup');

//Buttons and other DOM elements
let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".form__close-button");
let form = document.querySelector(".form");
let modal= document.querySelector('.popup');
let nameInput = document.querySelector('.form__input_type_name');
let jobInput = document.querySelector('.form__input_type_job');
let profileName = document.querySelector('.profile__info-title');
let profileJob = document.querySelector('.profile__info-subtitle');

//Form data
form.addEventListener('submit', (event) => {
  event.preventDefault();
 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  
  toggleModal()
});

function toggleModal(){
  if(!modalWindow.classList.contains('.popup_open')) {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
  }
  modalWindow.classList.toggle('.popup_open');
};

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  toggleModal();
}

editButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
editForm.addEventListener('submit', formSubmitHandler);

addCardForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let nameInput = editForm.querySelector('.popup__input_type_name');
  let jobInput = editForm.querySelector('.popup__input_type_job');

});

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
]; 

const editForm = editModal.querySelector('popup__form');
const addCardForm = addCardModal.querySelector('popup__form');

initialCards.forEach(card => {
  const cardTemplate = document.querySelector('.card-template').textContent.querySelector('.places__item');
  

  const list = document.querySelector('.places__list');
})

function createCard(card) {
  const cardElement = cardTemplate.cloneNode(true);

  const title = cardElement.querySelector('.card__title');
  const image = cardElement.querySelector('.card__image');

  title.textContent = card.name;
  image.style.backgroundImage = `url(${card.link})`;

  return cardElement;
}

function addCard (cardElement) {
  list.prepend(cardElement);
}