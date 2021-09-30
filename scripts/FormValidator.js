class FormValidator {
 constructor(data, form){
  this._form = form;
  this._inputSelector = data.inputSelector;
  this._submitButtonSelector = data.submitButtonSelector;
  this._inactiveButtonClass = data.inactiveButtonClass;
  this._inputErrorClass = data.inputErrorClass;
  this._errorClass = data.errorClass;
  this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
  this._buttonElement = this._form.querySelector(this._submitButtonSelector);
 }

 _showInputError(inputElement) {
  const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(this._inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(this._errorClass);
 }

 _hideInputError(inputElement) {
  const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorClass);
  errorElement.textContent = '';
 }

 _checkInputValidity(inputElement) {
  if (!inputElement.validity.valid) {
   this._showInputError(inputElement);
  } else {
   this._hideInputError(inputElement);
  }
 }

 _hasInvalidInput() {
  return this._inputList.some(inputElement => {
   return !inputElement.validity.valid;
  });
 }

 _hasNotInputValues() {
  return this._inputList.every(inputElement => {
   return inputElement.validity.length === 0;
  });
 }

 _disableBtn() {
  this._buttonElement.disabled = true;
  this._buttonElement.classList.add(this._inactiveButtonClass);
 }

 _enableBtn() {
  this._buttonElement.disabled = false;
  this._buttonElement.classList.remove(this._inactiveButtonClass);
 }

 toggleBtn() {
    if (this._hasInvalidInput() || this._hasNotInputValues()) {
        this._disableBtn();
    } else {
        this._enableBtn();
    }
 }

 _setEvtListners() {
  this._form.addEventListener('submit', function (evt) {
   evt.preventDefault();
  });
  this.toggleBtn();
  this._inputList.forEach((inputElement) => {
   inputElement.addEventListener('input',() => {
    this._checkInputValidity(inputElement);
    this.toggleBtn();
   });
  });
 }

 clearFormError() {
  this._inputList.forEach((inputElement) => {
    this._hideInputError(inputElement);
  });
 }

 enableValidation() {
   this._setEvtListners();
  }
}

export { FormValidator };


