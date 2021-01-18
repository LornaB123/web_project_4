/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _utils_initialCards_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _components_PoppupWithImage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









 //call form validator class

var editFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultConfig, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.editForm);
var addFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultConfig, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.addForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation(); //Image Popup

var imagePopup = new _components_PoppupWithImage_js__WEBPACK_IMPORTED_MODULE_6__.default('.popup_type_image');
imagePopup.setEventListeners(); //function to create individual cards

function createItem(cardInfo) {
  return new _components_Card_js__WEBPACK_IMPORTED_MODULE_4__.default({
    data: cardInfo,
    handleCardClick: function handleCardClick(name, link) {
      imagePopup.open(name, link);
    }
  }, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.cardTemplate).createCard();
} //call Section to render original cards to the 'elements' section of page


var cardSection = new _components_Section_js__WEBPACK_IMPORTED_MODULE_3__.default({
  items: _utils_initialCards_js__WEBPACK_IMPORTED_MODULE_5__.default,
  renderer: createItem
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.list);
cardSection.renderer(); //Call new Popups for each type of form: image, add, edit,
//Add Card Form

var addFormPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_7__.default({
  popupSelector: '.popup_type_add-card',
  popupSubmit: function popupSubmit(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        name = _ref2[0],
        link = _ref2[1];

    var newCard = createItem({
      name: name,
      link: link
    });
    cardSection.addItem(newCard);
  }
});
addFormPopup.setEventListeners(); //Edit Profile Form

var userInformation = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_8__.default({
  nameSelector: '.profile__info-title',
  jobSelector: '.profile__info-subtitle'
}); //Edit Profile Form

var editFormPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_7__.default({
  popupSelector: '.popup_type_edit',
  popupSubmit: function popupSubmit(_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        nameSelector = _ref4[0],
        jobSelector = _ref4[1];

    userInformation.setUserInfo(nameSelector, jobSelector);
  }
});
editFormPopup.setEventListeners(); // const handleEditButtonClick = new PopupWithForm('.popup_profile',{ //muddoo
//   info: userInfo,//mudoo
//   submit: profileFormSubmit //muuddoo
// });
//const userInfo = new UserInfo(['.profile__name','.profile__text']);
//const profileFormSubmit = ([name,info]) => userInfo.setUserInfo(name,info); 
// editForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   profileName.textContent = nameInput.value; 
//   profileJob.textContent = jobInput.value;
//   closeModal(editModal);
// });
////event listeners for add card button

_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.addButton.addEventListener('click', function (e) {
  addFormValidator.disableButton(); //createButton.classList.add('popup__save_disabled');
  //createButton.disabled = true;

  addFormPopup.open();
}); //  //event listener for editButton 
//  editButton.addEventListener('click', (e) => {
//    editFormPopup.open();
//  })
//event listener for editButton 

_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.editButton.addEventListener('click', function (e) {
  var userData = userInformation.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  editFormPopup.open();
}); //Edit Title Form
// const editFormPopup = newPopupWithForm({
//  popupSelector: '.popup_type_edit',
//   poupSubmit: () => profileInfo.setUserInfo(inputName.value, inputJob.value)
//})
//Modal Open Functions
//Edit Modal Open Function
// function editButtonOpen(){
//   //update fields on main page 
//   profileName.textContent = nameInput.value; 
//   profileJob.textContent = jobInput.value;
//   //open modal
//   openModal(editModal);
// }
//Image Modal Open Function
//function imagePopupOpen(){
// imageModal(card.link, card.name); 
// openModal(imagePopup);
//}
// Previous Edit Form Submit/Save Button Functionality from Sprint 7
//editButton.addEventListener('click',(e) => openModal(editModal));
// //Add Form Submit/Save Button Functionality
// addForm.addEventListener('submit', (e)  => { 
//   e.preventDefault(); 
//   //create card: 
//   const newCard = {name: titleInput.value, link: linkInput.value};
//   //initiateCardModule(newCard, "prepend");
//   cardSection.addItem(newCard);
//   //close modal after submit 
//   closeModal(addModal); 
//   addForm.reset(); 
//   }); 
//export default {imagePopup}

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultConfig": () => /* binding */ defaultConfig,
/* harmony export */   "editModal": () => /* binding */ editModal,
/* harmony export */   "addModal": () => /* binding */ addModal,
/* harmony export */   "editForm": () => /* binding */ editForm,
/* harmony export */   "addForm": () => /* binding */ addForm,
/* harmony export */   "cardTemplate": () => /* binding */ cardTemplate,
/* harmony export */   "list": () => /* binding */ list,
/* harmony export */   "editButton": () => /* binding */ editButton,
/* harmony export */   "addButton": () => /* binding */ addButton,
/* harmony export */   "createButton": () => /* binding */ createButton
/* harmony export */ });
var defaultConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
}; //Modals 

