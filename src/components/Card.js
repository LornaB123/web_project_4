//import {openModal} from "../utils/utils.js";
 import {open} from "./Popup.js";
//const imagePopup = document.querySelector('.popup_type_image');
const popupPic = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');

export default class Card {
    constructor ({data, template}){
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

    _cardImageSelector(){
        this._imageModal();
        imagePopup.open();
    }

    _cardTrashSelector(e){
        e.target.closest('.elements__element').remove(); 
    }

    _cardLikeSelector(e){
        e.target.classList.toggle('elements__favorite_selected'); 
    }

    _setEventListeners() {
        this._cardLike.addEventListener("click", this._cardLikeSelector);
        this._cardTrash.addEventListener("click", this._cardTrashSelector);
        this._cardImage.addEventListener("click", this._cardImageSelector.bind(this));
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

        this._setEventListeners();

        return this._cardElement;
    }
}; 