// //Function to show error messages when validation criteria is not met
// function showErrorMessage(input, {errorClass, inputErrorClass}) {
//     const error = document.querySelector('#' + input.id + '-error');
//     error.textContent = input.validationMessage;

//     error.classList.add(errorClass);
//     input.classList.add(inputErrorClass);
// }

// //Function to hide the error messages when validation criteria is met
// function hideErrorMessage(input, {errorClass, inputErrorClass}) {
//     const error = document.querySelector('#' + input.id + '-error');
//     error.textContent = '';

//     error.classList.remove(errorClass);
//     input.classList.remove(inputErrorClass);
// }

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

// //Function to change state of Save/Create buttons on form
// function toggleButtonState(inputs, button, inactiveButtonClass = "popup__save_disabled") {
//     const isValid = inputs.every(input => input.validity.valid);

//     if (isValid) {
//         button.classList.remove(inactiveButtonClass);
//         button.disabled = false;
//     } else {
//         button.classList.add(inactiveButtonClass);
//         button.disabled = true;
//     }
// }

// //Function to enable validation of each forms input fields
// function enableValidation({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, ...rest}) {
//     const forms = [...document.querySelectorAll(formSelector)];

//     forms.forEach((form) => {
//         form.addEventListener('submit', ((e) => {
//             e.preventDefault()
//         }));
//         const inputs = [...form.querySelectorAll(inputSelector)];
//         const button = form.querySelector(submitButtonSelector);
//         inputs.forEach((input) => {
//             input.addEventListener('input', () => {
//                 //check Input Validity
//                 checkInputValidity(input, rest);
//                 //toggle button state
//                 toggleButtonState(inputs, button, inactiveButtonClass);
//             });
//        });
//     });
// }


// // enabling validation by calling enableValidation()
// // pass all the settings on call
// enableValidation({
//     formSelector: ".popup__form",
//     inputSelector: ".popup__input",
//     submitButtonSelector: ".popup__save",
//     inactiveButtonClass: "popup__save_disabled",
//     inputErrorClass: "popup__input_type_error",
//     errorClass: "popup__error_visible"
// });