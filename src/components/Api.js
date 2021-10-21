export default class Api {
    constructor(options, method) {
        this._options = options;
        this._method = method;
    }

    getInitCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-29/cards', {
            headers: {
                authorization: "3e854f17-4e78-4803-83c1-6cbecd942932"
            }
        })
        .then((res) => {
            return res.json();
        })
        // .then((res) => )
        .then((result) => {
           const objCards = JSON.parse(result);
        })
        // .catch((err) => {
        //  console.log(err);
        // })
    }
}
