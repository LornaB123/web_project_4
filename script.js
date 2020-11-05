//Modals
let editForm = document.querySelector(".edit-form");
let addForm = document.querySelector(".add-form");
let editModal= document.querySelector('.popup_type_edit');
let addModal = document.querySelector('.popup_type_add-card');

//Buttons and other DOM elements
let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".form__close-button");
let nameInput = document.querySelector('.form__input_type_name');
let jobInput = document.querySelector('.form__input_type_job');
let profileName = document.querySelector('.profile__info-title');
let profileJob = document.querySelector('.profile__info-subtitle');
//let cardTitle = document.querySelector('.form__input_type_title');
//let cardImage = document.querySelector('.form__input_type_link');

const cardTemplate = document.querySelector('.card__template').content.querySelector('.elements__element');
const list = document.querySelector('.elements');


let addButton = document.querySelector('.profile__add-button');
let addCloseButton = document.querySelector('.form__close-button');
let titleInput = document.querySelector('.form__input_type_title');
let linkInput = document.querySelector('.form__input_type_link');



// Edit Form Features
editForm.addEventListener('submit', (event) => {
  event.preventDefault();
 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  
  toggleModal(editModal)
});

//Add Button Form Features
addForm.addEventListener('submit', (evt) => {
  evt.preventDefault();


  function newCard(card => {

    const cardElement = cardTemplate.cloneNode(true);
  
    const cardTitle = cardElement.querySelector('.elements__caption');
    const cardImage = cardElement.querySelector('.elements__element-pic');
    const cardLike = cardElement.querySelector('.elements__favorite');
    const cardTrash = cardElement.querySelector('.elements__trash');
  
    cardTitle.textContent = card.name;
    cardImage.setAttribute('src', card.link);
  
    list.prepend(cardElement);
  });

  toggleModal(addModal)
});
 
addCloseButton.addEventListener('click', () => {
  addForm.classList.remove('.popup_open');
});

closeButton.addEventListener('click', () => {
});

//Close Button Features
function toggleModal(modal){
  modal.classList.toggle('popup_open');
};

editButton.addEventListener('click', () => {
  toggleModal(editModal);
});


addButton.addEventListener('click', () => {
  toggleModal(addModal);
});

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

//loading card templates to the browser


initialCards.forEach(card => {
  
  const cardElement = cardTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector('.elements__caption');
  const cardImage = cardElement.querySelector('.elements__element-pic');
  const cardLike = cardElement.querySelector('.elements__favorite');
  const cardTrash = cardElement.querySelector('.elements__trash');

  cardTitle.textContent = card.name;
  cardImage.setAttribute('src', card.link);

  list.prepend(cardElement);
});
 

