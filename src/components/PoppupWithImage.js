import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector);
        this._popupLink = this._popupElement.querySelector('.popup__image');
        this._popupName = this._popupElement.querySelector('.popup__caption');
    }

    open(name, link){
        this._popupName.src = name;
        this._popupLink.src = link;
        super.open();

    }
}
