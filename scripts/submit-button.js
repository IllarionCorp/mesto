
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
