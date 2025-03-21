let initialCards = [];

let obj1 = {
  name: "Val Thorens",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
};

let obj2 = {
  name: "Restaurant terrace",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
};

let obj3 = {
  name: "An outdoor cafe",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
};

let obj4 = {
  name: "A very long bridge, over the forest and through the trees",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
};

let obj5 = {
  name: "Tunnel with morning light",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
};

let obj6 = {
  name: "Mountain house",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
};

initialCards.push(obj1);
initialCards.push(obj2);
initialCards.push(obj3);
initialCards.push(obj4);
initialCards.push(obj5);
initialCards.push(obj6);

const editModal = document.querySelector("#edit-modal");
const editIcon = document.querySelector(".profile__edit-btn");
const editModalCloseIcon = editModal.querySelector(".modal__close-btn");
const editName = editModal.querySelector("#name");
const editDescription = editModal.querySelector("#description");
const editFormModal = editModal.querySelector(".modal__form");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".cards__list");

function getCardElement(data) {
  console.log(data);
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(".card__title");
  const cardImgEl = cardElement.querySelector(".card__image");

  cardImgEl.setAttribute("src", data.link);
  cardImgEl.setAttribute("alt", data.name);
  cardNameEl.textContent = data.name;

  return cardElement;
}

editIcon.addEventListener("click", function () {
  editModal.classList.toggle("modal__opened");
  console.log(editName);
  editName.value = profileName.textContent;
  editDescription.value = profileDescription.textContent;
});

editModalCloseIcon.addEventListener("click", function () {
  editModal.classList.toggle("modal__opened");
});

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editName.value;
  profileDescription.textContent = editDescription.value;
  editModal.classList.toggle("modal__opened");
}

editFormModal.addEventListener("submit", handleEditFormSubmit);

for (let i = 0; i < initialCards.length; i++) {
  const cardElement = getCardElement(initialCards[i]);
  cardList.prepend(cardElement);
}
