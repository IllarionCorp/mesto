export default class UserInfo {
    constructor({ nickSelector, jobSelector }) {
        this._nick = document.querySelector(nickSelector);
        this._job = document.querySelector(jobSelector);
    }

    getUserInfo() {
        const name = this._nick.textContent;
        const job = this._job.textContent;
        const dataList = { name: name, job: job}

        return dataList;
    }

    setUserInfo(data) {
        this._nick.textContent = data.name;
        this._job.textContent = data.about;
    }
}
