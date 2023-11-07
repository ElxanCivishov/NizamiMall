export const closeDropdown = ({ handleClose }) => {
  const dropdowns = Array.from(document.querySelectorAll(".dropdown"));

  const handleClickOutside = (event) => {
    const clickedElement = event.target;
    if (!dropdowns.some((dropdown) => dropdown.contains(clickedElement))) {
      handleClose();
    }
  };

  window.addEventListener("click", handleClickOutside);

  return () => {
    window.removeEventListener("click", handleClickOutside);
  };
};
