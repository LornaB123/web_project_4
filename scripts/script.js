//Modals
const editModal= document.querySelector('.popup_type_edit');
const addModal = document.querySelector('.popup_type_add-card');
const editForm = editModal.querySelector('.edit-form');
const addForm = addModal.querySelector('.add-form');
const imagePopup = document.querySelector('.popup_type_image');
//Buttons and other DOM elements
const editButton = document.querySelector('.profile__edit-button');
const closeButton = editModal.querySelector('.form__close-button');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');
const profileName = document.querySelector('.profile__info-title');
const profileJob = document.querySelector('.profile__info-subtitle');
const cardTemplate = document.querySelector('.card__template').content.querySelector('.elements__element');
const list = document.querySelector('.elements');
const addButton = document.querySelector('.profile__add-button');
const addCloseButton = addModal.querySelector('.form__close-button');
const popupPic = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');
const titleInput = addForm.querySelector('.form__input_type_title');
const linkInput = addForm.querySelector('.form__input_type_link');
const imageCloseButton = imagePopup.querySelector('.form__close-button');

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
  imagePopup.classList.add('visible');
  popupPic.setAttribute('src', link);
  popupPic.setAttribute('alt', name);
  popupCaption.textContent = name;
};
 
