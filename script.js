const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".form__close-button");
const form = document.querySelector(".form");
const modal= document.querySelector('.modal');
const nameInput = document.querySelector('.form__input_type_name');
const jobInput = document.querySelector('.form__input_type_job');
const profileName = document.querySelector('.profile__info-title');
const profileJob = document.querySelector('.profile__info-subtitle');

form.addEventListener('submit', (event) => {
  event.preventDefault();
 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  
  toggleModal()
})

function toggleModal(){
  modal.classList.toggle('modal_open');
}

function toggleClose() {
  modal.classList.toggle('modal_close');
}

editButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleClose);