const objectsForValidation = {
 formSelector: '.fields',
 inputSelector: '.fields__input',
 submitButtonSelector: '.fields__submit-button',
 inactiveButtonClass: 'fields__submit-button_disable',
 inputErrorClass: 'fields__input_type_error',
 errorClass: 'fields__input-error_active'
};

const showInputError = (formElement, inputElement, errorMessage) => {
 const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
 inputElement.classList.add(objectsForValidation.inputErrorClass);
 // errorElement.textContent = errorMessage;
 errorElement.classList.add(objectsForValidation.errorClass);
 console.log(1);
}

const hideInputError = (formElement, inputElement) => {
 const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
 inputElement.classList.remove(objectsForValidation.inputErrorClass);
 // errorElement.classList.remove(objectsForValidation.errorClass);
 errorElement.textContent = '';
}

const checkInputValidity = (formElement, inputElement) => {
 if (!inputElement.validity.valid) {
  showInputError(formElement, inputElement, inputElement.validityMessage);
 } else {
  hideInputError(formElement, inputElement);
 }

};

const setEvtListners = (formElement) => {
 const inputSelectorArr = Array.from(document.querySelectorAll(objectsForValidation.inputSelector))
 inputSelectorArr.forEach((inputElement) => {
  inputElement.addEventListener('input', function () {
   checkInputValidity(formElement, inputElement);
  });
 });
};

const enableValidation = (objectsForValidation) => {
 const formSelectorArr = Array.from(document.querySelectorAll(objectsForValidation.formSelector))
 formSelectorArr.forEach((formElement) => {
  formElement.addEventListener('submit', function (evt) {
   evt.preventDefault();
  });
  setEvtListners(formElement);
 });
};

enableValidation(objectsForValidation);
