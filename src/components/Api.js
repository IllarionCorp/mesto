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
      return Promise.reject(`Ошибка: ${res.status}`);
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
      return Promise.reject(`Ошибка: ${res.status}`);
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

      return Promise.reject(`Ошибочка: ${res.status}`);
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

      return Promise.reject(`Ошибочка: ${res.status}`);
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

      return Promise.reject(`Ошибочка: ${res.status}`);
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

      return Promise.reject(`Ошибочка: ${res.status}`);
     })
    }
};
