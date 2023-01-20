var navOpened = false;

const HideShowNav = () => {
  navOpened ? (navOpened = false) : (navOpened = true);

  const nav = document.querySelector("#nav");

  navOpened ? nav.classList.add("showNav") : nav.classList.remove("showNav");
};

const DarkMode = () => {
  var element = document.body;
  element.classList.toggle("dark-mode");
};
