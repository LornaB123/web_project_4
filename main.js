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
/* harmony import */ var _components_PoppupWithImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





 //import initialCards from "../utils/initialCards.js"; 




 //connect api 
// project server URL = https://around.nomoreparties.co/v1/ + ADD Group ID here(group-7)...,  
//authorization = TOKEN( a950b923-6d6c-4927-9948-6833c1950cc9 ) 

var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_8__.default({
  baseUrl: "https://around.nomoreparties.co/v1/group-7",
  headers: {
    authorization: "a950b923-6d6c-4927-9948-6833c1950cc9",
    "Content-Type": "application/json"
  }
}); //Edit Profile Form 

var userInformation = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__.default({
  name: '.profile__info-title',
  job: '.profile__info-subtitle',
  avatar: '.profile__image'
}); //function for counting likes 

function cardCountLikes(cardElement, cardID) {
  if (cardElement.isLiked()) {
    api.removeLike(cardID).then(function (res) {
      cardElement.updateLikes(res.likes);
    }).catch(function (err) {
      return console.log(err);
    });
  } else {
    api.addLike(cardID).then(function (res) {
      cardElement.updateLikes(res.likes);
    }).catch(function (err) {
      return console.log(err);
    });
  }
} //function to create individual cards 


function createItem(cardInfo) {
  return new _components_Card_js__WEBPACK_IMPORTED_MODULE_4__.default({
    data: cardInfo,
    handleCardClick: function handleCardClick(name, link) {
      imagePopup.open(name, link);
    },
    handleDeleteClick: function handleDeleteClick(cardInfo) {
      deleteCardPopup.open(cardInfo);
    },
    likeHandler: function likeHandler(cardElement, cardID) {
      cardCountLikes(cardElement, cardID);
    }
  }, userId, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.cardTemplate).createCard();
}

var cardSection = new _components_Section_js__WEBPACK_IMPORTED_MODULE_3__.default({
  renderer: createItem
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.list);
var userId; //api getAppInfo 

api.getAppInfo().then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      userData = _ref2[0],
      cardListData = _ref2[1];

  userId = userData._id;
  userInformation.setUserInfo(userData.name, userData.about, userData.avatar);
  cardSection.renderItems(cardListData); // api.getUserInfo() 
  //   .then(res => { 
  //   userInformation.setUserInfo(res.name, res.about, res.avatar) 
  // }) 
  //cardSection.renderItems(cardListData); 
  //Add Card Form 

  var addFormPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__.default({
    popupSelector: '.popup_type_add-card',
    popupSubmit: function popupSubmit(_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          name = _ref4[0],
          link = _ref4[1];

      api.addCard({
        name: name,
        link: link
      }).then(function (res) {
        var newCard = createItem(res);
        cardSection.addItem(newCard);
      });
    }
  });
  addFormPopup.setEventListeners(); ////event listeners for add card button 

  _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.addButton.addEventListener('click', function (e) {
    addFormValidator.disableButton();
    addFormValidator.hideErrors();
    addFormPopup.open();
  });
}); //call form validator class 

var editFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultConfig, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.editForm);
var addFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultConfig, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.addForm);
var avatarFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.default(_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultConfig, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.avatarForm);
avatarFormValidator.enableValidation();
editFormValidator.enableValidation();
addFormValidator.enableValidation(); //Image Popup 

var imagePopup = new _components_PoppupWithImage_js__WEBPACK_IMPORTED_MODULE_5__.default('.popup_type_image');
imagePopup.setEventListeners(); //Delete Card Form 

var deleteCardPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__.default({
  popupSelector: '.popup_type_delete-card',
  popupSubmit: function popupSubmit(_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        cardID = _ref6[0],
        cardElement = _ref6[1];

    loadingPopup(true, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.deleteModal);
    api.removeCard(cardID).then(function () {
      loadingPopup(false, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.deleteModal);
      deleteCardPopup.close();
      cardElement.remove();
    });
  }
});
deleteCardPopup.setEventListeners(); //Call new Popups for each type of form: image, add, edit, avatar 
//popup Loading function 

function loadingPopup(isLoading, popup) {
  if (isLoading) {
    popup.querySelector('.popup__save').textContent = "Saving...";
  } else {
    popup.querySelector(".popup__save").textContent = "Save";
  }
} // //avatar edit form 


var avatarFormPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__.default({
  popupSelector: '.popup_type_avatar',
  popupSubmit: function popupSubmit(_ref7) {
    var _ref8 = _slicedToArray(_ref7, 1),
        avatar = _ref8[0];

    handleAvatarClick(avatar);
  }
});
avatarFormPopup.setEventListeners(); //event listener for avatar edit button 

