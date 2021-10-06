import { Card } from "../scripts/Card.js";
import { openPopup, closePopup } from "../utils/utils.js";
import { FormValidator } from "../components/FormValidator.js"
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
const cardTemplateSelector = '#card-template';

const initCards = [
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

const selectorsSettings = {
 formSelector: '.fields',
 inputSelector: '.fields__input',
 submitButtonSelector: '.fields__submit-button',
 inactiveButtonClass: 'fields__submit-button_disable',
 inputErrorClass: 'fields__input_type_error',
 errorClass: 'fields__input-error_active'
}

const initGenerateCards = (item, template) => {
 const card = new Card(item, template);
 const cardsElement = card.generateCard();

 return cardsElement;
}

initCards.forEach(item => {
 const cardsElement =  initGenerateCards(item, cardTemplateSelector)
 document.querySelector('.elements').append(cardsElement);
})

const createNewCard = (item, template) => {
 const cardsElement =  initGenerateCards(item, template)
 document.querySelector('.elements').prepend(cardsElement);
}

const closeClickToOverlay = (e) => {
  if (e.target.classList.contains('popup_opened') === true && e.target.classList.contains('popup__container') === false) {
    closePopup(e.target);
  }
}

const setDefaultProfieValues = () => {
 nickname.value = profileNickname.textContent;
 job.value = profileProfession.textContent;
}

const clearForm = (form) => {
 form.reset();
}
const profileFormValidator = new FormValidator(selectorsSettings, profilePopup.querySelector('form'));
const addImageFormValidator = new FormValidator(selectorsSettings, popupAddImage.querySelector('form'));

function formSubmitHandlerProfile (evt) {
    evt.preventDefault();
    profileNickname.textContent = nickname.value;
    profileProfession.textContent = job.value;
    closePopup(profilePopup);
}

function formSubmitHandlerAdd (evt) {
  evt.preventDefault();
  createNewCard({
    name: document.querySelector('#title').value,
    link: document.querySelector('#link').value
  }, cardTemplateSelector);
  closePopup(popupAddImage);
}

addButton.addEventListener('click',function () {
 clearForm(popupAddImage.querySelector('form'));
 addImageFormValidator.toggleBtn();
 openPopup(popupAddImage);
});

profilePopup.addEventListener('click', closeClickToOverlay);
popupAddImage.addEventListener('click', closeClickToOverlay);
imgPopup.addEventListener('click', closeClickToOverlay);

editButton.addEventListener('click',function () {
 setDefaultProfieValues();
 profileFormValidator.clearFormError();
 profileFormValidator.toggleBtn();
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

popupAddImage.addEventListener('submit',formSubmitHandlerAdd);

addImageFormValidator.enableValidation();
profileFormValidator.enableValidation();

export { selectorsSettings, closeClickToOverlay, ECS_CODE };
