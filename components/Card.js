export default class Card {
 constructor({ data, handleCardClick  }, template){
  this._name = data.name;
  this._link = data.link;
  this._templateSelector = template;
  this._handleCardClick = handleCardClick;
 }

 _getTemplate() {
  const template = document.querySelector(this._templateSelector);
  const cardElement = template
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
   this._handleCardClick();
  });
 }

 _handleLikeClick() {
  this._element.querySelector('.element__like').classList.toggle('element__like_active');
 }

 _handleTrashClick() {
  this._element.remove();
 }

 generateCard() {
  this._element = this._getTemplate();
  this._setEventListners();

  this._element.querySelector('.element__image').src = this._link;
  this._element.querySelector('.element__place-name').textContent = this._name;

  return this._element;
 }
}

