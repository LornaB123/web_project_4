function showErrorMessage(input, form, rest) {
    const error = document.querySelector

}

function checkInputValidity() {
    if(input.validity.valid) {
        //hide error message
    } else {
        //show error message
    }


}


function enableValidation(formSelector, inputSelector, submitButtonSelector, ...rest){
    const forms = [...document.querySelectorAll(settings.formSelector)];
    forms.forEach(form) => {
        form.addEventListener('submit', ((e) => {
            e.preventDefault()
        }))
        const inputs = [...document.querySelectorAll(settings.inputSelector)];
        const button = form.querySelector(settings.submitButtonSelector);

        inputs.forEach(input) => {
            input.addEventListener('input', () => {
                //check Input Validity
                checkInputValidity(input, form, rest)
                //toggle button state

            })
        }
    }

}

// enabling validation by calling enableValidation()
// pass all the settings on call

enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
  }); 