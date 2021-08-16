
let formElement = document.querySelector('.fields')
let nameInput = formElement.querySelector('#name')
let jobInput = formElement.querySelector('#job')
let submitButton = document.querySelector('.submit-button')


function formSubmitHandler (evt) {
    evt.preventDefault();
    nameInput.value;
    jobInput.value;

    let profileNickname = document.querySelector('.profile__nickname')
    let profileProfession = document.querySelector('.profile__profession')
    
    profileNickname.textContent = nameInput;
    profileProfession.textContent = jobInput;
    
}

function popupClosed() {
    if (popup.classList.contains('popup_opened') === true) {
        popup.classList.remove('popup_opened');
    }
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
submitButton.addEventListener('click', popupClosed);