class FormValidator {
    constructor (settings, formElement){
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;

        this._form = formElement;
    }
    
    _showErrorMessage(inputElement, errorMessage){
        const errorElement = this._form.querySelector('#' + inputElement.id + '-error');
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    }

    _hideErrorMessage(inputElement){
        const errorElement = this._form.querySelector('#' + input.id + '-error');
        errorElement.textContent = '';
    
        errorElement.classList.remove(this._errorClass);
        inputElement.classList.remove(this._inputErrorClass);
    }

    _checkInputValidity(inputElement){
        if(inputElement.validity.valid) {
            //hide error message
            hideErrorMessage();
        } else {
            //show error message
            showErrorMessage();
        }
    }

    _toggleButtonState(inputs, button, inactiveButtonClass = "popup__save_disabled"){
        const isValid = inputs.every(input => input.validity.valid);

        if (isValid) {
            button.classList.remove(inactiveButtonClass);
            button.disabled = false;
        } else {
            button.classList.add(inactiveButtonClass);
            button.disabled = true;
        }
    }

    _setEventListeners () {
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
    }

    enableValidation(){
           this._form.addEventListener('submit', (e) => {
                e.preventDefault()
            });
            this._setEventListeners();    
    }
}


export default FormValidator;
// {
//     formSelector: ".popup__form",
//     inputSelector: ".popup__input",
//     submitButtonSelector: ".popup__save",
//     inactiveButtonClass: "popup__save_disabled",
//     inputErrorClass: "popup__input_type_error",
//     errorClass: "popup__error_visible"
// }