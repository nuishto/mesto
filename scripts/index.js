const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__button-edit');
const closeButton = document.querySelector('.popup__container-close');
let popupForm = popup.querySelector('.popup__container-form');
let nameInput = popupForm.querySelector('.popup__container_input_name');
let jobInput = popupForm.querySelector('.popup__container_input_description');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

let togglePopup = function () {
    popup.classList.toggle('popup_opened');
}

let namePopup = function () {
    nameInput.setAttribute ('value', profileName.textContent);
    jobInput.setAttribute ('value', profileDescription.textContent);
}


function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    togglePopup ();
}

editButton.addEventListener('click', togglePopup);
editButton.addEventListener('click', namePopup);
closeButton.addEventListener('click', togglePopup);
popupForm.addEventListener('submit', formSubmitHandler); 
