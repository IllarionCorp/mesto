
let formElement = document.querySelector('.fields')
let nameInput = formElement.getElementById('name')
let jobInput = formElement.getElementById('profession')


function formSubmitHandler (evt) {
    evt.preventDefault();
    nameInput.value;
    jobInput.value;

    let profileNickname = document.querySelector('.profile__nickname')
    let profileProfession = document.querySelector('.profile__profession')

    
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);