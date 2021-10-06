import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, src, text) {
        super(popupSelector);
        this._label = this._popup.querySelector('.popup__label');
        this._link = this._popup.querySelector('.popup__image');
        this._src = src;
        this._text = text;
    }
    open() {
        super.open();
        this._label.textContent = this._text;
        this._link.src = this._src;
    }
}