import {openModal} from "./utils.js";

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

  //   function imageModal(link, name) { 
  //   const imagePopup = document.querySelector('.popup_type_image');
  //   const popupPic = imagePopup.querySelector('.popup__image');
  //   const popupCaption = imagePopup.querySelector('.popup__caption');
  //   popupPic.setAttribute('src', link); 
  //   popupPic.setAttribute('alt', name); 
  //   popupCaption.textContent = name; 
  // } 

    _cardTrashSelector (e) {
        e.target.closest(".elements__element").remove();
    }

    _cardLikeSelector (e) {
        e.target.classList.toggle('elements__favorite_selected');
    }

    _cardImageSelector () {
        _imageModal(this._link, this._name); 
        openModal(imagePopup); 
    }

    _setEventListeners() {
        this._cardTrash.addEventListener("click", this._cardTrashSelector());
        this._cardLike.addEventListener("click", this._cardLikeSelector()); 
        this._cardImage.addEventListener('click', this._cardImageSelector()); 
    }

    createCard() { 
        this._cardElement = this._getCardTemplate();
        const cardImage = this._cardElement.querySelector('.elements__element-pic');
        const cardTitle = this._cardElement.querySelector('.elements__caption'); 
        this._cardTrash = this._cardElement.querySelector('.elements__trash');
        this._cardLike = this._cardElement.querySelector('.elements__favorite'); 
        this._cardImage = this._cardElement.querySelector('.elements__element-pic'); 
            
        cardTitle.textContent = this._name; 
        cardImage.setAttribute('src', this._link); 
        cardImage.setAttribute('alt', this._name); 

        this._setEventListeners();

        return this._cardElement;
    }
}; 