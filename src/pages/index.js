import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import
 {
  selectorsSettings,
  popupInputName,
  popupInputJob,
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

const api = new Api();

const cards = api.getInitialCard();
const profileData =  api.getUserInfo();



profileData.then((res) => {
   document.querySelector(profieNickSelector).textContent = res.name;
   document.querySelector('.profile__profession').textContent = res.about;
   document.querySelector('.profile__avatar').style.backgroundImage = `url('${res.avatar}')`;
  }).catch(err => alert(`Произошла СМЭРТ: ${err}`))

const userInfo = new UserInfo({
  nickSelector: '.profile__nickname',
  jobSelector: '.profile__profession'
});


const avatar = new Avatar('.profile__avatar');

const profilePopup = new PopupWithForm({
  popupSelector: '#profile',
  submitCallBack: (data) => {
    api.patchUserInfo(data);
    // userInfo.setUserInfo(data);
  }
});

const profileValidator = new FormValidator(selectorsSettings, profilePopup.form);
profilePopup.setEventListeners();

const avatarPopup = new PopupWithForm({
 popupSelector: '#avatar-update',
 submitCallBack: (data) => {
  avatar.setUrl(data);
 }
});

const avatarValidator = new FormValidator(selectorsSettings, avatarPopup.form);
avatarPopup.setEventListeners();

const deletePopup = new PopupWithConfirm('#delete-card');

deletePopup.setEventListeners();

const popupProfileHandler = () => {
  const userData = userInfo.getUserInfo();
  popupInputName.value = userData.name;
  popupInputJob.value = userData.job;


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
    }
  }, '#card-template', profileData);

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
}).catch(err => alert(`Произошла СМЭРТ: ${err}`))

const addImgPopup = new PopupWithForm({
  popupSelector: '#add',
  submitCallBack: ({title, link}) => {
  const data = {
    name: title,
    link: link
  }
  api.postNewCards(data);
  // defaultCardList.addItem(createCard(data, 'off'));
  }
});

addImgPopup.setEventListeners();

const addImageValidator = new FormValidator(selectorsSettings, addImgPopup.form);

const popupAddCardHandler = () => {
  addImageValidator.toggleBtn();
  addImageValidator.clearFormError();
  addImgPopup.open();
}

addImageValidator.enableValidation();
profileValidator.enableValidation();
avatarValidator.enableValidation();

openingBtnPopupProfile.addEventListener('click', popupProfileHandler);
openingBtnPopupAvatar.addEventListener('click', popupAvatarHandler);
openingBtnPopupAddCard.addEventListener('click', popupAddCardHandler);
