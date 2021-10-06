export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(this.popupSelector);
        this._closeIcon = this._popup.querySelector('.popup__close-button');
    }

    _handleEscClose(event) {
        if (event.key === ESC_CODE) {
            this.close();
           }
    }

    _closeClickToOverlay() {
        if (e.target.classList.contains('popup_opened') === true && e.target.classList.contains('popup__container') === false) {
          closePopup();
        }
      }

    setEventListeners() {
        this._closeIcon.addEventListener('click', this.close);
        this._popup.addEventListener('click', this._closeClickToOverlay);
    }

    open() {    
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }
}