export default class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._form = formElement;
    }
    
    _showErrorMessage(inputElement, inputErrorClass) {
        const errorElement = this._form.querySelector("#" + inputElement.id + "-error");
        errorElement.textContent = inputErrorClass;
        errorElement.classList.add(this._errorClass);
        inputElement.classList.add(this._inputErrorClass);
    }
    
    _hideErrorMessage(inputElement) {
        const errorElement = this._form.querySelector("#" + inputElement.id + "-error");
        errorElement.textContent = "";
        errorElement.classList.remove(this._errorClass);
        inputElement.classList.remove(this._inputErrorClass);
    }

    _checkInputValidity(inputElement, inputErrorClass) {
        if(inputElement.validity.valid) {
            //hide error message
            this._hideErrorMessage(inputElement, inputErrorClass);
        } else {
            //show error message
            this._showErrorMessage(inputElement, inputErrorClass);
        }
    }

    _toggleButtonState(button, formElement) {
        const inputs = [...formElement.querySelectorAll(this._inputSelector)];
        const isValid = inputs.every(input => input.validity.valid);
        //const button = formElement.querySelector(this._submitButtonSelector);

        if(isValid) {
            button.classList.remove(this._inactiveButtonClass);
            button.disabled = false;
        } else {
            button.classList.add(this._inactiveButtonClass);
            button.disabled = true;
        }
    }

    _setEventListeners() {
        const inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
        const button = this._form.querySelector(this._submitButtonSelector);
        
        inputs.forEach(inputElement => {
            inputElement.addEventListener("input", () => {
                //check Input Validity
                this._checkInputValidity(inputElement, this._inputErrorClass);
                //toggle button state
                this._toggleButtonState(this._submitButtonSelector, inputElement);
                });
           });
        };
        
   enableValidation () {
    this._form.addEventListener('submit', (e) => {
       e.preventDefault();
       });
       
    this._setEventListeners();    
   };
};