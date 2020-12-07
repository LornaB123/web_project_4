import {openModal} from "./utils.js";

const imagePopup = document.querySelector('.popup_type_image');


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
      this._popupPic = imagePopup.querySelector('.popup__image');
      this._popupCaption = imagePopup.querySelector('.popup__caption');
      this._popupPic.setAttribute('src', this._link); 
      this._popupPic.setAttribute('alt', this._name); 
      this._popupCaption.textContent = this._name; 
    } 
    

    _cardImageSelector(){
        _imageModal(this._link, this._name);
        openModal(imagePopup);
    }

    _cardTrashSelector(e){
        e.target.closest('.elements__element').remove(); 
    }

    _cardLikeSelector(){
        e.target.classList.toggle('elements__favorite_selected'); 
    }

    _setEventListeners() {
        this.cardLike.addEventListener("click", this._cardLikeSelector);
        this._cardTrash.addEventListener("click", this._cardTrashSelector);
        this._cardImage.addEventListener("click", this._cardImageSelector);
    }

    createCard() { 
        this._cardElement = this._getCardTemplate();
        const cardImage = this._cardElement.querySelector('.elements__element-pic');
        const cardTitle = this._cardElement.querySelector('.elements__caption'); 
        this._cardImage = this._cardElement.querySelector('.elements__element-pic'); 
        this._cardLike = this._cardElement.querySelector('.elements__favorite'); 
        this._cardTrash = this._cardElement.querySelector('.elements__trash');
            
        cardTitle.textContent = this._name; 
        cardImage.setAttribute('src', this._link); 
        cardImage.setAttribute('alt', this._name); 

        this._setEventListeners;

        return this._cardElement;
    }
}; 