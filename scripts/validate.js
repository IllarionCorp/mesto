enableValidation({
 formSelector: '.fields',
 inputSelector: '.fields__input',
 submitButtonSelector: '.fields__submit-button',
 inactiveButtonClass: 'fields__submit-button_disable',
 inputErrorClass: 'popup__input_type_error',
 errorClass: 'popup__error_visible'
});

//объявляем фукнцию валидации добавляем ей объекты, которые она обрабатывает
const enableValidation = (objectsOfValidation) => {
const formList = Array.from(objectsOfValidation);
//каждой форме добавляем слушатель
formList.forEach(setEventListeners);
}


//показ ошибки
const showInputError = (formSelector, inputSelector, inputErrorClass, errorClass) => {
inputErrorClass = formSelector.querySelector(`.${inputSelector.id}-error`);
inputSelector.classList.add('name-input-error');
inputErrorClass.textContent = errorClass;
inputErrorClass.classList.add('job-input-error');
};

// скрытие ошибки
const hideInputError = (formSelector, inputSelector) => {
inputErrorClass = formSelector.querySelector(`.${inputSelector.id}-error`);
inputSelector.classList.remove('name-input-error');
inputErrorClass.classList.remove('job-input-error');
inputErrorClass.textContent = '';
};

//функция проверки на валидность
const isValid = (formSelector, inputSelector, errorClass) => {
if (!inputSelector.validity.valid) {
 showInputError(formSelector, inputSelector, inputSelector.validationMessage, errorClass);
} else {
 hideInputError(formSelector, inputSelector, errorClass);
}
};
// описываем слушатели
function setEventListeners(formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, errorClass) {
const inputsAll = Array.from(document.querySelectorAll(inputSelector))
const buttonSubmit = formSelector.querySelector(submitButtonSelector)
inputsAll.forEach(input =>{
 input.addEventListener('input',() =>{
 isValid(formSelector, inputSelector, errorClass)

})
})
}

enableValidation(objectsOfValidation);
