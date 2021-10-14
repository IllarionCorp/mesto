

export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closeIcon = this._popup.querySelector('.popup__close-button');
    }

    _handleEscClose = (event) => {
        if (event.key === 'Escape') {
            this.close();
           }
    }

    _closeClickToOverlay(event) {
        if (event.target.classList.contains('popup_opened') === true && event.target.classList.contains('popup__container') === false) {
          this.close();
        }
      }

    setEventListeners() {
        this._closeIcon.addEventListener('click',() => {
            this.close();
        });
        this._popup.addEventListener('click',(event) => {
            this._closeClickToOverlay(event);
        });
    }

    open() {    
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown',this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown',this._handleEscClose);
    }
}