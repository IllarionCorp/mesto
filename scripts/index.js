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

class Card {
 constructor(){
 }

 _getTemplate() {
  const cardElement = document
   .querySelector('#card-template')
   .content
   .querySelector('.element')
   .cloneNode(true);

  return cardElement;
 }

 _setEventListners() {
  this._element.querySelector('.element__like').addEventListener('click', () => {
   this._handleLikeClick();
  });

  this._element.querySelector('.element__trash').addEventListener('click', () => {
   this._handleTrashClick();
  });

  this._element.querySelector('.element__image').addEventListener('click', () => {
   this._handleImageClick();
  });
 }

 _handleLikeClick() {
  this._element.querySelector('.element__like').classList.toggle('element__like_active');
 }

 _handleTrashClick() {
  this._element.querySelector('.element__trash').closest('.element').remove();
 }

 _handleImageClick() {
  const element = this._element.querySelector('.element');
  // document.querySelector('.popup__image').src = element.querySelector('.element__image').src;
  document.querySelector('.popup__label').textContent = element.querySelector('.element__place-name').textContent;
  openPopup(document.querySelector('#image'));
 }

 generateCard() {
  this._element = this._getTemplate();
  this._setEventListners();

  this._element.querySelector('.element__image').src = this._link;
  this._element.querySelector('.element__place-name').textContent = this._name;

  console.log(this._element.querySelector('.element__trash').closest('.element'));

  return this._element;
 }

}

class DefaultCards extends Card {
 constructor(data){
  this._name = data.name;
  this._link = data.link;
 }

 generateCard() {
  this._element = super._getTemplate();
  super._setEventListners();

  this._element.querySelector('.element__image').src = this._link;
  this._element.querySelector('.element__place-name').textContent = this._name;

  return this._element;
 }
}

class UserCards extends Card {
 constructor(data) {
  this._name = data.name;
  this._link = data.link;
 }

 generateCard() {
  this._element = super._getTemplate();
  super._setEventListners();

  this._element.querySelector('.element__image').src = this._link;
  this._element.querySelector('.element__place-name').textContent = this._name;

  return this._element;
 }
}

initCards.forEach(item => {
  const card = new Card(item);
  const cardsElement = card.generateCard();
  document.querySelector('.elements').append(cardsElement);
})
