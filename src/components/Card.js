export default class Card {
 constructor({ data, handleCardClick  }, template, myId){
  this._name = data.name;
  this._link = data.link;
  this._templateSelector = template;
  this._handleCardClick = handleCardClick;
  this._myId = myId.then(res => {return res._id;}).catch(err => alert(err));
  this._id = data.owner._id;
  console.log(this._myId);
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

 _trashDelete() {
  const trash = this._element.querySelector('.element__trash');
  trash.classList.add('element__trash_off');
 }
_trashAdd() {
 const trash = this._element.querySelector('.element__trash');
 trash.classList.remove('element__trash_off');
}

 generateCard() {
  this._element = this._getTemplate();
  this._setEventListners();
  const img = this._element.querySelector('.element__image');
  img.src = this._link;
  img.alt = this._name;
  this._element.querySelector('.element__place-name').textContent = this._name;

  if(this._id !== this._myId) {
   this._trashDelete();
  } else {
   this._trashAdd()
  }

  return this._element;
 }
}

