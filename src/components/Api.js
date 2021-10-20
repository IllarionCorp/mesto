export default class Api {
    constructor(options) {
        this._options = options;
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
            console.log(result);
        })     
    }
}