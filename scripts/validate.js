const showInputError = (inputElement,errorElement, inputErrorClass, errorClass) => {
 inputElement.classList.add(inputErrorClass);
 errorElement.textContent = inputElement.validationMessage;
 errorElement.classList.add(errorClass)
}

const hideInputError = (inputElement, errorElement, inputErrorClass, errorClass) => {
 inputElement.classList.remove(inputErrorClass);
 errorElement.classList.remove(errorClass);
 errorElement.textContent = '';
}

const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
 const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
 if (!inputElement.validity.valid) {
  showInputError(inputElement, errorElement, inputErrorClass, errorClass);
 } else {
  hideInputError(inputElement, errorElement, inputErrorClass, errorClass);
 }
};



const hasInvalidInput = (inputSelectorArr) => {
 return inputSelectorArr.some(inputElement => {
  return !inputElement.validity.valid;
 });
}

const hasNotInputValues = (inputSelectorArr) => {
 return inputSelectorArr.every(inputElement => {
  return inputElement.validity.length === 0;
 });
};


const disableBtn = (buttonElement, inactiveButtonClass) => {
 buttonElement.disabled = true;
 buttonElement.classList.add(inactiveButtonClass);
}

const enableBtn = (buttonElement, inactiveButtonClass) => {
 buttonElement.disabled = false;
 buttonElement.classList.remove(inactiveButtonClass);
}

const toggleBtn = (formElement, inputSelectorArr, submitButtonSelector, inactiveButtonClass) => {
 const buttonElement = formElement.querySelector(submitButtonSelector);
    if (hasInvalidInput(inputSelectorArr)) {
        removeListners(formElement);
        disableBtn(buttonElement, inactiveButtonClass);
    } else {
        enableBtn(buttonElement, inactiveButtonClass);

    }
}

const setEvtListners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {
 formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
 });
 const inputSelectorArr = Array.from(formElement.querySelectorAll(inputSelector))
 inputSelectorArr.forEach((inputElement) => {
  inputElement.addEventListener('input', function () {
   checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
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
