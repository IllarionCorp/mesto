import Avatar from "./Avatar";

export default class Api {
    constructor(options) {
     this._url = options.url;
     this._headers =  options.headers;
    }

    getInitialCard() {
     return fetch(this._url + "/cards", {
      headers: this._headers
     })
     .then((res) => {
      if(res.ok) {
       return res.json();
      }
      return Promise.reject(`СМЭРТ получения данных карточек: ${res.status}`);
     })
    };

    getUserInfo() {
     return fetch(this._url + "/users/me", {
      headers: this._headers
     })
     .then((res) => {
      if(res.ok) {
       return res.json();
      }
      return Promise.reject(`СМЭРТ получения данных профиля: ${res.status}`);
     })
    }

    patchUserInfo(data) {
     return fetch(this._url + "/users/me", {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
       name: data.name,
       about: data.about
      })
      })
     .then((res) => {
      if(res.ok) {
       return res.json();
      }

      return Promise.reject(`СМЭРТ изменения профиля: ${res.status}`);
     })
    }

    patchAvatar(data) {
     return fetch(this._url + "/users/me/avatar", {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
       avatar: data.avatar
      })
      })
     .then((res) => {
      if(res.ok) {
       return res.json();
      }

      return Promise.reject(`СМЭРТ изменения аватара: ${res.status}`);
     })
    }

    postNewCards(data) {
     return fetch(this._url + "/cards", {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
       name: data.name,
       link: data.link
      })
     })
     .then((res) => {
      if(res.ok) {
       return res.json();
      }

      return Promise.reject(`СМЭРТ добавления карточки: ${res.status}`);
     })
    }

    putMyLike(cardId) {
     return fetch(this._url + "/cards/likes/" + cardId, {
      method: 'PUT',
      headers: this._headers
     })
     .then(res => {
      if(res.ok) {
       return res.json();
      }

      return Promise.reject(`СМЭРТ постановки лайка: ${res.status}`)
     })
    }

    deleteMyLike(cardId) {
     return fetch(this._url + "/cards/likes/" + cardId, {
      method: 'DELETE',
      headers: this._headers
     })
     .then(res => {
      if(res.ok) {
       return res.json();
      }

      return Promise.reject(`СМЭРТ удаления лайка: ${res.status}`);
     })
    }

    deleteCard(id) {
     return fetch(this._url + "/cards/" + id, {
      method: 'DELETE',
      headers: this._headers,
     })
     .then((res) => {
      if(res.ok) {
       return res.json();
      }

      return Promise.reject(`СМЭРТ удаления карточки: ${res.status}`);
     })
    }
};
