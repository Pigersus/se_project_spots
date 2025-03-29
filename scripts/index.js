const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const editModal = document.querySelector("#edit-modal");
const editIcon = document.querySelector(".profile__edit-btn");
const editModalCloseIcon = editModal.querySelector(".modal__close-btn");
const editName = editModal.querySelector("#name");
const editDescription = editModal.querySelector("#description");
const editFormModal = editModal.querySelector(".modal__form");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const newPostModal = document.querySelector("#new-post-modal");
const newPostIcon = document.querySelector(".profile__add-btn");
const newPostModalCloseIcon = newPostModal.querySelector(".modal__close-btn");
const newPostImageLink = newPostModal.querySelector("#image-link");
const newPostCaption = newPostModal.querySelector("#caption");
const newPostFormModal = newPostModal.querySelector(".modal__form");

const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(".card__title");
  const cardImgEl = cardElement.querySelector(".card__image");

  cardImgEl.src = data.link;
  cardImgEl.alt = data.name;
  cardNameEl.textContent = data.name;

  return cardElement;
}

function toggleEditModal() {
  editModal.classList.toggle("modal_opened");
}

editIcon.addEventListener("click", function () {
  toggleEditModal();
  editName.value = profileName.textContent;
  editDescription.value = profileDescription.textContent;
});

editModalCloseIcon.addEventListener("click", function () {
  toggleEditModal();
});

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editName.value;
  profileDescription.textContent = editDescription.value;
  toggleEditModal();
}

function toggleNewPostModal() {
  newPostModal.classList.toggle("modal_opened");
}

newPostIcon.addEventListener("click", function () {
  toggleNewPostModal();
  newPostCaption.value = "";
  newPostImageLink.value = "";
});

newPostModalCloseIcon.addEventListener("click", function () {
  toggleNewPostModal();
});

function handleNewPostFormSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: newPostCaption.value,
    link: newPostImageLink.value,
  };
  console.log(newCard.name);
  console.log(newCard.link);
  cardList.prepend(getCardElement(newCard));
  toggleNewPostModal();
}

editFormModal.addEventListener("submit", handleEditFormSubmit);
newPostFormModal.addEventListener("submit", handleNewPostFormSubmit);

initialCards.forEach((item) => {
  const cardElement = getCardElement(item);
  cardList.prepend(cardElement);
});
