import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, submitCallBack }) {
        super(popupSelector);
        this._submitCallBack = submitCallBack;
        this.form = this._popup.querySelector('.fields');
    }

    setEventListeners() {
        super.setEventListeners();
        this.form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitCallBack(this._getInputValues());
            this.close();
        });
    }

    _getInputValues() {
        const inputList = this.form.querySelectorAll('.fields__input');
        const inputValues = {}
        inputList.forEach((input) => {
          inputValues[input.id] = input.value;
        });

        return inputValues;
    }

    close() {
        super.close();
        this.form.reset();
    }
}