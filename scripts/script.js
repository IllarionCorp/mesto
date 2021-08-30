/* ADD BUTTON*/

const addButton = document.querySelector('.profile__button-add')

function addElement() {
    let elements = document.querySelector('.elements')
    elements.insertAdjacentHTML('beforeend', `
    <div class="element">
        <img src="images/kirill-pershin-1088404-unsplash.png" class="element__image" alt="">
        <div class="element__footer">
          <h2 class="element__place-name">
            Карачаевск
          </h2>
          <button type="button" class="element__like">
           <img src="images/heart.svg" class="element__heart" alt="Кнопка нравится">
          </button>
        </div>
      </div>`);
}

addButton.addEventListener('click', addElement);

/*EDITE BUTTON*/

let popup = document.querySelector('.popup');
const editeButton = document.querySelector('.profile__button-edite')

function popupOpened() {
    popup.classList.add('popup_opened');
}

let name = document.querySelector('#name')
let job = document.querySelector('#job')
let profileNickname = document.querySelector('.profile__nickname')
let profileProfession = document.querySelector('.profile__profession')
name.value =profileNickname.textContent;
job.value = profileProfession.textContent;

editeButton.addEventListener('click', popupOpened);

/*POPUP CLOSE ICON*/

const closeIcon = document.querySelector('.popup__close-icon');
const submitButton = document.querySelector('.popup__submit-button');

function popupClosed() {
    if (popup.classList.contains('popup_opened') === true) {
        popup.classList.remove('popup_opened');
    }
}

closeIcon.addEventListener('click', popupClosed);
submitButton.addEventListener('click', popupClosed);


/*SUBMIT BUTTON*/

let formElement = document.querySelector('.fields')

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileNickname.textContent = name.value;
    profileProfession.textContent = job.value;

}

formElement.addEventListener('submit', formSubmitHandler);



