export default class Section {
    constructor({item, renderer}, containerSelector) {
        this._initArray = item;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    rendererItems() {
        this._initArray.forEach(item => {
            this._renderer(item);
        });
    }

    addItem(element) {
        this._container.prepend(element);
    }
}
