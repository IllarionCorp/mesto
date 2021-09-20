class Card {
 constructor(){
 }

 _getTemplate() {
  const cardElement = document
   .querySelector('.card-template')
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
  document.querySelector('.popup__image').src = element.querySelector('.element__image').src;
  document.querySelector('.popup__label').textContent = element.querySelector('.element__place-name').textContent;
  openPopup(imgPopup);
 }

 generateCard() {
  this._element = this._getTemplate();
  this._setEventListners();

  this._element.querySelector('.element__image').src = this._link;
  this._element.querySelector('.element__place-name').textContent = this._name;

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