var editModal = document.querySelector('.popup_type_edit');
var addModal = document.querySelector('.popup_type_add-card');
var editForm = editModal.querySelector('.edit-form');
var addForm = addModal.querySelector('.add-form'); //const imageModal = document.querySelector('.popup_type_image'); 

var cardTemplate = document.querySelector('.card__template').content;
var list = document.querySelector('.elements'); //Buttons and other DOM elements 

var editButton = document.querySelector('.profile__edit-button');
var addButton = document.querySelector('.profile__add-button');
var createButton = addModal.querySelector('.popup__save'); //const nameInput = document.querySelector('.popup__input_type_name'); 
//const jobInput = document.querySelector('.popup__input_type_job'); 
//const profileName = document.querySelector('.profile__info-title'); 
//const profileJob = document.querySelector('.profile__info-subtitle');  
//const titleInput = addForm.querySelector('.popup__input_type_title'); 
//const linkInput = addForm.querySelector('.popup__input_type_link'); 
//const profileInfo = new UserInfo(profileName, profileJob);



/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ FormValidator
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(settings, formElement) {
    _classCallCheck(this, FormValidator);

    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._form = formElement;
  } //Function to show error messages when validation criteria is not met


  _createClass(FormValidator, [{
    key: "_showErrorMessage",
    value: function _showErrorMessage(inputElement) {
      var errorElement = this._form.querySelector("#" + inputElement.id + "-error");

      errorElement.textContent = inputElement.validationMessage;
      errorElement.classList.add(this._errorClass);
      inputElement.classList.add(this._inputErrorClass);
    } //Function to hide the error messages when validation criteria is met

  }, {
    key: "_hideErrorMessage",
    value: function _hideErrorMessage(inputElement) {
      var errorElement = this._form.querySelector("#" + inputElement.id + "-error");

      errorElement.textContent = "";
      errorElement.classList.remove(this._errorClass);
      inputElement.classList.remove(this._inputErrorClass);
    } //Function to check the input validity according to requirements

  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputElement, inputErrorClass) {
      if (inputElement.validity.valid) {
        //hide error message
        this._hideErrorMessage(inputElement, inputErrorClass);
      } else {
        //show error message
        this._showErrorMessage(inputElement, inputErrorClass);
      }
    } //Function to change state of Save/Create buttons on form

  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState(formElement, inputSelector) {
      var inputs = _toConsumableArray(formElement.querySelectorAll(inputSelector));

      var isValid = inputs.every(function (input) {
        return input.validity.valid;
      });

      var buttonElement = this._form.querySelector(this._submitButtonSelector);

      if (isValid) {
        buttonElement.classList.remove(this._inactiveButtonClass);
        buttonElement.disabled = false;
      } else {
        buttonElement.classList.add(this._inactiveButtonClass);
        buttonElement.disabled = true;
      }
    } //method to disable create button 

  }, {
    key: "disableButton",
    value: function disableButton() {
      this._addModal = document.querySelector('.popup_type_add-card');
      this._createButton = this._addModal.querySelector('.popup__save');

      this._createButton.classList.add('popup__save_disabled');

      this._createButton.disabled = true;
    } //event listeners set for card arrays

  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      var inputs = Array.from(this._form.querySelectorAll(this._inputSelector)); //const buttonElement = this._form.querySelector(this._submitButtonSelector);

      inputs.forEach(function (inputElement) {
        inputElement.addEventListener("input", function () {
          //check Input Validity
          _this._checkInputValidity(inputElement, _this._inputErrorClass); //toggle button state


          _this._toggleButtonState(_this._form, _this._inputSelector);
        });
      });
    }
  }, {
    key: "enableValidation",
    //enable validation of form submit buttons
    value: function enableValidation() {
      this._form.addEventListener('submit', function (e) {
        e.preventDefault();
      });

      this._setEventListeners();
    }
  }]);

  return FormValidator;
}();


;

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Section
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(_ref, cssSelector) {
    var items = _ref.items,
        renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._items = items;
    this._renderer = renderer;
    this._cssSelector = cssSelector;
  }

  _createClass(Section, [{
    key: "renderer",
    value: function renderer() {
      var _this = this;

      this._items.forEach(function (item) {
        _this._cssSelector.append(_this._renderer(item));
      }); //This is the original code used to render cards in index.js (before Section class creation)
      // function initiateCardModule(cardInfo, insert){
      //     const cardObject = new Card(cardInfo, cardTemplate);
      //     const card = cardObject.createCard();
      //     list[insert](card);
      //   } 
      //   for(const initialCard of initialCards) initiateCardModule(initialCard, "append");

    }
  }, {
    key: "addItem",
    value: function addItem(cardInfo) {
      var _this2 = this;

      cardInfo.forEach(function (item) {
        _this2._cssSelector.prepend(_this2._renderer(item));
      });
    }
  }]);

  return Section;
}();