_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.avatarButton.addEventListener('click', function (e) {
  avatarFormValidator.hideErrors();
  avatarFormPopup.open();
}); //avatar edit handler 

function handleAvatarClick(avatar) {
  loadingPopup(true, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.avatarModal);
  api.setUserAvatar(avatar).then(function (res) {
    _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.avatarImage.src = res.avatar;
    loadingPopup(false, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.avatarModal);
    avatarFormPopup.close();
  }).catch(function (err) {
    return console.log(err);
  });
} //Edit Profile Form 


var editFormPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__.default({
  popupSelector: '.popup_type_edit',
  popupSubmit: function popupSubmit(_ref9) {
    var _ref10 = _slicedToArray(_ref9, 2),
        name = _ref10[0],
        job = _ref10[1];

    handleEditButtonClick(name, job);
  }
});
editFormPopup.setEventListeners();

function handleEditButtonClick(name, job) {
  loadingPopup(true, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.editModal);
  api.setUserInfo({
    name: name,
    about: job
  }).then(function (res) {
    _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.profileName.textContent = res.name;
    _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.profileJob.textContent = res.about;
    loadingPopup(false, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.editModal);
    editFormPopup.close();
  }).catch(function (err) {
    return console.log(err);
  });
} //event listener for editButton  


_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.editButton.addEventListener('click', function (e) {
  var _userInformation$getU = userInformation.getUserInfo(),
      _userInformation$getU2 = _slicedToArray(_userInformation$getU, 2),
      name = _userInformation$getU2[0],
      job = _userInformation$getU2[1];

  _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.nameInput.value = name;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.jobInput.value = job;
  editFormValidator.hideErrors();
  editFormPopup.open();
});

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
/* harmony export */   "profileName": () => /* binding */ profileName,
/* harmony export */   "profileJob": () => /* binding */ profileJob,
/* harmony export */   "deleteModal": () => /* binding */ deleteModal,
/* harmony export */   "avatarForm": () => /* binding */ avatarForm,
/* harmony export */   "avatarImage": () => /* binding */ avatarImage,
/* harmony export */   "avatarModal": () => /* binding */ avatarModal,
/* harmony export */   "avatarButton": () => /* binding */ avatarButton,
/* harmony export */   "trashButton": () => /* binding */ trashButton,
/* harmony export */   "defaultConfig": () => /* binding */ defaultConfig,
/* harmony export */   "nameInput": () => /* binding */ nameInput,
/* harmony export */   "jobInput": () => /* binding */ jobInput,
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
var avatarModal = document.querySelector('.popup_type_avatar');
var deleteModal = document.querySelector('.popup_type_delete-card');
var editForm = editModal.querySelector('.edit-form');
var addForm = addModal.querySelector('.add-form');
var avatarForm = avatarModal.querySelector('.avatar-form'); //const imageModal = document.querySelector('.popup_type_image');  

var cardTemplate = document.querySelector('.card__template').content;
var list = document.querySelector('.elements'); //Buttons and other DOM elements  

var editButton = document.querySelector('.profile__edit-button');
var addButton = document.querySelector('.profile__add-button');
var trashButton = document.querySelector('.elements__trash');
var createButton = addModal.querySelector('.popup__save');
var avatarButton = document.querySelector('.profile__image-edit');
var nameInput = document.querySelector('.popup__input_type_name');
var jobInput = document.querySelector('.popup__input_type_job');
var avatarImage = document.querySelector('.profile__image'); //const nameInput = document.querySelector('.popup__input_type_name');  
//const jobInput = document.querySelector('.popup__input_type_job');  

