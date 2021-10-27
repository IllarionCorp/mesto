import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
 constructor({popupSelector, callBack}) {
  super(popupSelector);
  this._form = this._popup.querySelector('.fields');
  this._callBack = callBack;
 }

 getCardId(card) {
  this._id = card;
 }

 setEventListeners() {
  super.setEventListeners();
  this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callBack(this._id);
      this.close();
  });
}

 close() {
  super.close();
 }
}
