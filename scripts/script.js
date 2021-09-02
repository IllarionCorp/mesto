// PROFILE POPUP

let name = document.querySelector('#name')
let job = document.querySelector('#job')
let profileNickname = document.querySelector('.profile__nickname')
let profileProfession = document.querySelector('.profile__profession')


/*EDITE BUTTON*/

let profile = document.querySelector('#profile');
const editeButton = document.querySelector('.profile__button-edite')

function popupOpened() {
    profile.classList.add('popup_opened');
    name.value = profileNickname.textContent;
    job.value = profileProfession.textContent;
}

editeButton.addEventListener('click', popupOpened);

/*POPUP CLOSE ICON*/

const closeIconProfile = document.querySelector('#profile-closed');

function popupClosed() {
    profile.classList.remove('popup_opened');
}

closeIconProfile.addEventListener('click', popupClosed);


/*SUBMIT BUTTON*/


function formSubmitHandler (evt) {
    evt.preventDefault();
    profileNickname.textContent = name.value;
    profileProfession.textContent = job.value;
    popupClosed();
}

profile.addEventListener('submit',formSubmitHandler);

// ADD POPUP

let title = document.querySelector('#tite')
let link = document.querySelector('#link')
let placeName = document.querySelector('.element__place-name')
let elementImage = document.querySelector('.element__image')

let add = document.querySelector('#add')
const addButton = document.querySelector('.profile__button-add')

function popupOpenedAdd() {
    add.classList.add('popup_opened');
}

addButton.addEventListener('click', popupOpenedAdd);


const closeIconAdd = document.querySelector('#add-closed')

function popupClosedAdd() {
    add.classList.remove('popup_opened');
}

closeIconAdd.addEventListener('click', popupClosedAdd);
