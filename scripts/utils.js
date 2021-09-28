import { ECS_CODE } from "./index.js";

const openPopup = (element) => {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', closeClickToEsc);
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