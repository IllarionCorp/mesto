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

let add = document.querySelector('#add')
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

// ADD POPUP FORM
const cards = [
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

cards.map(function (element){
 const elementTemplate = document.querySelector('#card-template').content;
 const cardsElement = elementTemplate.querySelector('.element').cloneNode(true);

 cardsElement.querySelector('.element__image').src = element.link;
 cardsElement.querySelector('.element__place-name').textContent = element.name;

 elements.append(cardsElement);
});


function newCard() {
 const elementTemplate = document.querySelector('#card-template').content;
 const cardsElement = elementTemplate.querySelector('.element').cloneNode(true);

 cardsElement.querySelector('.element__image').src = document.querySelector('#link').value;
 cardsElement.querySelector('.element__place-name').textContent = document.querySelector('#title').value;

 elements.prepend(cardsElement);
}

function formSubmitHandlerAdd (evt) {
  evt.preventDefault();
  newCard();
  popupClosedAdd();
}

add.addEventListener('submit', formSubmitHandlerAdd);



// cards.unshift({
//  name: asfas,
//  link: safas
// });


// LIKE
cards.forEach(function (_elements){

})
const heart = document.querySelector('.element__heart');

// function Like() {
//  if (document.querySelector('.element__heart').src = "images/heart.svg" === true) {
//   document.querySelector('.element__heart').src = "images/Active.svg";
// }

// if (document.querySelector('.element__heart').src = "images/Active.svg" === true) {
//   document.querySelector('.element__heart').src = "images/heart.svg";
// }
// }


function Like() {
cards.forEach((element) => {
  document.querySelector('.element__heart').src = "images/Active.svg";
  return element;
});
}

heart.addEventListener('click', Like);
