import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import
 {
  initCards,
  selectorsSettings,
  popupInputName,
  popupInputJob,
  openingBtnPopupAddCard,
  openingBtnPopupProfile
} from '../utils/constants.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';

import 'index.css';

const userInfo = new UserInfo({
  nickSelector: '.profile__nickname',
  jobSelector: '.profile__profession'
});



const profilePopup = new PopupWithForm({
  popupSelector: '#profile',
  submitCallBack: (data) => {
    userInfo.setUserInfo(data);
  }
});

const profileValidator = new FormValidator(selectorsSettings, profilePopup.form);


profilePopup.setEventListeners();

const popupProfileHandler = () => {
  const userData = userInfo.getUserInfo();
  popupInputName.value = userData.name;
  popupInputJob.value = userData.job;

  profileValidator.toggleBtn();
  profileValidator.clearFormError();
  profilePopup.open();
}


const imgPopup = new PopupWithImage('#image');

function createCard(item) {
  const card = new Card( {
    data: item,
    handleCardClick: () => {
      imgPopup.setEventListeners();
      imgPopup.open(item.name, item.link);
    }
  }, '#card-template')

  return card.generateCard();
}

const defaultCardList = new Section({
  item: initCards,
  renderer: (item) => {
    defaultCardList.addItem(createCard(item));
  }
}, ".elements");

defaultCardList.rendererItems();


const addImgPopup = new PopupWithForm({
  popupSelector: '#add',
  submitCallBack: ({title, link}) => {
  const data = {
    name: title,
    link: link
  }

  defaultCardList.addItem(createCard(data));
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

openingBtnPopupProfile.addEventListener('click', popupProfileHandler);

openingBtnPopupAddCard.addEventListener('click', popupAddCardHandler);
