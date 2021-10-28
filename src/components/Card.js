

export default class Card {
 constructor({ data, handleCardClick, handleLikeClick, handleTrashClick }, template, myId){
  this._name = data.name;
  this._link = data.link;
  this._templateSelector = template;
  this._handleCardClick = handleCardClick;
  this._handleLikeClick = handleLikeClick;
  this._handleTrashClick = handleTrashClick;
  this._myId = myId;
  this._id = data.owner._id;
  this._likes = data.likes;
  this._cardId = data._id;
  
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
   this._handleLikeClick({
    id: this._cardId,
    myId: this._myId,
    likes: this._likes
   });
  });

  this._element.querySelector('.element__trash').addEventListener('click', () => {
   this._handleTrashClick(this._cardId);
  });

  this._element.querySelector('.element__image').addEventListener('click', () => {
   this._handleCardClick();
  });
 }

setLike() {
    this._element.querySelector('.element__like').classList.add('element__like_active');
    this.Like = true;
}

deleteLike() {
    this._element.querySelector('.element__like').classList.remove('element__like_active');
    this.Like = false;
}

 _toggleStateLike() {
     if (this._likes.find((like) => like._id === this._myId)) {
        this.setLike();
    } else {
        this.deleteLike();
    }
}

 _trashDelete() {
  const trash = this._element.querySelector('.element__trash');
  trash.classList.add('element__trash_off');
 }
_trashAdd() {
 const trash = this._element.querySelector('.element__trash');
 trash.classList.remove('element__trash_off');
}

updateLikesCounter(likes) {
    this._element.querySelector('.element__like-counter').textContent = likes;
}

 generateCard() {
  this._element = this._getTemplate();
  this._setEventListners();
  const img = this._element.querySelector('.element__image');
  img.src = this._link;
  img.alt = this._name;
  this._element.querySelector('.element__place-name').textContent = this._name;
  this.updateLikesCounter(this._likes.length);
  if(this._id === this._myId) {
   this._trashAdd();
  } else {
   this._trashDelete();
  }
  this._toggleStateLike();

  return this._element;
 }

 removeCard() {
     this._element.remove()
 }
}