var profileName = document.querySelector('.profile__info-title');
var profileJob = document.querySelector('.profile__info-subtitle'); //const titleInput = addForm.querySelector('.popup__input_type_title');  
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
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
    this._inputs = _toConsumableArray(this._form.querySelectorAll(this._inputSelector));
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
      //const inputs = [...formElement.querySelectorAll(inputSelector)]; 
      var isValid = this._inputs.every(function (input) {
        return input.validity.valid;
      }); //const buttonElement = this._form.querySelector(this._submitButtonSelector); 


      if (isValid) {
        this._buttonElement.classList.remove(this._inactiveButtonClass);

        this._buttonElement.disabled = false;
      } else {
        this._buttonElement.classList.add(this._inactiveButtonClass);

        this._buttonElement.disabled = true;
      }
    } //method to disable create button  

  }, {
    key: "disableButton",
    value: function disableButton() {
      this._buttonElement.classList.add(this._inactiveButtonClass);

      this._buttonElement.disabled = true;
    } //event listeners set for card arrays 

  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      this._inputs.forEach(function (inputElement) {
        inputElement.addEventListener("input", function () {
          //check Input Validity 
          _this._checkInputValidity(inputElement, _this._inputErrorClass); //toggle button state 


          _this._toggleButtonState(_this._form, _this._inputSelector);
        });
      });
    }
  }, {
    key: "hideErrors",
    value: function hideErrors() {
      var _this2 = this;

      this._inputs.forEach(function (inputElement) {
        _this2._hideErrorMessage(inputElement);
      });
    } //enable validation of form submit buttons 

  }, {
    key: "enableValidation",
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
  function Section(_ref, container) {
    var renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._renderer = renderer;
    this._container = container;
  }

  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems(items) {
      var _this = this;

      items.forEach(function (item) {
        _this._container.append(_this._renderer(item));
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
    value: function addItem(newItem) {
      this._container.prepend(newItem);
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
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Card = /*#__PURE__*/function () {
  function Card(_ref, userId, template) {
    var data = _ref.data,
        handleCardClick = _ref.handleCardClick,
        handleDeleteClick = _ref.handleDeleteClick,
        likeHandler = _ref.likeHandler;

    _classCallCheck(this, Card);

    this._link = data.link;
    this._name = data.name;
    this._owner = data.owner;
    this._likes = data.likes;
    this._id = data._id;
    this._userId = userId;
    this._template = template;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._likeHandler = likeHandler;
  }

  _createClass(Card, [{
    key: "id",
    value: function id() {
      return this._id;
    }
  }, {
    key: "isLiked",
    value: function isLiked() {
      var _this = this;

      return this._likes.some(function (item) {
        return item._id === _this._userId;
      });
    }
  }, {
    key: "showLikes",
    value: function showLikes() {
      this._cardLikes.textContent = this._likes.length;

      if (this.isLiked()) {
        this._cardLike.classList.add('elements__favorite_selected');
      } else {
        this._cardLike.classList.remove('elements__favorite_selected');
      }
    }
  }, {
    key: "updateLikes",
    value: function updateLikes(likes) {
      this._likes = likes;
      this.showLikes();
    }
  }, {
    key: "_showDeleteIcon",
    value: function _showDeleteIcon() {
      if (this._owner._id === this._userId) {
        this._cardTrash.classList.add('elements__trash_visible');
      }
    }
  }, {
    key: "_getCardTemplate",
    value: function _getCardTemplate() {
      return this._template.cloneNode(true).querySelector('.elements__element');
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this2 = this;

      this._cardLike.addEventListener("click", function () {
        return _this2._likeHandler(_this2, _this2._id);
      });

      this._cardTrash.addEventListener("click", function () {
        return _this2._handleDeleteClick([_this2._id, _this2._cardElement]);
      });

      this._cardImage.addEventListener("click", function () {
        return _this2._handleCardClick(_this2._name, _this2._link);
      });
    }
  }, {
    key: "createCard",
    value: function createCard() {
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

      this._showDeleteIcon();

      this.showLikes();

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
/* harmony export */   "default": () => /* binding */ PopupWithImage
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
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
/* 7 */
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
  }

  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popupElement.classList.add('popup_open');

      document.addEventListener('keyup', this._handleEscapeClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popupElement.classList.remove('popup_open');

      document.removeEventListener('keyup', this._handleEscapeClose);
    }
  }, {
    key: "_handleEscapeClose",
    value: function _handleEscapeClose(e) {
      if (e.which == 27) {
        this.close();
      }
    }
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
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ PopupWithForm
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
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
      if (!this._popupElement.querySelector('.popup__input')) {
        return null;
      } else {
        return _toConsumableArray(this._popupElement.querySelectorAll('.popup__input')).map(function (input) {
          return input.value;
        });
      }
    }
  }, {
    key: "_submitEventHandler",
    value: function _submitEventHandler(e) {
      e.preventDefault();

      var submittedValue = this._getInputValues() || this._info;

      this._popupSubmit(submittedValue);

      this.close();
    } //modifies setEventListeners, adds click event listener 
    //to the close icon, while adding submit event handler 

  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      this._popupElement.addEventListener('submit', this._submitEventHandler);

      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
    } //modifies open method 

  }, {
    key: "open",
    value: function open(cardInfo) {
      _get(_getPrototypeOf(PopupWithForm.prototype), "open", this).call(this);

      this._info = cardInfo;
    } //modifies close method to reset form once popup is closed 

  }, {
    key: "close",
    value: function close() {
      this._formElement.reset();

      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
    }
  }]);

  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ UserInfo
/* harmony export */ });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var name = _ref.name,
        job = _ref.job,
        avatar = _ref.avatar;

    _classCallCheck(this, UserInfo);

    this._name = document.querySelector(name);
    this._job = document.querySelector(job);
    this._avatar = document.querySelector(avatar);
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return this.userInfo = [this._name.textContent, this._job.textContent, this._avatar.src];
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(name, job, avatar) {
      //this._userInfo = {nameSelector, jobSelector, avatar}; 
      //if(avatar){ 
      this._name.textContent = name;
      this._job.textContent = job;
      this._avatar.src = avatar; //} else { 
      //   this._nameSelector.textContent = nameSelector; 
      //    this._jobSelector.textContent = jobSelector; 
      // } 
    }
  }]);

  return UserInfo;
}();



