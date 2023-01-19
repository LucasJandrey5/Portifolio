var navOpened = false;

const HideShowNav = () => {
  navOpened ? (navOpened = false) : (navOpened = true);

  const nav = document.querySelector("#nav");

  navOpened ? nav.classList.add("showNav") : nav.classList.remove("showNav");
};
