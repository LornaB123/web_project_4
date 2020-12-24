(()=>{"use strict";class e{constructor(e,t){this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=t}_showErrorMessage(e){const t=this._form.querySelector("#"+e.id+"-error");t.textContent=e.validationMessage,t.classList.add(this._errorClass),e.classList.add(this._inputErrorClass)}_hideErrorMessage(e){const t=this._form.querySelector("#"+e.id+"-error");t.textContent="",t.classList.remove(this._errorClass),e.classList.remove(this._inputErrorClass)}_checkInputValidity(e,t){e.validity.valid?this._hideErrorMessage(e,t):this._showErrorMessage(e,t)}_toggleButtonState(e,t){const r=[...e.querySelectorAll(t)].every((e=>e.validity.valid)),s=this._form.querySelector(this._submitButtonSelector);r?(s.classList.remove(this._inactiveButtonClass),s.disabled=!1):(s.classList.add(this._inactiveButtonClass),s.disabled=!0)}_setEventListeners(){Array.from(this._form.querySelectorAll(this._inputSelector)).forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(e,this._inputErrorClass),this._toggleButtonState(this._form,this._inputSelector)}))}))}enableValidation(){this._form.addEventListener("submit",(e=>{e.preventDefault()})),this._setEventListeners()}}const t=document.querySelector(".popup_type_add-card").querySelector(".add-form");function r(e){e.classList.toggle("popup_open")}function s(e){r(e),window.addEventListener("keydown",o),e.addEventListener("click",i)}function i(e){e.target!==this&&e.target!==this.querySelector(".popup__close-button")||(n(this),t.reset())}function o(e){"Escape"===e.key&&(n(document.querySelector(".popup_open")),t.reset())}function n(e){r(e),window.removeEventListener("keydown",o),e.removeEventListener("click",i)}const a=document.querySelector(".popup_type_image"),l=a.querySelector(".popup__image"),c=a.querySelector(".popup__caption");class _{constructor(e,t){this._link=e.link,this._name=e.name,this._template=t}_getCardTemplate(){return this._template.cloneNode(!0)}_imageModal(){l.setAttribute("src",this._link),l.setAttribute("alt",this._name),c.textContent=this._name}_cardImageSelector(){this._imageModal(),s(a)}_cardTrashSelector(e){e.target.closest(".elements__element").remove()}_cardLikeSelector(e){e.target.classList.toggle("elements__favorite_selected")}_setEventListeners(){this._cardLike.addEventListener("click",this._cardLikeSelector),this._cardTrash.addEventListener("click",this._cardTrashSelector),this._cardImage.addEventListener("click",this._cardImageSelector.bind(this))}createCard(){this._cardElement=this._getCardTemplate();const e=this._cardElement.querySelector(".elements__element-pic"),t=this._cardElement.querySelector(".elements__caption");return this._cardImage=this._cardElement.querySelector(".elements__element-pic"),this._cardLike=this._cardElement.querySelector(".elements__favorite"),this._cardTrash=this._cardElement.querySelector(".elements__trash"),t.textContent=this._name,e.setAttribute("src",this._link),e.setAttribute("alt",this._name),this._setEventListeners(),this._cardElement}}const d={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},u=document.querySelector(".popup_type_edit"),p=document.querySelector(".popup_type_add-card"),m=u.querySelector(".edit-form"),h=p.querySelector(".add-form"),y=(document.querySelector(".popup_type_image"),document.querySelector(".card__template").content),S=document.querySelector(".elements"),v=new e(d,m),E=new e(d,h);v.enableValidation(),E.enableValidation(),new class{constructor({items:e,renderer:t},r){this._items=e,this._renderer=t,this._cssSelector=r}renderer(){this._items.forEach((e=>{this._renderer(e)}))}addItems(){}}({items:[{name:"Yosemite Valley",link:"https://code.s3.yandex.net/web-code/yosemite.jpg"},{name:"Lake Louise",link:"https://code.s3.yandex.net/web-code/lake-louise.jpg"},{name:"Bald Mountains",link:"https://code.s3.yandex.net/web-code/bald-mountains.jpg"},{name:"Latemar",link:"https://code.s3.yandex.net/web-code/latemar.jpg"},{name:"Vanoise National Park",link:"https://code.s3.yandex.net/web-code/vanoise.jpg"},{name:"Lago di Braies",link:"https://code.s3.yandex.net/web-code/lago.jpg"}],renderer:e=>new _({data:e,template:y}).createCard()},S).renderer();const g=document.querySelector(".profile__edit-button"),L=document.querySelector(".profile__add-button"),b=p.querySelector(".popup__save"),q=document.querySelector(".popup__input_type_name"),f=document.querySelector(".popup__input_type_job"),k=document.querySelector(".profile__info-title"),C=document.querySelector(".profile__info-subtitle"),w=h.querySelector(".popup__input_type_title"),B=h.querySelector(".popup__input_type_link");L.addEventListener("click",(e=>{b.classList.add("popup__save_disabled"),b.disabled=!0,s(p)})),g.addEventListener("click",(e=>s(u))),m.addEventListener("submit",(e=>{e.preventDefault(),k.textContent=q.value,C.textContent=f.value,n(u)})),h.addEventListener("submit",(e=>{e.preventDefault();const t={name:w.value,link:B.value};initiateCardModule(t,"prepend"),n(p),h.reset()}))})();
//# sourceMappingURL=main.js.map