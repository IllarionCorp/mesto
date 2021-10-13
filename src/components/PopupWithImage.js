import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._label = this._popup.querySelector('.popup__label');
        this._link = this._popup.querySelector('.popup__image');
    }

    open(name, link) {
        this._label.textContent = name;
        this._link.src = link;
        super.open();
    }

}