// PROFILE POPUP

const nickname = document.querySelector('#name')
const job = document.querySelector('#job')
const profileNickname = document.querySelector('.profile__nickname')
const profileProfession = document.querySelector('.profile__profession')
const ProfilePopup = document.querySelector('#profile');
const editButton = document.querySelector('.profile__button-edite')
const closeIconProfile = document.querySelector('#profile-closed');
const PopupAddImage = document.querySelector('#add')
const addButton = document.querySelector('.profile__button-add')
const closeIconAdd = document.querySelector('#add-closed')
const imgPopup = document.querySelector('#image')
const closeImgBtn = document.querySelector('#image-closed')
const elements = document.querySelector('.elements');
const popupArr = Array.from(document.querySelectorAll('.popup'));
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

const setDefaultProfieValues = () => {
  nickname.value = profileNickname.textContent;
  job.value = profileProfession.textContent;
}

const openPopup = (element) => {
    element.classList.add('popup_opened');
}

const closePopup = (element) => {
  element.classList.remove('popup_opened');
}

editButton.addEventListener('click',function () {
  setDefaultProfieValues();
  openPopup(ProfilePopup);
});

closeIconProfile.addEventListener('click', function ()  {
  closePopup(ProfilePopup);
});

function formSubmitHandlerProfile (evt) {
    evt.preventDefault();
    profileNickname.textContent = nickname.value;
    profileProfession.textContent = job.value;
    closePopup(ProfilePopup);
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
  target.parentElement.parentElement.remove();
 });
};

const handleImageClick = (el) => {
 const image = el.querySelector('.element__image');
 image.addEventListener('click', function(evt) {
  const target = evt.target;
  document.querySelector('.popup__image').src = target.src;
  document.querySelector('.popup__label').textContent = target.nextElementSibling.nextElementSibling.firstElementChild.textContent;
  openPopup(imgPopup);
 });
};

const createCard = (element) => {
 const elementTemplate = document.querySelector('#card-template').content;
 const cardsElement = elementTemplate.querySelector('.element').cloneNode(true);
 const img = cardsElement.querySelector('.element__image')
 const placeName = cardsElement.querySelector('.element__place-name')
 img.src = element.link;
 placeName.textContent = element.name;

 handleLikeClick(cardsElement);
 handleTrashClick(cardsElement);
 handleImageClick(cardsElement);

 return cardsElement;
};

const renderCard = (data, wrap) => {
  wrap.prepend(createCard(data))
 }

  const startCards = initCards.map(createCard);
  elements.append(...startCards);

function formSubmitHandlerAdd (evt) {
  evt.preventDefault();
  renderCard({
    name: document.querySelector('#title').value,
    link: document.querySelector('#link').value
  }, elements);
  closePopup(PopupAddImage);
  document.getElementById('add-cards').reset();
}

addButton.addEventListener('click',function () {
 openPopup(PopupAddImage);
});

ProfilePopup.addEventListener('submit',formSubmitHandlerProfile);

closeIconAdd.addEventListener('click', function (){
 closePopup(PopupAddImage);
});

closeImgBtn.addEventListener('click', function(){
closePopup(imgPopup);
});

PopupAddImage.addEventListener('submit', formSubmitHandlerAdd);

popupArr.forEach((evt) => {
 evt.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
   closePopup(document.querySelector(`#${evt.id}`));
  }
 });
});

