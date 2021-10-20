import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
 constructor(popupSelector) {
  super(popupSelector);
  this._form = this._popup.querySelector('.fields');
 }

 setEventListeners() {
  super.setEventListeners();
  this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.close();
  });
}

 close() {
  super.close();
 }
}
