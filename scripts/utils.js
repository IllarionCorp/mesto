import { FormValidator } from "./FormValidator.js";
import { selectorsSettings, closeClickToOverlay, ECS_CODE } from "./index.js";

const openPopup = (element) => {
    const form = element.querySelector('form');
    if (form !== null) {
      const editFormValidator = new FormValidator(selectorsSettings, form);
      editFormValidator.enableValidation();
      editFormValidator.clearFormError();
    }
    element.classList.add('popup_opened');
    document.addEventListener('keydown', closeClickToEsc);
    document.addEventListener('click', closeClickToOverlay);
    
}

const closePopup = (element) => {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeClickToEsc);
}

const closeClickToEsc = (event) => {
  if (event.key === ECS_CODE) {
   const openedPopup = document.querySelector('.popup_opened');
   closePopup(openedPopup);
  }
}

export { openPopup, closePopup };