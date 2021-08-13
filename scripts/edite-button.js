let popup = document.querySelector('.popup');
let editeButton = document.querySelector('.edite-button');

function popupOpened() {
    if (popup.classList.contains('popup_opened') === false) {  
        popup.classList.add('popup_opened');
    }
}

editeButton.addEventListener('click', popupOpened);