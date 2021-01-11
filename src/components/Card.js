import { cardTemplate } from "../utils/constants";

export default class Card {
    constructor ({data, handleCardClick, handleDeleteClick, likeHandler}, userId, template){
        this._link = data.link;
        this._name = data.name;
        this._owner = data.owner;
        this._id = data._id;
        this._userId = userId;
        this._template = template;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
        this._likeHandler = likeHandler;
    }

    id(){
        return this._id;
    }

    // showLikes(count){
    //     this._cardElement.querySelector('elements__likes').textContent = count;
    //   }

    _showDeleteIcon(){
        if(this._owner._id === this._userId){
            this._cardTrash.classList.add('elements__trash_visible');
        }
    }

    _getCardTemplate (){
        return this._template.cloneNode(true).querySelector('.elements__element');
    }

    // _handleTrashClick(e){
    //     e.target.closest('.elements__element').remove(); 
    // }

    // _handleCardLike(e){
    //     e.target.classList.toggle('elements__favorite_selected'); 
    // }

    _setEventListeners() {
        this._cardLike.addEventListener("click", () => this._likeHandler(this._cardElement, this._id));
        this._cardTrash.addEventListener("click", () => this._handleDeleteClick([this._id, this._cardElement]));
        this._cardImage.addEventListener("click", () => this._handleCardClick(this._name, this._link));
    }

    createCard() { 
        this._cardElement = this._getCardTemplate();
        this._cardTitle = this._cardElement.querySelector('.elements__caption'); 
        this._cardImage = this._cardElement.querySelector('.elements__element-pic'); 
        this._cardLike = this._cardElement.querySelector('.elements__favorite'); 
        this._cardTrash = this._cardElement.querySelector('.elements__trash');
        this._cardLikes = this._cardElement.querySelector('.elements__likes');
            
        this._cardTitle.textContent = this._name; 
        this._cardImage.setAttribute('src', this._link); 
        this._cardImage.setAttribute('alt', this._name); 
        this._cardElement.id = this._id;
        this._cardLikes.textContent = this._cardLikes.length;

        this._showDeleteIcon();
        this._setEventListeners();

        return this._cardElement;
    }
}; 