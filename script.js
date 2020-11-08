//Modals
let editModal= document.querySelector('.popup_type_edit');
let addModal = document.querySelector('.popup_type_add-card');
let editForm = editModal.querySelector('.edit-form');
let addForm = addModal.querySelector('.add-form');
let imagePopup = document.querySelector('.popup_type_image');
//Buttons and other DOM elements
let editButton = document.querySelector('.profile__edit-button');
let closeButton = editModal.querySelector('.form__close-button');
let nameInput = document.querySelector('.form__input_type_name');
let jobInput = document.querySelector('.form__input_type_job');
let profileName = document.querySelector('.profile__info-title');
let profileJob = document.querySelector('.profile__info-subtitle');
let cardTemplate = document.querySelector('.card__template').content.querySelector('.elements__element');
let list = document.querySelector('.elements');
let addButton = document.querySelector('.profile__add-button');
let addCloseButton = addModal.querySelector('.form__close-button');
let addCardForm = addModal.querySelector('.popup__form')
let imageCloseButton = imagePopup.querySelector('.form__close-button');

// Edit Form Features
editForm.addEventListener('submit', (event) => {
  event.preventDefault();
 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  
  toggleModal(editModal);
});


//Add Form Submit/Save
addForm.addEventListener('submit', (evt)  => {
  evt.preventDefault();

  let titleInput = addForm.querySelector('.form__input_type_title');
  let linkInput = addForm.querySelector('.form__input_type_link');

  addCard({name: titleInput.value, link: linkInput.value});

  toggleModal(addModal);
  });
  

//Button Popup Toggle Function

function toggleModal(modal){
  modal.classList.toggle('popup_open');
};

//Open Button Fucntionalities
editButton.addEventListener('click', () => {
  toggleModal(editModal);
});

addButton.addEventListener('click', () => {
  toggleModal(addModal);
});


//Close Buttons Functionality 
addCloseButton.addEventListener('click', () => {
  toggleModal(addModal);
});

closeButton.addEventListener('click', () => {
  toggleModal(editModal);
});

imageCloseButton.addEventListener('click', e => {
  toggleModal(imagePopup);
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

  //Function to create new card
  function createCard(card) {
    let cardElement = cardTemplate.cloneNode(true);
    let cardTitle = cardElement.querySelector('.elements__caption');
    let cardImage = cardElement.querySelector('.elements__element-pic');
    let cardLike = cardElement.querySelector('.elements__favorite');
    let cardTrash = cardElement.querySelector('.elements__trash');

    cardTrash.addEventListener('click', (e) => {
      e.target.closest('.elements__element').remove();
    });

    cardLike.addEventListener('click', (e) => {
      e.target.classList.toggle('elements__favorite_selected');
    });
  
    cardTitle.textContent = card.name;
    cardImage.setAttribute('src', card.link);

    cardImage.addEventListener('click', (e) =>{
      
      imageModal(card.link, card.name);
      toggleModal(imagePopup);

    });

    return cardElement;
  };

//loading card templates to the browser
function addCard (card) {
  const cardElement = createCard(card);

  list.prepend(cardElement);
};

initialCards.forEach(card => {
  addCard(card);
});

function imageModal(link, name) {
  let imagePopup = document.querySelector('.popup_type_image');
  let popupPic = imagePopup.querySelector('.popup__image');
  let popupCaption = imagePopup.querySelector('.popup__caption');

  imagePopup.classList.add('visible');
  popupPic.setAttribute('src', link);
  popupCaption.textContent = name;
};
 
