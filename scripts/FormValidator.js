class FormValidator {
 constructor(data, form){
  this._formSelector = data.formSelector;
  this._inputSelector = data.inputSelector;
  this._submitButtonSelector = data.submitButtonSelector;
  this._inactiveButtonClass = data.inactiveButtonClass;
  this._inputErrorClass = data.inputErrorClass;
  this._errorClass = data.errorClass;
 }

 _showInputError(inputElement,errorElement, inputErrorClass, errorClass) {
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorClass);
 }

 _hideInputError(inputElement, errorElement, inputErrorClass, errorClass) {
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
 }

 _checkInputValidity(formElement, inputElement, inputErrorClass, errorClass) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  if (!inputElement.validity.valid) {
   this._showInputError(inputElement, errorElement, inputErrorClass, errorClass);
  } else {
   this._hideInputError(inputElement, errorElement, inputErrorClass, errorClass);
  }
 }

 _hasInvalidInput(inputSelectorArr) {
  return inputSelectorArr.some(inputElement => {
   return !inputElement.validity.valid;
  });
 }

 _hasNotInputValues(inputSelectorArr) {
  return inputSelectorArr.every(inputElement => {
   return inputElement.validity.length === 0;
  });
 }

 _disableBtn(buttonElement, inactiveButtonClass) {
  buttonElement.disabled = true;
  buttonElement.classList.add(inactiveButtonClass);
 }

 _enableBtn(buttonElement, inactiveButtonClass) {
  buttonElement.disabled = false;
  buttonElement.classList.remove(inactiveButtonClass);
 }

 _toggleBtn(formElement, inputSelectorArr, submitButtonSelector, inactiveButtonClass) {
  const buttonElement = formElement.querySelector(submitButtonSelector);
    if (this._hasInvalidInput(inputSelectorArr)) {
        this._disableBtn(buttonElement, inactiveButtonClass);
    } else {
        this._enableBtn(buttonElement, inactiveButtonClass);

    }
 }

 _setEvtListners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) {
  formElement.addEventListener('submit', function (evt) {
   evt.preventDefault();
  });
  const inputSelectorArr = Array.from(formElement.querySelectorAll(inputSelector))
  inputSelectorArr.forEach((inputElement) => {
   inputElement.addEventListener('input', function () {
    this._checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
    this._toggleBtn(formElement, inputSelectorArr, submitButtonSelector, inactiveButtonClass);
   });
  });
 }

 enableValidation() {
  const formSelectorArr = Array.from(document.querySelectorAll(this._formSelector));
  formSelectorArr.forEach((formElement) => {
   this._setEvtListners(formElement,
    this._inputSelector,
    this._submitButtonSelector,
    this._inactiveButtonClass,
    this._inputErrorClass,
    this._errorClass);
   });
 }
}



