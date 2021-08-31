let name = document.querySelector('#name')
let job = document.querySelector('#job')
let profileNickname = document.querySelector('.profile__nickname')
let profileProfession = document.querySelector('.profile__profession')


/*EDITE BUTTON*/

let popup = document.querySelector('.popup');
const editeButton = document.querySelector('.profile__button-edite')

function popupOpened() {
    popup.classList.add('popup_opened');
    name.value = profileNickname.textContent;
    job.value = profileProfession.textContent;
}

editeButton.addEventListener('click', popupOpened);

/*POPUP CLOSE ICON*/

const closeIcon = document.querySelector('.popup__close-icon');

function popupClosed() {
    popup.classList.remove('popup_opened');
}

closeIcon.addEventListener('click', popupClosed);


/*SUBMIT BUTTON*/

let formElement = document.querySelector('.fields')
const submitButton = document.querySelector('.popup__submit-button')

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileNickname.textContent = name.value;
    profileProfession.textContent = job.value;

}

formElement.addEventListener('submit', formSubmitHandler);
submitButton.addEventListener('click', popupClosed);



