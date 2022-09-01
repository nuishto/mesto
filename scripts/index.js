//popup edit
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupForm = popupEditProfile.querySelector('.popup__container-form');
const nameInput = popupForm.querySelector('.popup__container-input_type_name');
const jobInput = popupForm.querySelector('.popup__container-input_type_description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

//popup add

const popupFormAdd = document.querySelector('.popup_add');
const cardNameInput = popupFormAdd.querySelector('.popup__container-input_type_title');
const cardLinkInput = popupFormAdd.querySelector('.popup__container-input_type_link');

//popup openphoto

const popupZoomImage = document.querySelector('.popup_photo');
const popupPhoto = popupZoomImage.querySelector('.popup__photo');
const popupCaption = popupZoomImage.querySelector('.popup__caption');
const popupImage = popupZoomImage.querySelector('.popup__photo');

//buttons
const editButton = document.querySelector('.profile__button-edit');
const closeButton = document.querySelector('.popup__container-close');
const closeAddButton = document.querySelector('.popup__container-add-close')
const addButton = document.querySelector('.profile__add-photo');
const closePhotoButton = document.querySelector('.popup__container-photo-close');

//Карточки из коробки
const elements = document.querySelector('.elements');
const templateElement = document.querySelector('.template');

// Добавление новой карточки

function addCard(evt) {
  evt.preventDefault();
  const title = cardNameInput.value;
  const image = cardLinkInput.value;
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
    newCardElement.querySelector('.elements__photo-name').alt = element.name;
//OpenPhoto
    const cardPicture = newCardElement.querySelector('.elements__photo-image');
    cardPicture.addEventListener('click', evt => openPicture(evt, element.link, element.name));
    return newCardElement;
};

function renderInitialCards() {
  initialCards.forEach(element => {
    elements.prepend(newCard(element));
  });
}

renderInitialCards();

//Like function

function like(evt, likeButton) {
    likeButton.classList.toggle('elements__photo-like_active');
  }

//Delete function

function deleteCard(evt) {
  const element = evt.target.closest('.elements__photo');
  element.remove();
}

//Open photo function

function openPicture(evt, link, name) {
  openPopup(popupZoomImage);
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;
}

// Открытие попапа 

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function openEditProfilePopup() {
  fillInEditProfileFormInputs();
  openPopup(popupEditProfile);
}

function openAddCardPopup() {
  document.getElementById('addcard').reset();
  openPopup(popupFormAdd);
}

// Закрытие попапа

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function closeEditPopup() {
  closePopup(popupEditProfile);
}

function closeAddPopup() {
  closePopup(popupFormAdd);
}

function closePhotoPopup() {
  closePopup(popupZoomImage);
}

// Заполнение полей инфо 

let fillInEditProfileFormInputs = function () {
    nameInput.setAttribute ('value', profileName.textContent);
    jobInput.setAttribute ('value', profileDescription.textContent);
}

function submitEditProfileForm (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closeEditPopup();
}

//Обработчики

editButton.addEventListener('click', openEditProfilePopup);
closeButton.addEventListener('click', closeEditPopup);
closeAddButton.addEventListener('click', closeAddPopup);
popupForm.addEventListener('submit', submitEditProfileForm); 
addButton.addEventListener('click', openAddCardPopup);
popupFormAdd.addEventListener('submit', addCard);
closePhotoButton.addEventListener('click', closePhotoPopup);

