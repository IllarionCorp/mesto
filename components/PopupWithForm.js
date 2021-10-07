import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallBack) {
        super(popupSelector);
        this._submitCallBack = submitCallBack;
        this._form = this._popup.querySector('.fields');
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListners('submit', () => {
            this._submitCallBack();
        })
    }

    _getInputValues() {
        this._form.querySectorAll('.fields__input').forEach(input => {
            input
        });
    }

    close() {
        super.close();
        this._form.resset();
    }
}