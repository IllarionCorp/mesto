export default class Api {
    constructor(options) {
     this._url = options.url;
     this._headers =  options.headers;
    }

    _checkResponse(res) {
        if(res.ok) {
            return res.json();
           }
           return Promise.reject(`СМЭРТ: ${res.status}`);
    }      
    
    getAllInfo() {
        return Promise.all([this.getInitialCard(), this.getUserInfo()]);
    }

    getInitialCard() {
     return fetch(this._url + "/cards", {
      headers: this._headers
     })
     .then(this._checkResponse);
    };

    getUserInfo() {
     return fetch(this._url + "/users/me", {
      headers: this._headers
     })
     .then(this._checkResponse)
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
     .then(this._checkResponse)
    }

    patchAvatar(data) {
     return fetch(this._url + "/users/me/avatar", {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
       avatar: data
      })
      })
     .then(this._checkResponse)
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
     .then(this._checkResponse)
    }

    putMyLike(cardId) {
     return fetch(this._url + "/cards/likes/" + cardId, {
      method: 'PUT',
      headers: this._headers
     })
     .then(this._checkResponse)
    }

    deleteMyLike(cardId) {
     return fetch(this._url + "/cards/likes/" + cardId, {
      method: 'DELETE',
      headers: this._headers
     })
     .then(this._checkResponse)
    }

    deleteCard(id) {
     return fetch(this._url + "/cards/" + id, {
      method: 'DELETE',
      headers: this._headers,
     })
     .then(this._checkResponse)
    }
};
