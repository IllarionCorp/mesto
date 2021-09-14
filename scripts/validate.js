enableValidation({
 formSelector: '.fields',
 inputSelector: '.fields__input',
 submitButtonSelector: '.fields__submit-button',
 inactiveButtonClass: 'fields__submit-button_disable',
 inputErrorClass: 'fields__input_type_error',
 errorClass: 'fields__input-error'
});


// const showInputError = (formElement, inputElement, errorMessage) => {
//  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//  inputElement.classList.add('fields__input_type_error');
//  errorElement.textContent = errorMessage;
//  errorElement.classList.add('fields__input-error');
// }

const enableValidation = (enableValidation) => {
 // const fieldsList= Array.from(document.querySelectorAll(enableValidation.formSelector));
 console.log(enableValidation.formSelector);
}

enableValidation(enableValidation);


//объявляем фукнцию валидации добавляем ей объекты, которые она обрабатывает
// const enableValidation = (objectsOfValidation) => {
// const formList = Array.from(objectsOfValidation);
// //каждой форме добавляем слушатель
// formList.forEach(setEventListeners);
// }


// //показ ошибки
// const showInputError = (formSelector, inputSelector, inputErrorClass, errorClass) => {
// inputErrorClass = formSelector.querySelector(`.${inputSelector.id}-error`);
// inputSelector.classList.add('name-input-error');
// inputErrorClass.textContent = errorClass;
// inputErrorClass.classList.add('job-input-error');
// };

// // скрытие ошибки
// const hideInputError = (formSelector, inputSelector) => {
// inputErrorClass = formSelector.querySelector(`.${inputSelector.id}-error`);
// inputSelector.classList.remove('name-input-error');
// inputErrorClass.classList.remove('job-input-error');
// inputErrorClass.textContent = '';
// };

// //функция проверки на валидность
// const isValid = (formSelector, inputSelector, errorClass) => {
// if (!inputSelector.validity.valid) {
//  showInputError(formSelector, inputSelector, inputSelector.validationMessage, errorClass);
// } else {
//  hideInputError(formSelector, inputSelector, errorClass);
// }
// };
// // описываем слушатели
// function setEventListeners(formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, errorClass) {
// const inputsAll = Array.from(document.querySelectorAll(inputSelector))
// const buttonSubmit = formSelector.querySelector(submitButtonSelector)
// inputsAll.forEach(input =>{
//  input.addEventListener('input',() =>{
//  isValid(formSelector, inputSelector, errorClass)

// })
// })
// }

// enableValidation(objectsOfValidation);
