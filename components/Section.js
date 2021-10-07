export default class Section {
    constructor({item, renderer}, containerSelector) {
        this._initArray = item;
        this._renderer = renderer;
        this._container = containerSelector;
    }

    rendererItems() {

    }

    addItem(element) {
        this._container.append(element);
    }
}