/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Card
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// //import {openModal} from "../utils/utils.js";
// const imageModalPopup = document.querySelector('.popup_type_image');
// const popupPic = imageModalPopup.querySelector('.popup__image');
// const popupCaption = imageModalPopup.querySelector('.popup__caption');
var Card = /*#__PURE__*/function () {
  function Card(_ref, template) {
    var data = _ref.data,
        handleCardClick = _ref.handleCardClick;

    _classCallCheck(this, Card);

    this._link = data.link;
    this._name = data.name;
    this._template = template;
    this._handleCardClick = handleCardClick;
  }

  _createClass(Card, [{
    key: "_getCardTemplate",
    value: function _getCardTemplate() {
      return this._template.cloneNode(true);
    } // _imageModal() { 
    //    popupPic.setAttribute('src', this._link); 
    //    popupPic.setAttribute('alt', this._name); 
    //    popupCaption.textContent = this._name; 
    //  } 
    //  _cardImageSelector(){
    //      this._imageModal();
    //      openModal(imageModalPopup);
    //  }

  }, {
    key: "_handleTrashClick",
    value: function _handleTrashClick(e) {
      e.target.closest('.elements__element').remove();
    }
  }, {
    key: "_handleCardLike",
    value: function _handleCardLike(e) {
      e.target.classList.toggle('elements__favorite_selected');
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      this._cardLike.addEventListener("click", this._cardLikeSelector);

      this._cardTrash.addEventListener("click", this._cardTrashSelector);

      this._cardImage.addEventListener("click", function () {
        return _this._handleCardClick(_this._name, _this._link);
      });
    }
  }, {
    key: "createCard",
    value: function createCard() {
      this._cardElement = this._getCardTemplate(); //const cardImage = this._cardElement.querySelector('.elements__element-pic');

      this._cardTitle = this._cardElement.querySelector('.elements__caption');
      this._cardImage = this._cardElement.querySelector('.elements__element-pic');
      this._cardLike = this._cardElement.querySelector('.elements__favorite');
      this._cardTrash = this._cardElement.querySelector('.elements__trash');
      this._cardTitle.textContent = this._name;

      this._cardImage.setAttribute('src', this._link);

      this._cardImage.setAttribute('alt', this._name);

      this._setEventListeners();

      return this._cardElement;
    }
  }]);

  return Card;
}();


;

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
//Cards to be loaded to browser upon opening
var initialCards = [{
  name: "Yosemite Valley",
  link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
}, {
  name: "Lake Louise",
  link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
}, {
  name: "Bald Mountains",
  link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
}, {
  name: "Latemar",
  link: "https://code.s3.yandex.net/web-code/latemar.jpg"
}, {
  name: "Vanoise National Park",
  link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
}, {
  name: "Lago di Braies",
  link: "https://code.s3.yandex.net/web-code/lago.jpg"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialCards);

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ PopupWithImage
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage(popupSelector) {
    var _this;

    _classCallCheck(this, PopupWithImage);

    _this = _super.call(this, popupSelector);
    _this._popupImage = _this._popupElement.querySelector('.popup__image');
    _this._popupCaption = _this._popupElement.querySelector('.popup__caption');
    return _this;
  }

  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(name, link) {
      this._popupCaption.textContent = name;
      this._popupImage.src = link;
      this._popupImage.alt = name;

      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);

  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Popup
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// const addModal = document.querySelector('.popup_type_add-card');
// const addForm = addModal.querySelector('.add-form');
var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);

    this._popupElement = document.querySelector(popupSelector);
    this._handleEscapeClose = this._handleEscapeClose.bind(this);
  } // //Toggle Functions 
  // //Button Popup Toggle Function 
  // function toggleModal(modal){ 
  //     modal.classList.toggle('popup_open'); 
  //   }  


  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popupElement.classList.add('popup_open');

      document.addEventListener('keyup', this._handleEscapeClose); //Previous code to open modals on sprint 7
      //Open Modal Function
      //   function openModal(modal){
      //      toggleModal(modal);
      //      window.addEventListener('keydown', escKeyClose);
      //      modal.addEventListener('click', closePopup);
      //    }
    }
  }, {
    key: "close",
    value: function close() {
      this._popupElement.classList.remove('popup_open');

      document.removeEventListener('keyup', this._handleEscapeClose); //   //Close Function
      //   function closePopup(e){
      //     if(e.target === this || e.target === this.querySelector('.popup__close-button')) {
      //       closeModal(this);
      //       addForm.reset();
      //     } 
      //   }
      //   function closeModal(modal){
      //     toggleModal(modal);
      //     window.removeEventListener('keydown', escKeyClose);
      //     modal.removeEventListener('click', closePopup);
      //   }
    }
  }, {
    key: "_handleEscapeClose",
    value: function _handleEscapeClose(e) {
      if (e.which == 27) {
        this.close();
      }
    } //   //Escape key close functionality
    //   function escKeyClose(e){
    //     if(e.key === 'Escape'){
    //       closeModal(document.querySelector('.popup_open'));
    //       addForm.reset();
    //     }
    //   }

  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;

      this._popupElement.addEventListener('click', function (e) {
        if (e.target.classList.contains('popup') || e.target.classList.contains('popup__close-button')) {
          _this.close();
        }
      });
    }
  }]);

  return Popup;
}(); // editButton.addEventListener('click',(e) => openModal(editModal));
// //Edit Form Submit/Save Button Functionality
// editForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   profileName.textContent = nameInput.value; 
//   profileJob.textContent = jobInput.value;
//   closeModal(editModal);
// });
// //Add Form Submit/Save Button Functionality
// addForm.addEventListener('submit', (e)  => { 
//   e.preventDefault(); 
//   //create card: 
//   const newCard = {name: titleInput.value, link: linkInput.value};
//   //initiateCardModule(newCard, "prepend");
//   cardSection.addItem(newCard);
//   //close modal after submit 
//   closeModal(addModal); 
//   addForm.reset(); 
//   });




