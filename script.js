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
let addButton = document.querySelector('.profile__add-button');
let titleInput = document.querySelector('.form__input_type_title');
let linkInput = document.querySelector('.form__input_type_link');

// Edit Form Features
form.addEventListener('submit', (event) => {
  event.preventDefault();
 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  
  toggleModal()
})

//Add Button Form Features
form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  cardTitle.textContent = titleInput.value;
  cardImage.textContent = linkInput.value;
})


//Close Button Features
function toggleModal(){
  modal.classList.toggle('popup_open');
}

editButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
addButton.addEventListener('click', toggleModal);

//Cards to be loaded to browser
(function initialCards() {
  const cards = document.querySelector('.elements');
  const cardTemplate = document.querySelector('.card__template').content;
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
  for(initialCard of initialCards) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.elements__element-pic');
    const cardTitle = cardElement.querySelector('.elements__caption');
    const cardLike = cardElement.querySelector('.elements__favorite');

    cardImage.setAttribute('src', initialCard.link);
    cardTitle.textContent = initialCard.name;
    cards.append(cardElement);
  }
})(); 


//selecting initial cards
const cards = document.querySelector(".elements");

const cardElements = initialCards.map( card => {
  const cardItem = document.createElement("div");
  cardItem.textContent = card;
  return cardItem;
});

list.append(...cardElements);