export default class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._form = formElement;
    }


    // //Function to show error messages when validation criteria is not met
    _showErrorMessage(inputElement, errorClass, inputErrorClass) {
        const errorElement = this._form.querySelector("#" + inputElement.id + "-error");

        errorElement.textContent = inputElement.validationMessage;

        errorElement.classList.add(this._errorClass);
        inputElement.classList.add(this._inputErrorClass);
    }

    //Function to hide the error messages when validation criteria is met
    _hideErrorMessage(inputElement) {
        const errorElement = this._form.querySelector("#" + inputElement.id + "-error");

        errorElement.textContent = "";
        errorElement.classList.remove(this._errorClass);
        inputElement.classList.remove(this._inputErrorClass);
    }

    // //Function to check the input validity according to requirements
// function checkInputValidity(input, rest) {
//     if(input.validity.valid) {
//         //hide error message
//         hideErrorMessage(input, rest)
//     } else {
//         //show error message
//         showErrorMessage(input, rest)
//     }
// }

    _checkInputValidity(inputElement, inputErrorClass) {
        if(inputElement.validity.valid) {
            //hide error message
            this._hideErrorMessage(inputElement, inputErrorClass);
        } else {
            //show error message
            this._showErrorMessage(inputElement, inputErrorClass);
        }
    }

    _toggleButtonState(formElement, inputSelector) {
        const inputs = [...formElement.querySelectorAll(inputSelector)];
        const isValid = inputs.every(input => input.validity.valid);
        const buttonElement = this._form.querySelector(this._submitButtonSelector);
        const inactiveButton = this._form.querySelector(this._inactiveButtonClass);

        if(isValid) {
            buttonElement.classList.remove(inactiveButton);
            buttonElement.disabled = false;
        } else {
            buttonElement.classList.add(inactiveButton);
            buttonElement.disabled = true;
        }
    }

    _setEventListeners() {
        const inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
       //const buttonElement = this._form.querySelector(this._submitButtonSelector);
        
        inputs.forEach(inputElement => {
            inputElement.addEventListener("input", () => {
                //check Input Validity
                this._checkInputValidity(inputElement, this._inputErrorClass);
                //toggle button state
                this._toggleButtonState(this._form, this._inputSelector);
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