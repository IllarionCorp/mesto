import { newCard } from "./Card.js";
import { FormValidator } from "./FormValidator.js"
export {openPopup};
const nickname = document.querySelector('#name')
const job = document.querySelector('#job')
const profileNickname = document.querySelector('.profile__nickname')
const profileProfession = document.querySelector('.profile__profession')
const profilePopup = document.querySelector('#profile');
const editButton = document.querySelector('.profile__button-edite')
const closeIconProfile = document.querySelector('#profile-closed');
const popupAddImage = document.querySelector('#add')
const addButton = document.querySelector('.profile__button-add')
const closeIconAdd = document.querySelector('#add-closed')
const imgPopup = document.querySelector('#image')
const closeImgBtn = document.querySelector('#image-closed')
const ECS_CODE = 'Escape';

const selectorsSettings = {
 formSelector: '.fields',
 inputSelector: '.fields__input',
 submitButtonSelector: '.fields__submit-button',
 inactiveButtonClass: 'fields__submit-button_disable',
 inputErrorClass: 'fields__input_type_error',
 errorClass: 'fields__input-error_active'
}

const setDefaultProfieValues = () => {
  nickname.value = profileNickname.textContent;
  job.value = profileProfession.textContent;
}

 const openPopup = (element) => {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', closeClickToEsc);
  document.addEventListener('click', closeClickToOverlay);
}

const closePopup = (element) => {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeClickToEsc);
  document.removeEventListener('click', closeClickToOverlay);
}

const clearForm = (e) => {
 e.reset();
 e.querySelectorAll('span').forEach(evt => {
  evt.textContent = " ";
 });
 e.querySelectorAll('input').forEach(evt => {
  evt.classList.remove('fields__input_type_error');
 })
}

function formSubmitHandlerProfile (evt) {
    evt.preventDefault();
    profileNickname.textContent = nickname.value;
    profileProfession.textContent = job.value;
    closePopup(profilePopup);
}

function formSubmitHandlerAdd (evt) {
  evt.preventDefault();
  newCard({
    name: document.querySelector('#title').value,
    link: document.querySelector('#link').value
  });
  closePopup(popupAddImage);
  clearForm(evt.target);
}

addButton.addEventListener('click',function () {
 const editFormValidator = new FormValidator(selectorsSettings, popupAddImage); 
 editFormValidator.enableValidation();
 clearForm(popupAddImage.querySelector('form'));
 openPopup(popupAddImage);
});

editButton.addEventListener('click',function () {
 setDefaultProfieValues();
 const editFormValidator = new FormValidator(selectorsSettings, profilePopup);
 editFormValidator.enableValidation();
 openPopup(profilePopup);
});

closeIconProfile.addEventListener('click', function ()  {
 closePopup(profilePopup);
});

profilePopup.addEventListener('submit', formSubmitHandlerProfile);

closeIconAdd.addEventListener('click', function (){
 closePopup(popupAddImage);
});

closeImgBtn.addEventListener('click', function(){
closePopup(imgPopup);
});

popupAddImage.addEventListener('submit', formSubmitHandlerAdd);

const closeClickToEsc = (event) => {
 if (event.key === ECS_CODE) {
  const openedPopup = document.querySelector('.popup_opened');
  closePopup(openedPopup);
 }
}


const closeClickToOverlay = (e) => {
  if (e.target.classList.contains('popup_opened') === true && e.target.classList.contains('popup__container') === false) {
    closePopup(e.target);
  }
}
