function showErrorMessage(input, {errorClass, inputErrorClass, ...rest}) {
    const error = document.querySelector('#' + input.id + '-error');
    error.textContent = input.validationMessage;

    error.classList.add(errorClass);
    input.classList.add(inputErrorClass);
}

function hideErrorMessage(input, {errorClass, inputErrorClass, ...rest}) {
    const error = document.querySelector('#' + input.id + '-error');
    error.textContent = '';

    error.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);
}

function checkInputValidity(input, form, rest) {
    if(input.validity.valid) {
        //hide error message
        hideErrorMessage(input, form, rest)
    } else {
        //show error message
        showErrorMessage(input, form, rest)
    }
}

function toggleButtonState(inputs, button, {inactiveButtonClass, ...rest}) {
    const isValid = inputs.every((input) => input.validity.valid)

    if (isValid) {
        button.classList.remove(inactiveButtonClass);

    } else {
        button.classList.add(inactiveButtonClass);
    }
}


function enableValidation({formSelector, inputSelector, submitButtonSelector, ...rest}) {
    const forms = [...document.querySelectorAll(formSelector)];

    forms.forEach((form) => {
        form.addEventListener('submit', ((e) => {
            e.preventDefault()
        }))

        const inputs = [...form.querySelectorAll(inputSelector)];
        const button = form.querySelector(submitButtonSelector);

        inputs.forEach((input) => {
            input.addEventListener('input', () => {
                //check Input Validity
                checkInputValidity(input, form, rest);
                //toggle button state
                toggleButtonState(inputs, button, rest);
            });
       });
    });
}


// enabling validation by calling enableValidation()
// pass all the settings on call


//call enableValidation
enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__save",
    inactiveButtonClass: "popup__save_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
});