const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
    liked: false,
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
    liked: false,
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
    liked: false,
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
    liked: false,
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
    liked: false,
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
    liked: false,
  },
];

const modals = document.querySelectorAll(".modal");

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

const imageModal = document.querySelector("#image-modal");
const imageModalImage = imageModal.querySelector(".modal__image-modal-image");
const imageModalCaption = imageModal.querySelector(".modal__image-caption");
const imageModalCloseBtn = imageModal.querySelector(".modal__image-close-btn");

const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".cards__list");

console.log(imageModal);

function toggleModal(modal) {
  modal.classList.toggle("modal_opened");
}

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function closeImageModal() {
  closeModal(imageModal);
}

modals.forEach((modal) => {
  modal.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("modal")) {
      closeModal(modal);
    }
  });

  document.addEventListener("keydown", (evt) => {
    if (evt.key == "Escape") {
      closeModal(modal);
    }
  });
});

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(".card__title");
  const cardImgEl = cardElement.querySelector(".card__image");
  const cardLikeBtn = cardElement.querySelector(".card__like-btn");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-btn");

  cardImgEl.src = data.link;
  cardImgEl.alt = data.name;
  cardNameEl.textContent = data.name;

  function toggleLike() {
    data.liked = !data.liked;
    if (data.liked) {
      cardLikeBtn.classList.add("card__like-btn_liked");
    } else {
      cardLikeBtn.classList.remove("card__like-btn_liked");
    }
  }

  function deleteCard() {
    cardElement.remove();
  }

  function toggleImage() {
    openModal(imageModal);
  }

  function imageActivation() {
    toggleImage(imageModal);
    imageModalImage.src = cardImgEl.src;
    imageModalImage.alt = cardImgEl.alt;
    imageModalCaption.textContent = cardNameEl.textContent;
  }

  cardLikeBtn.addEventListener("click", toggleLike);
  cardDeleteBtn.addEventListener("click", deleteCard);
  cardImgEl.addEventListener("click", imageActivation);

  return cardElement;
}

editIcon.addEventListener("click", function () {
  openModal(editModal);
  editName.value = profileName.textContent;
  editDescription.value = profileDescription.textContent;
});

editModalCloseIcon.addEventListener("click", function () {
  closeModal(editModal);
});

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editName.value;
  profileDescription.textContent = editDescription.value;
  closeModal(editModal);
}

newPostIcon.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostModalCloseIcon.addEventListener("click", function () {
  closeModal(newPostModal);
});

imageModalCloseBtn.addEventListener("click", closeImageModal);

function handleNewPostFormSubmit(evt) {
  evt.preventDefault();
  const newCard = {
    name: newPostCaption.value,
    link: newPostImageLink.value,
    liked: false,
  };
  console.log(newCard.name);
  console.log(newCard.link);
  cardList.prepend(getCardElement(newCard));
  toggleModal(newPostModal);
  newPostCaption.value = evt.target.reset();
  newPostImageLink.value = evt.target.reset();
}

editFormModal.addEventListener("submit", handleEditFormSubmit);
newPostFormModal.addEventListener("submit", handleNewPostFormSubmit);

initialCards.forEach((item) => {
  const cardElement = getCardElement(item);
  cardList.prepend(cardElement);
});
