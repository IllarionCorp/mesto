export default class Avatar{
 constructor(avatarSelector) {
  this._avatar = document.querySelector(avatarSelector);
 }

 setUrl(link) {
  this._avatar.style.backgroundImage = `url('${link}')`
 }
}
