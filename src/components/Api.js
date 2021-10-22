export default class Api {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    }

    get() {
     return fetch(this._url, {
      headers: this._headers
     });
    }
};
