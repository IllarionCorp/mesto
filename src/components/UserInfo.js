

export default class UserInfo {
    constructor({ nickSelector, aboutSelector, avatarSelector }) {
        this._nick = document.querySelector(nickSelector);
        this._about = document.querySelector(aboutSelector);
        this._avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        const name = this._nick.textContent;
        const about = this._about.textContent;
        const dataList = { name: name, about: about}

        return dataList;
    }

    setUserInfo(data) {
        this._nick.textContent = data.name;
        this._about.textContent = data.about;
    }

    setUserAvatar(data) {
        this._avatar.style.backgroundImage = `url('${data.avatar}')`
    }
}
