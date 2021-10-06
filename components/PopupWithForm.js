import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallBack) {
        super(popupSelector);
        this._submitCallBack = submitCallBack;
        this._form = this._popup.querySector('.fields');
    }

    _getInputValues() {
        

    }
}