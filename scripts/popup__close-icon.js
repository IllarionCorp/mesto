let closeIcon = document.querySelector('.popup__close-icon');

function popupClosed() {
    if (popup.classList.contains('popup_opened') === true) {
        popup.classList.remove('popup_opened');
    }
}

closeIcon.addEventListener('click', popupClosed);