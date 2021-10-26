import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import
 {
  selectorsSettings,
  popupInputName,
  popupInputAbout,
  openingBtnPopupAddCard,
  openingBtnPopupProfile,
  openingBtnPopupAvatar,
  profieNickSelector
} from '../utils/constants.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import Avatar from '../components/Avatar.js';

import './index.css';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import Api from '../components/Api.js';

const api = new Api({
 url: "https://mesto.nomoreparties.co/v1/cohort-29",
 headers: {
  Authorization: "3e854f17-4e78-4803-83c1-6cbecd942932",
  'Content-Type': 'application/json'
 }
});

const cards = api.getInitialCard();
const profileData =  api.getUserInfo();

let id;


profileData.then((res) => {
   document.querySelector(profieNickSelector).textContent = res.name;
   document.querySelector('.profile__profession').textContent = res.about;
   document.querySelector('.profile__avatar').style.backgroundImage = `url('${res.avatar}')`;
   id = res._id;
  }).catch(err => alert(`Произошла СМЭРТ: ${err}`))

const userInfo = new UserInfo({
  nickSelector: '.profile__nickname',
  aboutSelector: '.profile__profession'
});


const avatar = new Avatar('.profile__avatar');

const profilePopup = new PopupWithForm({
  popupSelector: '#profile',
  submitCallBack: (data) => {
    userInfo.setUserInfo(data);
    api.patchUserInfo(data);
  }
});

const profileValidator = new FormValidator(selectorsSettings, profilePopup.form);
profilePopup.setEventListeners();

const avatarPopup = new PopupWithForm({
 popupSelector: '#avatar-update',
 submitCallBack: (data) => {
  console.log(data);
  avatar.setUrl(data);
  api.patchAvatar(data);
 }
});

const avatarValidator = new FormValidator(selectorsSettings, avatarPopup.form);
avatarPopup.setEventListeners();

const deletePopup = new PopupWithConfirm('#delete-card', api);



const popupProfileHandler = () => {
  const userData = userInfo.getUserInfo();
  popupInputName.value = userData.name;
  popupInputAbout.value = userData.about;


  profileValidator.toggleBtn();
  profileValidator.clearFormError();
  profilePopup.open();
}

const popupAvatarHandler = () => {
 avatarValidator.toggleBtn();
 avatarValidator.clearFormError();
 avatarPopup.open();
}


const imgPopup = new PopupWithImage('#image');
imgPopup.setEventListeners();

function createCard(item) {
  const card = new Card( {
    data: item,
    handleCardClick: () => {
      imgPopup.open(item.name, item.link, item.name);
    },

    handleLikeClick: (card) => {
     card.querySelector('.element__like').classList.toggle('element__like_active');
    },

    handleTrashClick: (card) => {
     document.querySelector('#delete-card').classList.add('popup_opened');
     deletePopup.getCardId(card);
    }
  }, '#card-template', id);

  return card.generateCard();
}

 cards.then(data => {
  const defaultCardsList = new Section({
   item: data,
   renderer: (item) => {
    defaultCardsList.addItem(createCard(item));
   }
  }, ".elements")
  defaultCardsList.rendererItems();
}).catch(err => alert(`Произошел труньк: ${err}`))




const addImgPopup = new PopupWithForm({
  popupSelector: '#add',
  submitCallBack: ({title, link}) => {
  const data = {
    name: title,
    link: link
  }
 const newCard = api.postNewCards(data);

 newCard
 .then(data => {
  const card = new Section({
   item: data,
   renderer:() => card.addItem(createCard(data))
  }, '.elements');
  card.rendererItems();
 }).catch(err => `СМЭРТ: ${err}`)

 }
});

addImgPopup.setEventListeners();

const addImageValidator = new FormValidator(selectorsSettings, addImgPopup.form);

const popupAddCardHandler = () => {
  addImageValidator.toggleBtn();
  addImageValidator.clearFormError();
  addImgPopup.open();
}
deletePopup.setEventListeners(cards);
addImageValidator.enableValidation();
profileValidator.enableValidation();
avatarValidator.enableValidation();

openingBtnPopupProfile.addEventListener('click', popupProfileHandler);
openingBtnPopupAvatar.addEventListener('click', popupAvatarHandler);
openingBtnPopupAddCard.addEventListener('click', popupAddCardHandler);
