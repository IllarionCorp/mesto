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
  addSubmitBtn,
  profileSubmitBtn
} from '../utils/constants.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';


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

api.getAllInfo()
  .then(([resCard, resProfile]) => {
    userInfo.setUserInfo(resProfile);
    userInfo.setUserAvatar(resProfile);
    id = resProfile._id
    cardList.rendererItems(resCard);
  })
  .catch(err => alert(`СМЭРТ загрузки начальных данных: ${err}`))

let id;
const userInfo = new UserInfo({
  nickSelector: '.profile__nickname',
  aboutSelector: '.profile__profession', 
  avatarSelector: '.profile__avatar'
});

const deletePopup = new PopupWithConfirm('#delete-card');
deletePopup.setEventListeners();
const profilePopup = new PopupWithForm({
  popupSelector: '#profile',
  submitCallBack: (data) => {
    profileSubmitBtn.textContent = "Сохранение..."
    api.patchUserInfo(data)
      .then((res) => {
        userInfo.setUserInfo(res);
        profilePopup.close()
      })
      .catch(err => alert(`СМЭРТ сохранения профиля: ${err}`))
      .finally(() => {
        profileSubmitBtn.textContent = "Сохранить"
      })
  }
});

const profileValidator = new FormValidator(selectorsSettings, profilePopup.form);
profilePopup.setEventListeners();

const avatarPopup = new PopupWithForm({
 popupSelector: '#avatar-update',
 submitCallBack: (data) => {
  document.querySelector('#avatar-button').textContent = "Сохранение...";
  api.patchAvatar(data.avatar)
  .then((res) => {
    userInfo.setUserAvatar(res);
    avatarPopup.close();
  })
  .catch(err => alert(`Смэрт аватара: ${err}`))
  .finally(() => {
    document.querySelector('#avatar-button').textContent = "Сохранить";
  });
 }
});

const avatarValidator = new FormValidator(selectorsSettings, avatarPopup.form);
avatarPopup.setEventListeners();



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

    handleLikeClick: (data) => {
      if (card.Like) {
          api.deleteMyLike(data.id)
        .then(res => {
          card.deleteLike();
          card.updateLikesCounter(res.likes.length);
        })
        .catch(err => alert(`Смэрт снятия лайка: ${err}`))
      } else {
        api.putMyLike(data.id)
        .then((res) => {
          card.setLike();
          card.updateLikesCounter(res.likes.length);
        })
        .catch(err => `СМЭРТ установки лайка: ${err}`)
      }
    },

    handleTrashClick: (id) => {
     deletePopup.open();
     deletePopup.submitClick(() => {
       api.deleteCard(id)
       .then(() => {
         card.removeCard();
         deletePopup.close();
       })
       .catch(err => alert(`СМЭРТ удаления карточки: ${err}`))
     })
    }
  }, '#card-template', id);

  return card.generateCard();
}

const cardList = new Section ({
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }
}, '.elements')


const addCardPopup = new PopupWithForm({
  popupSelector: '#add',
  submitCallBack: ({title, link}) => {
  const data = {
    name: title,
    link: link
  }
  addSubmitBtn.textContent = "Создание..."
  api.postNewCards(data).then(res => {
    cardList.addItemNew(createCard(res));
    addCardPopup.close()
  })
  .catch(err => {
    alert(`СМЭРТ новой карточки: ${err}`)
  })
  .finally(() =>{
    
    addSubmitBtn.textContent = "Создать" 
  })  
 }
});

addCardPopup.setEventListeners();

const addCardValidator = new FormValidator(selectorsSettings, addCardPopup.form);

const popupAddCardHandler = () => {
  addCardValidator.toggleBtn();
  addCardValidator.clearFormError();
  addCardPopup.open();
}

addCardValidator.enableValidation();
profileValidator.enableValidation();
avatarValidator.enableValidation();

openingBtnPopupProfile.addEventListener('click', popupProfileHandler);
openingBtnPopupAvatar.addEventListener('click', popupAvatarHandler);
openingBtnPopupAddCard.addEventListener('click', popupAddCardHandler);
