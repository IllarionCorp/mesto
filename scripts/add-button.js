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