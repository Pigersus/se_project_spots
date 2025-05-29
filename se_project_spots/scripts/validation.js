const showInputError = (inputElement, errorMessage) => {
  const errorMessageEl = document.querySelector(`#${inputElement.id}-error`);
  errorMessageEl.textContent = errorMessage;
  inputElement.classList.add("modal__input_type_error");
};

const hideInputError = (inputElement) => {
  const errorMessageEl = document.querySelector(`#${inputElement.id}-error`);
  errorMessageEl.textContent = "";
  inputElement.classList.remove("modal__input_type_error");
};

const checkInputValdity = (inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputElement.validationMessage);
  } else {
    hideInputError(inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add("modal__submit-btn_disabled");
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove("modal__submit-btn_disabled");
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".modal__input"));
  const buttonElement = formElement.querySelector(".modal__submit-btn");

  console.log(inputList);
  console.log(buttonElement);

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValdity(inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".modal__form"));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

enableValidation();
