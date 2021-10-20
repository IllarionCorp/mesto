export const initCards = [
 {
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
},
{
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
},
{
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}
];

export const selectorsSettings = {
 formSelector: '.fields',
 inputSelector: '.fields__input',
 submitButtonSelector: '.fields__submit-button',
 inactiveButtonClass: 'fields__submit-button_disable',
 inputErrorClass: 'fields__input_type_error',
 errorClass: 'fields__input-error_active'
}

export const popupInputName = document.querySelector('#name');
export const popupInputJob = document.querySelector('#job');
export const openingBtnPopupProfile = document.querySelector('.profile__button-edite');
export const openingBtnPopupAddCard = document.querySelector('.profile__button-add');
export const openingBtnPopupAvatar = document.querySelector('.profile__button-edite-avatar');