/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Api
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var baseUrl = _ref.baseUrl,
        headers = _ref.headers;

    _classCallCheck(this, Api);

    //constructor body 
    this._baseUrl = baseUrl;
    this._headers = headers;
  } // GET specified URL-cards 


  _createClass(Api, [{
    key: "getInitialCards",
    value: function getInitialCards() {
      return fetch(this._baseUrl + '/cards/', {
        headers: this._headers
      }).then(function (res) {
        return res.ok ? res.json() : Promise.reject('Error' + res.statusText);
      }).catch(function (err) {
        return console.log(err);
      });
    } //GET specified URL -user-info 

  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return fetch(this._baseUrl + '/users/me/', {
        headers: this._headers
      }).then(function (res) {
        return res.ok ? res.json() : Promise.reject('Error' + res.statusText);
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "getAppInfo",
    value: function getAppInfo() {
      //gather all info together and render all at once 
      return Promise.all([this.getUserInfo(), this.getInitialCards()]);
    } //POST speicifed url -cards 

  }, {
    key: "addCard",
    value: function addCard(_ref2) {
      var name = _ref2.name,
          link = _ref2.link;
      return fetch(this._baseUrl + '/cards/', {
        headers: this._headers,
        method: "POST",
        body: JSON.stringify({
          name: name,
          link: link
        })
      }).then(function (res) {
        return res.ok ? res.json() : Promise.reject('Error' + res.statusText);
      }).catch(function (err) {
        return console.log(err);
      });
    } // //DELETE specified url =cardID 

  }, {
    key: "removeCard",
    value: function removeCard(cardID) {
      return fetch(this._baseUrl + '/cards/' + cardID, {
        headers: this._headers,
        method: "DELETE"
      }).then(function (res) {
        return res.ok ? res.json() : Promise.reject('Error' + res.statusText);
      }) //.then(res => res.remove(cardID)) 
      .catch(function (err) {
        return console.log(err);
      });
    } //PUT specified url cardID 
    //DELETE specified url cardID 

  }, {
    key: "addLike",
    value: function addLike(cardID) {
      return fetch(this._baseUrl + '/cards/likes/' + cardID, {
        headers: this._headers,
        method: "PUT"
      }).then(function (res) {
        return res.ok ? res.json() : Promise.reject('Error' + res.statusText);
      }) //.then(res => res.remove(cardID)) 
      .catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "removeLike",
    value: function removeLike(cardID) {
      return fetch(this._baseUrl + '/cards/likes/' + cardID, {
        headers: this._headers,
        method: "DELETE"
      }).then(function (res) {
        return res.ok ? res.json() : Promise.reject('Error' + res.statusText);
      }) //.then(res => res.remove(cardID)) 
      .catch(function (err) {
        return console.log(err);
      });
    } //PATCH user-info 

  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref3) {
      var name = _ref3.name,
          about = _ref3.about;
      return fetch(this._baseUrl + '/users/me/', {
        method: "PATCH",
        headers: {
          authorization: "a950b923-6d6c-4927-9948-6833c1950cc9",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          about: about
        })
      }).then(function (res) {
        return res.ok ? res.json() : Promise.reject('Error' + res.statusText);
      }).catch(function (err) {
        return console.log(err);
      });
    } //PATCH avatar 

  }, {
    key: "setUserAvatar",
    value: function setUserAvatar(avatar) {
      return fetch(this._baseUrl + '/users/me/avatar/', {
        headers: this._headers,
        method: "PATCH",
        body: JSON.stringify({
          avatar: avatar
        })
      }).then(function (res) {
        return res.ok ? res.json() : Promise.reject('Error' + res.statusText);
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }]);

  return Api;
}(); // const api = new Api({ 
//     baseUrl: "correct url given to me", 
//     headers: { 
//         authorization: "token given to me", 
//         "Content-Type": "application/json" 
//     } 
// }); 




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