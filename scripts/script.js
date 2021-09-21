// PROFILE POPUP

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
const elements = document.querySelector('.elements');
const popupArr = Array.from(document.querySelectorAll('.popup'));
const ECS_CODE = 'Escape';
// const initCards = [
//  {
//   name: 'Архыз',
//   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
// },
// {
//   name: 'Челябинская область',
//   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
// },
// {
//   name: 'Иваново',
//   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
// },
// {
//   name: 'Камчатка',
//   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
// },
// {
//   name: 'Холмогорский район',
//   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
// },
// {
//   name: 'Байкал',
//   link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
// }
// ];

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

const handleLikeClick = (el) => {
 const like = el.querySelector('.element__like');
  like.addEventListener('click', function (evt) {
  const target = evt.target;
  target.classList.toggle('element__like_active');
 });
};

const handleTrashClick = (el) => {
 const trash = el.querySelector('.element__trash');
 trash.addEventListener('click', function(evt) {
  const target = evt.target;
  target.closest('.element').remove();
 });
};

const handleImageClick = (el) => {
 const image = el.querySelector('.element__image');
 image.addEventListener('click', function(evt) {
  const target = evt.target;
  document.querySelector('.popup__image').src = target.src;
  document.querySelector('.popup__label').textContent = target.closest('.element').querySelector('.element__place-name').textContent;
  openPopup(imgPopup);
 });
};

// const createCard = (element) => {
//  const elementTemplate = document.querySelector('#card-template').content;
//  const cardsElement = elementTemplate.querySelector('.element').cloneNode(true);
//  const img = cardsElement.querySelector('.element__image')
//  const placeName = cardsElement.querySelector('.element__place-name')
//  img.src = element.link;
//  placeName.textContent = element.name;

//  handleLikeClick(cardsElement);
//  handleTrashClick(cardsElement);
//  handleImageClick(cardsElement);

//  return cardsElement;
// };

// const renderCard = (data, wrap) => {
//   wrap.prepend(createCard(data))
//  }

//   initCards.forEach((data) => {
//     renderCard(data, elements);
//   });

function formSubmitHandlerAdd (evt) {
  evt.preventDefault();
  renderCard({
    name: document.querySelector('#title').value,
    link: document.querySelector('#link').value
  }, elements);
  closePopup(popupAddImage);
  clearForm(evt.target);
}

addButton.addEventListener('click',function () {
 const submitButton = popupAddImage.querySelector('.fields__submit-button');
 disableBtn(submitButton, 'fields__submit-button_disable')
 clearForm(popupAddImage.querySelector('form'));
 openPopup(popupAddImage);
});

editButton.addEventListener('click',function () {
 setDefaultProfieValues();
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


