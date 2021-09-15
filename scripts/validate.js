// const showInputError = (formElement, inputElement, errorMessage) => {

//  inputElement.classList.add(objectsForValidation.inputErrorClass);
//  // errorElement.textContent = errorMessage;
//  console.log(errorElement);
//  errorElement.classList.add(objectsForValidation.errorClass)
// }

// const hideInputError = (formElement, inputElement) => {
//  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//  inputElement.classList.remove(objectsForValidation.inputErrorClass);
//  // errorElement.classList.remove(objectsForValidation.errorClass);
//  // errorElement.textContent = '';

// }

// const checkInputValidity = (formElement, inputElement) => {
//  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//  if (!inputElement.validity.valid) {
//   showInputError(formElement, inputElement, errorElement, inputErrorClass, errorClass);
//  } else {
//   hideInputError(formElement, inputElement, errorElement, inputErrorClass, errorClass);
//  }
// };

const selectorInvalidInput = (inputList) => {
 return inputList.some(inputElement => {
  return !inputElement.validity.valid;
 });
}

const disableBtn = (buttonElement, inactiveButtonClass) => {
 buttonElement.classList.add(inactiveButtonClass);
 buttonElement.removeEventListener('submit', () => {
  formSubmitHandlerProfile();
  formSubmitHandlerAdd();
 })
}

const enableBtn = (buttonElement, inactiveButtonClass) => {
 buttonElement.classList.remove(inactiveButtonClass);
}

const toggleBtn = (formElement, inputList, submitButtonSelector, inactiveButtonClass) => {
 const buttonElement = formElement.querySelector(submitButtonSelector);
    if (selectorInvalidInput(inputList)) {
        disableBtn(buttonElement, inactiveButtonClass);
    } else {
        enableBtn(buttonElement, inactiveButtonClass);

    }
}

const setEvtListners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {
 formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
 });
 const inputSelectorArr = Array.from(document.querySelectorAll(inputSelector))
 inputSelectorArr.forEach((inputElement) => {
  inputElement.addEventListener('input', function () {
   // checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
   toggleBtn(formElement, inputSelectorArr, submitButtonSelector, inactiveButtonClass);
  });
 });
};

const enableValidation = (obj) => {
 const formSelectorArr = Array.from(document.querySelectorAll(obj.formSelector))
 formSelectorArr.forEach((formElement) => {
 setEvtListners(formElement,
  obj.inputSelector,
  obj.submitButtonSelector,
  obj.inactiveButtonClass,
  obj.inputErrorClass,
  obj.errorClass);
 });
};

enableValidation({
 formSelector: '.fields',
 inputSelector: '.fields__input',
 submitButtonSelector: '.fields__submit-button',
 inactiveButtonClass: 'fields__submit-button_disable',
 inputErrorClass: 'fields__input_type_error',
 errorClass: 'fields__input-error_active'
});
