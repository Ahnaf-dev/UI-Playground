const openModalButton = returnNodeByClass(".open__modal");

function returnNodeByClass(className) {
  return document.querySelector(className);
}

openModalButton.addEventListener("click", generateModal);

function generateModal() {
  const modalContent =
    "Clean code principles lead to source code that's highly modular and thus easier to read and test. If you think of these practices as part of a house, clean code is the foundation. Implementing clean code principles is a foundational skill that pays off especially well when it's time to refactor code or bring code under test";
  const modal = createModal(modalContent);
  document.body.append(modal);
  setFocus(returnNodeByClass(".modal__content"));
  setTimeout(() => resetCoordsAndScale(modal), 100);
}

function createModal(modalContent) {
  const modal = document.createElement("div");
  modal.className = "modal center";

  const closeModal = () => {
    modal.remove();
    setFocus(openModalButton);
  };

  const modalContentContainer = document.createElement("div");
  modalContentContainer.className = "modal__content";
  modalContentContainer.ariaModal = true;
  modalContentContainer.role = "dialog";
  modalContentContainer.tabIndex = 0;

  modalContentContainer.addEventListener("keyup", (e) =>
    e.keyCode === 27 ? closeModal() : null
  );
  const closeModalBtn = document.createElement("button");
  closeModalBtn.className = "modal__close btn";
  closeModalBtn.innerText = "Close Modal";
  closeModalBtn.ariaLabel = "press ESC to close modal";

  closeModalBtn.addEventListener("click", closeModal);

  const modalText = document.createElement("p");
  modalText.innerText = modalContent;

  modalContentContainer.append(closeModalBtn);
  modalContentContainer.append(modalText);
  modal.append(modalContentContainer);

  setElemACoordsFromElemB(modal, openModalButton);

  return modal;
}

function setElemACoordsFromElemB(elemA, elemB) {
  const coords = elemB.getBoundingClientRect();
  let topY = coords.top;
  let leftX = coords.left;
  elemA.style.left = `${leftX}px`;
  elemA.style.top = `${topY}px`;
}

function resetCoordsAndScale(elem) {
  elem.style.left = "0";
  elem.style.top = "0";
  elem.style.transform = "scaleX(100%)";
}

function setFocus(elem) {
  elem.focus();
}
