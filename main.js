(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){var o=e.data,i=e.handleCardClick,a=e.handleLikeClick,c=e.handleTrashClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=o.name,this._link=o.link,this._templateSelector=n,this._handleCardClick=i,this._handleLikeClick=a,this._handleTrashClick=c,this._myId=r,this._id=o.owner._id,this._likes=o.likes,this._cardId=o._id}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListners",value:function(){var e=this;this._element.querySelector(".element__like").addEventListener("click",(function(){e._handleLikeClick({id:e._cardId,myId:e._myId,likes:e._likes})})),this._element.querySelector(".element__trash").addEventListener("click",(function(){e._handleTrashClick(e._cardId)})),this._element.querySelector(".element__image").addEventListener("click",(function(){e._handleCardClick()}))}},{key:"setLike",value:function(){this._element.querySelector(".element__like").classList.add("element__like_active"),this.Like=!0}},{key:"deleteLike",value:function(){this._element.querySelector(".element__like").classList.remove("element__like_active"),this.Like=!1}},{key:"_toggleStateLike",value:function(){var e=this;this._likes.find((function(t){return t._id===e._myId}))?this.setLike():this.deleteLike()}},{key:"_trashDelete",value:function(){this._element.querySelector(".element__trash").classList.add("element__trash_off")}},{key:"_trashAdd",value:function(){this._element.querySelector(".element__trash").classList.remove("element__trash_off")}},{key:"updateLikesCounter",value:function(e){this._element.querySelector(".element__like-counter").textContent=e}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._setEventListners();var e=this._element.querySelector(".element__image");return e.src=this._link,e.alt=this._name,this._element.querySelector(".element__place-name").textContent=this._name,this.updateLikesCounter(this._likes.length),this._id===this._myId?this._trashAdd():this._trashDelete(),this._toggleStateLike(),this._element}},{key:"removeCard",value:function(){this._element.remove()}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,r;return t=e,(r=[{key:"rendererItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"addItemNew",value:function(e){this._container.prepend(e)}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t),this._closeIcon=this._popup.querySelector(".popup__close-button")}var t,n;return t=e,(n=[{key:"_closeClickToOverlay",value:function(e){!0===e.target.classList.contains("popup_opened")&&!1===e.target.classList.contains("popup__container")&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeIcon.addEventListener("click",(function(){e.close()})),this._popup.addEventListener("click",(function(t){e._closeClickToOverlay(t)}))}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&o(t.prototype,n),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},u(e,t,n||e)}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function s(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._label=t._popup.querySelector(".popup__label"),t._link=t._popup.querySelector(".popup__image"),t}return t=a,(n=[{key:"open",value:function(e,t,n){this._label.textContent=e,this._link.src=t,this._link.alt=n,u(f(a.prototype),"open",this).call(this)}}])&&c(t.prototype,n),a}(i),p={formSelector:".fields",inputSelector:".fields__input",submitButtonSelector:".fields__submit-button",inactiveButtonClass:"fields__submit-button_disable",inputErrorClass:"fields__input_type_error",errorClass:"fields__input-error_active"},d=document.querySelector("#name"),y=document.querySelector("#about"),_=document.querySelector(".profile__button-edite"),v=document.querySelector(".profile__button-add"),m=document.querySelector(".profile__button-edite-avatar"),b=document.querySelector("#add-button"),k=document.querySelector("#profile-button");function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},S(e,t,n||e)}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function w(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e){var t,n=e.popupSelector,r=e.submitCallBack;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._submitCallBack=r,t.form=t._popup.querySelector(".fields"),t}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;S(L(a.prototype),"setEventListeners",this).call(this),this.form.addEventListener("submit",(function(t){t.preventDefault(),e._submitCallBack(e._getInputValues())}))}},{key:"_getInputValues",value:function(){var e=this.form.querySelectorAll(".fields__input"),t={};return e.forEach((function(e){t[e.id]=e.value})),t}},{key:"close",value:function(){S(L(a.prototype),"close",this).call(this),this.form.reset()}}])&&C(t.prototype,n),a}(i);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){var n=t.nickSelector,r=t.aboutSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nick=document.querySelector(n),this._about=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nick.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(e){this._nick.textContent=e.name,this._about.textContent=e.about}}])&&j(t.prototype,n),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._buttonElement=this._form.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_hasNotInputValues",value:function(){return this._inputList.every((function(e){return 0===e.validity.length}))}},{key:"_disableBtn",value:function(){this._buttonElement.disabled=!0,this._buttonElement.classList.add(this._inactiveButtonClass)}},{key:"_enableBtn",value:function(){this._buttonElement.disabled=!1,this._buttonElement.classList.remove(this._inactiveButtonClass)}},{key:"toggleBtn",value:function(){this._hasInvalidInput()||this._hasNotInputValues()?this._disableBtn():this._enableBtn()}},{key:"_setEvtListners",value:function(){var e=this;if(this._form.addEventListener("submit",(function(e){e.preventDefault()})),this.toggleBtn(),this._inputList.length>1)this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleBtn()}))}));else{var t=this._form.querySelector(this._inputSelector);t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleBtn()}))}}},{key:"clearFormError",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._setEvtListners()}}])&&P(t.prototype,n),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._avatar=document.querySelector(t)}var t,n;return t=e,(n=[{key:"setUrl",value:function(e){this._avatar.style.backgroundImage="url('".concat(e,"')")}}])&&B(t.prototype,n),e}();function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e,t,n){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},D(e,t,n||e)}function U(e,t){return U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},U(e,t)}function V(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return V(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._form=t._popup.querySelector(".fields"),t}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;D(A(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._callBack()}))}},{key:"submitClick",value:function(e){this._callBack=e}}])&&x(t.prototype,n),a}(i);function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var F,J=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,n=[{key:"getInitialCard",value:function(){return fetch(this._url+"/cards",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("СМЭРТ получения данных карточек: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return fetch(this._url+"/users/me",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("СМЭРТ получения данных профиля: ".concat(e.status))}))}},{key:"patchUserInfo",value:function(e){return fetch(this._url+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("СМЭРТ изменения профиля: ".concat(e.status))}))}},{key:"patchAvatar",value:function(e){return fetch(this._url+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("СМЭРТ изменения аватара: ".concat(e.status))}))}},{key:"postNewCards",value:function(e){return fetch(this._url+"/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("СМЭРТ добавления карточки: ".concat(e.status))}))}},{key:"putMyLike",value:function(e){return fetch(this._url+"/cards/likes/"+e,{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("СМЭРТ постановки лайка: ".concat(e.status))}))}},{key:"deleteMyLike",value:function(e){return fetch(this._url+"/cards/likes/"+e,{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("СМЭРТ удаления лайка: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch(this._url+"/cards/"+e,{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("СМЭРТ удаления карточки: ".concat(e.status))}))}}],n&&M(t.prototype,n),e}(),H=new J({url:"https://mesto.nomoreparties.co/v1/cohort-29",headers:{Authorization:"3e854f17-4e78-4803-83c1-6cbecd942932","Content-Type":"application/json"}}),z=H.getInitialCard();H.getUserInfo().then((function(e){document.querySelector(".profile__nickname").textContent=e.name,document.querySelector(".profile__profession").textContent=e.about,document.querySelector(".profile__avatar").style.backgroundImage="url('".concat(e.avatar,"')"),F=e._id})).catch((function(e){return alert("Произошла СМЭРТ: ".concat(e))})).finally((function(){k.textContent="Сохранить"}));var G=new I({nickSelector:".profile__nickname",aboutSelector:".profile__profession"}),K=new T(".profile__avatar"),Q=new N("#delete-card");Q.setEventListeners();var W=new O({popupSelector:"#profile",submitCallBack:function(e){G.setUserInfo(e),H.patchUserInfo(e).then((function(){k.textContent="Сохранение..."})).catch((function(e){return alert("СМЭРТ сохранения профиля: ".concat(e))})).finally((function(){W.close(),k.textContent="Сохранить"}))}}),X=new q(p,W.form);W.setEventListeners();var Y=new O({popupSelector:"#avatar-update",submitCallBack:function(e){H.patchAvatar(e.avatar).then((function(e){document.querySelector("#avatar-button").textContent="Сохранение...",K.setUrl(e.avatar)})).catch((function(e){return alert("Смэрт аватара: ".concat(e))})).finally((function(){document.querySelector("#avatar-button").textContent="Сохранить",Y.close()}))}}),Z=new q(p,Y.form);Y.setEventListeners();var $=new h("#image");function ee(e){var n=new t({data:e,handleCardClick:function(){$.open(e.name,e.link,e.name)},handleLikeClick:function(e){n.Like?H.deleteMyLike(e.id).then((function(e){n.deleteLike(),n.updateLikesCounter(e.likes.length)})):H.putMyLike(e.id).then((function(e){n.setLike(),n.updateLikesCounter(e.likes.length)}))},handleTrashClick:function(e){document.querySelector("#delete-card").classList.add("popup_opened"),Q.submitClick((function(){H.deleteCard(e).then((function(){n.removeCard(),Q.close()})).catch((function(e){return alert("СМЭРТ удаления карточки: ".concat(e))})).finally((function(){}))}))}},"#card-template",F);return n.generateCard()}$.setEventListeners();var te=new r({renderer:function(e){te.addItem(ee(e))}},".elements");z.then((function(e){console.log(e),te.rendererItems(e)})).catch((function(e){alert("СМЭРТ по отрисовки карточек: ".concat(e))}));var ne=new O({popupSelector:"#add",submitCallBack:function(e){var t={name:e.title,link:e.link};H.postNewCards(t).then((function(e){b.textContent="Создание...",te.addItemNew(ee(e))})).catch((function(e){alert("СМЭРТ новой карточки: ".concat(e))})).finally((function(){ne.close(),b.textContent="Создать"}))}});ne.setEventListeners();var re=new q(p,ne.form);re.enableValidation(),X.enableValidation(),Z.enableValidation(),_.addEventListener("click",(function(){var e=G.getUserInfo();d.value=e.name,y.value=e.about,X.toggleBtn(),X.clearFormError(),W.open()})),m.addEventListener("click",(function(){Z.toggleBtn(),Z.clearFormError(),Y.open()})),v.addEventListener("click",(function(){re.toggleBtn(),re.clearFormError(),ne.open()}))})();