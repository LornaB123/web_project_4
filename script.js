//Modals
let form = document.querySelector(".form");
let modal= document.querySelector('.popup');

//Buttons and other DOM elements
let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".form__close-button");
let nameInput = document.querySelector('.form__input_type_name');
let jobInput = document.querySelector('.form__input_type_job');
let profileName = document.querySelector('.profile__info-title');
let profileJob = document.querySelector('.profile__info-subtitle');


// Edit Form Features
form.addEventListener('submit', (event) => {
  event.preventDefault();
 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  
  toggleModal()
})


//Close Button Features
function toggleModal(){
  modal.classList.toggle('popup_open');
}

editButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);


//Cards to be loaded to browser
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


//selecting initial cards
const cards = document.querySelector(".elements");

const cardElements = initialCards.map( card => {
  const cardItem = document.createElement("div");
  cardItem.textContent = card;
  return cardItem;
});

list.append(...cardElements);