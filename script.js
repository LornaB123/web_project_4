let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".form__close-button");
let form = document.querySelector(".form");
let modal= document.querySelector('.popup');
let nameInput = document.querySelector('.form__input_type_name');
let jobInput = document.querySelector('.form__input_type_job');
let profileName = document.querySelector('.profile__info-title');
let profileJob = document.querySelector('.profile__info-subtitle');

form.addEventListener('submit', (event) => {
  event.preventDefault();
 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  
  toggleModal()
})

function toggleModal(){
  modal.classList.toggle('popup_open');
}

/*function toggleClose() {
  modal.classList.toggle('popup_close');*/
}

editButton.addEventListener('click', toggleModal);
/*closeButton.addEventListener('click', toggleClose);*/