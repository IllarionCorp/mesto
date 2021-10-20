export default class Card {
 constructor({ data, handleCardClick  }, template, cheker){
  this._name = data.name;
  this._link = data.link;
  this._templateSelector = template;
  this._handleCardClick = handleCardClick;
  this._cheker = cheker;
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
  document.querySelector('#delete-card').classList.add('popup_opened');
 }

 _trashDelete(element) {
  const trash = this._element.querySelector('.element__trash');
  trash.classList.add('element__trash_off');
 }

 generateCard() {
  this._element = this._getTemplate();
  this._setEventListners();
  const img = this._element.querySelector('.element__image');
  img.src = this._link;
  img.alt = this._name;
  this._element.querySelector('.element__place-name').textContent = this._name;

  if(this._cheker === 'on') {
   this._trashDelete(this._element);
  }

  return this._element;
 }
}

