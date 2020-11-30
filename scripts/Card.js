function imageModal(link, name) { 
    popupPic.setAttribute('src', link); 
    popupPic.setAttribute('alt', name); 
    popupCaption.textContent = name; 
  } 

//Open Modal Function
function openModal(modal){
    toggleModal(modal);
    window.addEventListener('keydown', escKeyClose);
    modal.addEventListener('click', closePopup);
  }

//Close Function
function closePopup(e){
    if(e.target === this || e.target === this.querySelector('.popup__close-button')) {
      closeModal(this);
      addForm.reset();
    } 
  }
  
  //Escape key close functionality
  function escKeyClose(e){
    if(e.key === 'Escape'){
      closeModal(document.querySelector('.popup_open'));
      addForm.reset();
    }
  }

export default class Card {
    constructor (data, template){
        this._link = data.link;
        this._name = data.name;
        this._template = template;
    }

    _getCardTemplate (){
        const cardTemplate = document.querySelector(this._template).content.querySelector('.elements__element'); 
        return cardTemplate;
    }

    _setEventListeners() {
        
        const cardImage = this._cardElement.querySelector('.elements__element-pic'); 
        const cardLike = this._cardElement.querySelector('.elements__favorite'); 
        const cardTrash = this._cardElement.querySelector('.elements__trash');

        cardTrash.addEventListener('click', (e) => { 
            e.target.closest('.elements__element').remove(); 
            }); 

        cardLike.addEventListener('click', (e) => { 
           e.target.classList.toggle('elements__favorite_selected'); 
        }); 

        cardImage.addEventListener('click', (e) =>{      
            this._imageModal(card.link, card.name); 
            this._openModal(imagePopup); 
           }); 
    }

    createCard() { 
        this._cardElement = this._getCardTemplate().cloneNode(true); 
        const cardImage = this._cardElement.querySelector('.elements__element-pic');
        const cardTitle = this._cardElement.querySelector('.elements__caption'); 
            
        cardTitle.textContent = this._name; 
        cardImage.setAttribute('src', this._link); 
        cardImage.setAttribute('alt', this._name); 

        this._setEventListeners();

        return this._cardElement;
    };   



};