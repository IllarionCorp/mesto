export default class Api {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    }

    getInitialCard() {
     return fetch("https://mesto.nomoreparties.co/v1/cohort-29/cards", {
      headers: {
       Authorization: "6dcc8eb5-b36f-4e58-925f-68f8caf1b64a"
      }
     })
     .then((res) => {
      if(res.ok) {
       return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
     })
    };

    getUserInfo() {
     return fetch("https://mesto.nomoreparties.co/v1/cohort-29/users/me", {
      headers: {
       Authorization: "6dcc8eb5-b36f-4e58-925f-68f8caf1b64a"
      }
     })
     .then((res) => {
      if(res.ok) {
       return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
     })
    }
};
