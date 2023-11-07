const scrollToTop = (time) => {
  document.querySelector("html").style.scrollBehavior = "smooth";

  window.scrollTo({ top: 0 });

  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "";
  }, time);
};

export default scrollToTop;
