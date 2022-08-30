//popup edit
const popup = document.querySelector('.popup');
let popupForm = popup.querySelector('.popup__container-form');
let nameInput = popupForm.querySelector('.popup__container-input_type_name');
let jobInput = popupForm.querySelector('.popup__container-input_type_description');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

//popup add

let popupFormAdd = document.querySelector('.popup_add');
let cardNameInput = popupFormAdd.querySelector('.popup__container-input_type_title');
let cardLinkInput = popupFormAdd.querySelector('.popup__container-input_type_link');

//buttons
const editButton = document.querySelector('.profile__button-edit');
const closeButton = document.querySelector('.popup__container-close');
const closeAddButton = document.querySelector('.popup__container-add-close')
const addButton = document.querySelector('.profile__add-photo');

//Карточки из коробки
const elements = document.querySelector('.elements');
const templateElement = document.querySelector('.template');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

// Добавление новой фотки

function addCard(evt) {
  evt.preventDefault();
  const title = cardNameInput.value;
  console.log(cardNameInput.value);
  const image = cardLinkInput.value;
  console.log(cardLinkInput.value);
  const objectCard = {
    name: title,
    link: image
  }
  elements.prepend(newCard(objectCard));
  closeAddPopup();
}

  
//Создание карточки 

function newCard(element) {
    const newCardElement = templateElement.content.cloneNode(true);
//like
   const likeButton = newCardElement.querySelector('.elements__photo-like');
   likeButton.addEventListener('click', evt => like(evt, likeButton));
//delete
    const deleteButton = newCardElement.querySelector('.elements__photo-delete');
    deleteButton.addEventListener('click', deleteCard);
//newCard
    newCardElement.querySelector('.elements__photo-name').textContent = element.name;
    newCardElement.querySelector('.elements__photo-image').src = element.link;
    elements.prepend(newCardElement);
};

initialCards.forEach(newCard);

//Like function

function like(evt, likeButton) {
    likeButton.classList.toggle('elements__photo-like_active');
  }

//Delete function

function deleteCard(evt) {
  const element = evt.target.closest('.elements__photo');
  element.remove();
}

// Открытие попапа 

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function editPopup() {
  namePopup();
  openPopup(popup);
}

function addPopup() {
  openPopup(popupFormAdd);
}

// Закрытие попапа

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function closeEditPopup() {
  closePopup(popup);
}

function closeAddPopup() {
  closePopup(popupFormAdd);
}

// Заполнение полей инфо 

let namePopup = function () {
    nameInput.setAttribute ('value', profileName.textContent);
    jobInput.setAttribute ('value', profileDescription.textContent);
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closeEditPopup();
}



//Обработчики

editButton.addEventListener('click', editPopup);
closeButton.addEventListener('click', closeEditPopup);
closeAddButton.addEventListener('click', closeAddPopup);
popupForm.addEventListener('submit', formSubmitHandler); 
addButton.addEventListener('click', addPopup);
popupFormAdd.addEventListener('submit', addCard);
