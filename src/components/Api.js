export default class Api {
    constructor() {
     this._headers =  {
      Authorization: "3e854f17-4e78-4803-83c1-6cbecd942932",
      'Content-Type': 'application/json'
     }
    }

    getInitialCard() {
     return fetch("https://mesto.nomoreparties.co/v1/cohort-29/cards", {
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
     return fetch("https://mesto.nomoreparties.co/v1/cohort-29/users/me", {
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
     return fetch("https://mesto.nomoreparties.co/v1/cohort-29/users/me", {
      method: 'PATH',
      headers: this._headers,
      body: JSON.stringify({
       name: data.name,
       about: data.job
      })
     })
     .then((res) => {
      if(res.ok) {
       return res.json;
      }

      return Promise.reject(`Ошибочка: ${res.status}`);
     })
    }

    postNewCards(data) {
     return fetch("https://mesto.nomoreparties.co/v1/cohort-29/cards", {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
       name: data.name,
       link: data.link
      })
     })
     .then((res) => {
      if(res.ok) {
       return res.json;
      }

      return Promise.reject(`Ошибочка: ${res.status}`);
     })
    }
};
