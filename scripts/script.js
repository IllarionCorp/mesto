// PROFILE POPUP

let name = document.querySelector('#name')
let job = document.querySelector('#job')
let profileNickname = document.querySelector('.profile__nickname')
let profileProfession = document.querySelector('.profile__profession')


/*EDITE BUTTON*/

let profile = document.querySelector('#profile');
const editeButton = document.querySelector('.profile__button-edite')

function popupOpened() {
    profile.classList.add('popup_opened');
    name.value = profileNickname.textContent;
    job.value = profileProfession.textContent;
}

editeButton.addEventListener('click', popupOpened);

/*POPUP CLOSE ICON*/

const closeIconProfile = document.querySelector('#profile-closed');

function popupClosed() {
    profile.classList.remove('popup_opened');
}

closeIconProfile.addEventListener('click', popupClosed);


/*SUBMIT BUTTON*/


function formSubmitHandler (evt) {
    evt.preventDefault();
    profileNickname.textContent = name.value;
    profileProfession.textContent = job.value;
    popupClosed();
}

profile.addEventListener('submit',formSubmitHandler);

// ADD POPUP

const add = document.querySelector('#add')
const addButton = document.querySelector('.profile__button-add')

function popupOpenedAdd() {
    add.classList.add('popup_opened');
}

addButton.addEventListener('click', popupOpenedAdd);


const closeIconAdd = document.querySelector('#add-closed')

function popupClosedAdd() {
    add.classList.remove('popup_opened');
}

closeIconAdd.addEventListener('click', popupClosedAdd);


const img = document.querySelector('#image')
const closeImgBtn = document.querySelector('#image-closed')

function popupOpenedImg() {
 img.classList.add('popup_opened');
}

function popupClosedImg() {
 img.classList.remove('popup_opened');
}

closeImgBtn.addEventListener('click', popupClosedImg);

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

const elements = document.querySelector('.elements');


const createCard = (element) => {
 const elementTemplate = document.querySelector('#card-template').content;
 const cardsElement = elementTemplate.querySelector('.element').cloneNode(true);

 cardsElement.querySelector('.element__image').src = element.link;
 cardsElement.querySelector('.element__place-name').textContent = element.name;


 const like = cardsElement.querySelector('.element__like');
  like.addEventListener('click', function (evt) {
  const target = evt.target;
  target.classList.toggle('element__like_active');
 });

 const image = cardsElement.querySelector('.element__image');
 image.addEventListener('click', function(evt) {
  const target = evt.target;
  document.querySelector('.popup__image').src = target.src;
  document.querySelector('.popup__label').textContent = target.nextElementSibling.nextElementSibling.firstElementChild.textContent;
  popupOpenedImg();
 });

 const trash = cardsElement.querySelector('.element__trash');
 trash.addEventListener('click', function(evt) {
  const target = evt.target;
  target.parentElement.parentElement.remove();
 });

 return cardsElement;
};

function renderCard (data, wrap) {
 wrap.prepend(createCard(data))
}

const ad = initCards.map(createCard);
elements.append(...ad);

function formSubmitHandlerAdd (evt) {
  evt.preventDefault();
  renderCard({
    name: document.querySelector('#title').value,
    link: document.querySelector('#link').value
  }, elements);
  popupClosedAdd();
}

add.addEventListener('submit', formSubmitHandlerAdd);