/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ PopupWithForm
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

 //class takes callback of form submission into constructor

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(_ref) {
    var _this;

    var popupSelector = _ref.popupSelector,
        popupSubmit = _ref.popupSubmit;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector); //the 'add/edit FORMS' as this._popupElement (addForm or editForm)

    _this._popupSubmit = popupSubmit;
    _this._formElement = _this._popupElement.querySelector('.popup__form');
    _this._submitEventHandler = _this._submitEventHandler.bind(_assertThisInitialized(_this));
    return _this;
  } //private method, collects data from all input fields


  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      return _toConsumableArray(this._popupElement.querySelectorAll('.popup__input')).map(function (input) {
        return input.value;
      });
    }
  }, {
    key: "_submitEventHandler",
    value: function _submitEventHandler() {
      var _this2 = this;

      this._formElement.addEventListener('submit', function (e) {
        e.preventDefault();

        _this2._popupSubmit(_this2._getInputValues());

        _this2.close();
      });
    } // _submitEventHandler(){
    //     this._formElement.addEventListener('submit', (e) => {
    //         e.preventDefault();
    //         this._popupSubmit(this._getInputValues());
    //         this.close();
    //     })
    // }
    //modifies setEventListeners, adds click event listener
    //to the close icon, while adding submit event handler

  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      this._popupElement.addEventListener('submit', this._submitEventHandler);

      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this); // Previous Edit Form Submit/Save Button Functionality from Sprint 7
      // editForm.addEventListener('submit', (e) => {
      //   e.preventDefault();
      //   profileName.textContent = nameInput.value; 
      //   profileJob.textContent = jobInput.value;
      //   closeModal(editModal);
      // });
      // //Add Form Submit/Save Button Functionality
      // addForm.addEventListener('submit', (e)  => { 
      //   e.preventDefault(); 
      //   //create card: 
      //   const newCard = {name: titleInput.value, link: linkInput.value};
      //   //initiateCardModule(newCard, "prepend");
      //   cardSection.addItem(newCard);
      //   //close modal after submit 
      //   closeModal(addModal); 
      //   addForm.reset(); 
      //   }); 

    } //modifies close method to reset form once popup is closed

  }, {
    key: "close",
    value: function close() {
      this._popupElement.querySelector('.popup__form').reset();

      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
    }
  }]);

  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ UserInfo
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var nameSelector = _ref.nameSelector,
        jobSelector = _ref.jobSelector;

    _classCallCheck(this, UserInfo);

    this._nameSelector = document.querySelector(nameSelector);
    this._jobSelector = document.querySelector(jobSelector);
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return [this._nameSelector.textContent, this._jobSelector.textContent];
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(nameSelector, jobSelector) {
      this._nameSelector.textContent = nameSelector;
      this._jobSelector.textContent = jobSelector;
    }
  }]);

  return UserInfo;
}();



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(0);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map