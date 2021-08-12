let popup = document.querySelector('.popup');
let editeButton = document.querySelector('.edite-button');

function popupOpened() {
    if (popup.classList.contains('popup_opened') === false) {  
        popup.classList.add('popup_opend');
    }

    else {
        popup.classList.remove('popup_opened');
    }
}

editeButton.addEventListner(`click`, popupOpened);
 
