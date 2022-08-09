const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__button-edit');
const closeButton = document.querySelector('.popup__container-close');
const popupContainer = popup.querySelector('.popup__container');
let popupForm = popup.querySelector('.popup__container-form');
let nameInput = popupForm.querySelector('.profile__name');
let jobInput = popupForm.querySelector('.profile__description');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

let togglePopup = function () {
popup.classList.toggle('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    togglePopup ();
}

editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);
popupForm.addEventListener('submit', formSubmitHandler); 
