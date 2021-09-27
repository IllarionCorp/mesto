class FormValidator {
 constructor(data, form){
  this._form = form;
  this._inputSelector = data.inputSelector;
  this._submitButtonSelector = data.submitButtonSelector;
  this._inactiveButtonClass = data.inactiveButtonClass;
  this._inputErrorClass = data.inputErrorClass;
  this._errorClass = data.errorClass;
 }

 _showInputError(inputElement, errorElement) {
  inputElement.classList.add(this._inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(this._errorClass);
 }

 _hideInputError(inputElement, errorElement) {
  inputElement.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorClass);
  errorElement.textContent = '';
 }

 _checkInputValidity(inputElement) {
  const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
  if (!inputElement.validity.valid) {
   this._showInputError(inputElement, errorElement);
  } else {
   this._hideInputError(inputElement, errorElement);
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

 _disableBtn(buttonElement) {
  buttonElement.disabled = true;
  buttonElement.classList.add(this._inactiveButtonClass);
 }

 _enableBtn(buttonElement) {
  buttonElement.disabled = false;
  buttonElement.classList.remove(this._inactiveButtonClass);
 }

 _toggleBtn(inputSelectorArr) {
  const buttonElement = this._form.querySelector(this._submitButtonSelector);
    if (this._hasInvalidInput(inputSelectorArr) || this._hasNotInputValues(inputSelectorArr)) {
        this._disableBtn(buttonElement);
    } else {
        this._enableBtn(buttonElement);

    }
 }

 _setEvtListners() {
  this._form.addEventListener('submit', function (evt) {
   evt.preventDefault();
  });
  const inputSelectorArr = Array.from(this._form.querySelectorAll(this._inputSelector))
  inputSelectorArr.forEach((inputElement) => {
   this._toggleBtn(inputSelectorArr);
   inputElement.addEventListener('input',() => {
    this._checkInputValidity(inputElement);
    this._toggleBtn(inputSelectorArr);
   });
  });
 }

 clearFormError() {
  this._form.querySelectorAll('span').forEach(evt => {
    evt.textContent = " ";
   });
   this._form.querySelectorAll('input').forEach(evt => {
    evt.classList.remove(this._inputErrorClass);
   })
 }

 enableValidation() {
   this._setEvtListners();
  }

}

export { FormValidator };


