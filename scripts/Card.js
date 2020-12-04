import {openModal, imageModal} from "./utils.js";

const imagePopup = document.querySelector('.popup_type_image');
const popupPic = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');

export default class Card {
    constructor (data, template){
        this._link = data.link;
        this._name = data.name;
        this._template = template;
    }


    _getCardTemplate (){
        return this._template.cloneNode(true);
    }

    _imageModal() { 
      popupPic.setAttribute('src', this._link); 
      popupPic.setAttribute('alt', this._name); 
      popupCaption.textContent = this._name; 
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
            imageModal(this._link, this._name); 
            openModal(imagePopup); 
           }); 
    }

    createCard() { 
        this._cardElement = this._getCardTemplate();
        const cardImage = this._cardElement.querySelector('.elements__element-pic');
        const cardTitle = this._cardElement.querySelector('.elements__caption'); 
            
        cardTitle.textContent = this._name; 
        cardImage.setAttribute('src', this._link); 
        cardImage.setAttribute('alt', this._name); 

        this._setEventListeners();

        return this._cardElement;
    }
};

 
// // //loading card templates to the browser 
// function addCard (card) { 
//    const cardElement = createCard(card); 
 
//    list.prepend(cardElement); 
//  } 
 
// initialCards.forEach(card => { 
//   addCard(card); 
//  }); 