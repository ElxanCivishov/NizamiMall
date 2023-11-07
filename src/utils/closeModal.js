export const closeModal = (handleClose) => {
  var modals = document.querySelectorAll(".modal");
  window.onclick = function (event) {
    modals.forEach((modal) => {
      if (modal === event.target) {
        handleClose();
      }
    });
  };
};
