export default class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._form = formElement;
        this._buttonElement = this._form.querySelector(this._submitButtonSelector);
        this._inputs = [...this._form.querySelectorAll(this._inputSelector)];
    }


    //Function to show error messages when validation criteria is not met
    _showErrorMessage(inputElement) {
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

    //Function to check the input validity according to requirements
    _checkInputValidity(inputElement, inputErrorClass) {
        if(inputElement.validity.valid) {
            //hide error message
            this._hideErrorMessage(inputElement, inputErrorClass);
        } else {
            //show error message
            this._showErrorMessage(inputElement, inputErrorClass);
        }
    }

    //Function to change state of Save/Create buttons on form
    _toggleButtonState(formElement, inputSelector) {
        //const inputs = [...formElement.querySelectorAll(inputSelector)];
        const isValid = this._inputs.every(input => input.validity.valid);
        //const buttonElement = this._form.querySelector(this._submitButtonSelector);
        if(isValid) {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.disabled = false;
        } else {
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.disabled = true;
        }
    }

    //method to disable create button 
    disableButton() {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.disabled = true;
    }

  //event listeners set for card arrays
    _setEventListeners() {
        this._inputs.forEach(inputElement => {
            inputElement.addEventListener("input", () => {
                //check Input Validity
                this._checkInputValidity(inputElement, this._inputErrorClass);
                //toggle button state
                this._toggleButtonState(this._form, this._inputSelector);
                });
           });
        };
    
    hideErrors(){
        this._inputs.forEach(inputElement => {
        this._hideErrorMessage(inputElement);
        })
    }     

  //enable validation of form submit buttons
   enableValidation () {
    this._form.addEventListener('submit', (e) => {
       e.preventDefault();
       });
       
    this._setEventListeners();    
   };
};