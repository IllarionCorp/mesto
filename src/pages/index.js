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
  profieNickSelector, 
  addSubmitBtn,
  profileSubmitBtn
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
  })
  .catch(err => alert(`Произошла СМЭРТ: ${err}`))
  .finally(() => {
    profileSubmitBtn.textContent = "Сохранить"
  })

const userInfo = new UserInfo({
  nickSelector: '.profile__nickname',
  aboutSelector: '.profile__profession'
});


const avatar = new Avatar('.profile__avatar');
const deletePopup = new PopupWithConfirm('#delete-card');
deletePopup.setEventListeners();
const profilePopup = new PopupWithForm({
  popupSelector: '#profile',
  submitCallBack: (data) => {
    userInfo.setUserInfo(data);
    api.patchUserInfo(data)
      .then(() => {
        profileSubmitBtn.textContent = "Сохранение..."
      })
      .catch(err => alert(`СМЭРТ сохранения профиля: ${err}`))
      .finally(() => {
        profilePopup.close()
        profileSubmitBtn.textContent = "Сохранить"
      })
  }
});

const profileValidator = new FormValidator(selectorsSettings, profilePopup.form);
profilePopup.setEventListeners();

const avatarPopup = new PopupWithForm({
 popupSelector: '#avatar-update',
 submitCallBack: (data) => {
 
  api.patchAvatar(data.avatar)
  .then((res) => {
    document.querySelector('#avatar-button').textContent = "Сохранение...";
    avatar.setUrl(res.avatar);
  })
  .catch(err => alert(`Смэрт аватара: ${err}`))
  .finally(() => {
    document.querySelector('#avatar-button').textContent = "Сохранить";
    avatarPopup.close()
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
      } else {
        api.putMyLike(data.id)
        .then((res) => {
          card.setLike();
          card.updateLikesCounter(res.likes.length);
        })
      }
    },

    handleTrashClick: (id) => {
     document.querySelector('#delete-card').classList.add('popup_opened');
     deletePopup.submitClick(() => {
       api.deleteCard(id)
       .then(() => {
         card.removeCard();
         deletePopup.close();
       })
       .catch(err => alert(`СМЭРТ удаления карточки: ${err}`))
       .finally(() => {
         
       })
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

cards.then(data => {
  console.log(data);
  cardList.rendererItems(data);
}).catch(err => {
  alert(`СМЭРТ по отрисовки карточек: ${err}`);
})


const addCardPopup = new PopupWithForm({
  popupSelector: '#add',
  submitCallBack: ({title, link}) => {
  const data = {
    name: title,
    link: link
  }
  
  api.postNewCards(data).then(res => {
    addSubmitBtn.textContent = "Создание..."
    cardList.addItemNew(createCard(res));
  })
  .catch(err => {
    alert(`СМЭРТ новой карточки: ${err}`)
  })
  .finally(() =>{
    addCardPopup.close()
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
