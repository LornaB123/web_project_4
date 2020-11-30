export default class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._form = formElement;
    }
    
    _showErrorMessage(inputElement, errorMessage) {
        const errorElement = this._form.querySelector("#" + inputElement.id + "-error");
        errorElement.textContent = errorMessage;
        errorElement.classList.add(errorClass);
        inputElement.classList.add(inputErrorClass);
    }
    
    _hideErrorMessage(inputElement) {
        const errorElement = this._form.querySelector("#" + input.id + "-error");
        errorElement.textContent = "";
        errorElement.classList.remove(this._errorClass);
        inputElement.classList.remove(this._inputErrorClass);
    }

    _checkInputValidity(inputElement) {
        if(inputElement.validity.valid) {
            //hide error message
            hideErrorMessage();
        } else {
            //show error message
            showErrorMessage();
        }
    }

    _toggleButtonState(button) {
        const isValid = inputs.every(input => input.validity.valid);

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
        
        inputs.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                 //check Input Validity
                 this._checkInputValidity();
                //toggle button state
                this._toggleButtonState();
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