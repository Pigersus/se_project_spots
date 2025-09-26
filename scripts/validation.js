const settings = {
  inputErrorClass: "modal__input_type_error",
  disableButtonClass: "modal__submit-btn_disabled",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  formSelector: ".modal__form"
}

const showInputError = (config, inputElement, errorMessage) => {
  const errorMessageEl = document.querySelector(`#${inputElement.id}-error`);
  errorMessageEl.textContent = errorMessage;
  inputElement.classList.add(config.inputErrorClass);
  // inputElement.classList.add(config.inputErrorCLass);
};

const hideInputError = (config, inputElement) => {
  const errorMessageEl = document.querySelector(`#${inputElement.id}-error`);
  errorMessageEl.textContent = "";
  inputElement.classList.remove(config.inputErrorClass);
};

const checkInputValdity = (config, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(config, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(config, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

function resetValidation(config, inputList){
  inputList.forEach((input) => hideInputError(config, input));
}

function disableButton(config, buttonElement){
  buttonElement.disabled = true;
  buttonElement.classList.add(config.disableButtonClass);
}

function enableButton(config, buttonElement){
  buttonElement.disabled = false;
  buttonElement.classList.remove(config.disableButtonClass);
}

const toggleButtonState = (config, inputList, buttonElement) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    disableButton(config, buttonElement);
  } else {
    enableButton(config, buttonElement);
  }
};

const setEventListeners = (config, formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  console.log(inputList);
  console.log(buttonElement);

  toggleButtonState(config, inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValdity(config, inputElement);
      toggleButtonState(config, inputList, buttonElement);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(config, formElement);
  });
};

// enableValidation();

enableValidation(settings)