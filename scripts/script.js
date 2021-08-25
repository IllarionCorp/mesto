/* ADD BUTTON*/

let addButton = document.querySelector('.add-button')

function addElement() {
    let elements = document.querySelector('.elements')
    elements.insertAdjacentHTML('beforeend', `
    <div class="element">
    <img src="images/kirill-pershin-1404681-unsplash.png" class="element__image">
    <div class="element__footer">
      <h2 class="element__place-name">
        Гора Эльбрус
      </h2>
      <img src="images/heart.svg" class="element__heart" alt="Кнопка нравится">
    </div>
  </div>`);
}

addButton.addEventListener('click', addElement);

/*EDITE BUTTON*/

let popup = document.querySelector('.popup');
let editeButton = document.querySelector('.edite-button');

function popupOpened() {
    if (popup.classList.contains('popup_opened') === false) {
        popup.classList.add('popup_opened');
    }
}

editeButton.addEventListener('click', popupOpened);

/*FIELDS*/

let name = document.querySelector('#name')
let job = document.querySelector('#job')
let profileNickname = document.querySelector('.profile__nickname')
let profileProfession = document.querySelector('.profile__profession')

name.value = profileNickname.textContent;
job.value = profileProfession.textContent;

/*POPUP CLOSE ICON*/

let closeIcon = document.querySelector('.popup__close-icon');

function popupClosed() {
    if (popup.classList.contains('popup_opened') === true) {
        popup.classList.remove('popup_opened');
    }
}

closeIcon.addEventListener('click', popupClosed);

/*SUBMIT BUTTON*/

let formElement = document.querySelector('.fields')
let nameInput = formElement.querySelector('#name')
let jobInput = formElement.querySelector('#job')
let submitButton = document.querySelector('.submit-button')

function formSubmitHandler (evt) {
    evt.preventDefault();
    let profileNickname = document.querySelector('.profile__nickname')
    let profileProfession = document.querySelector('.profile__profession')

    profileNickname.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;

}

function popupClosed() {
    if (popup.classList.contains('popup_opened') === true) {
        popup.classList.remove('popup_opened');
    }
}

formElement.addEventListener('submit', formSubmitHandler);
submitButton.addEventListener('click', popupClosed);


