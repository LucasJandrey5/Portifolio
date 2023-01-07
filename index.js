var navOpened = false;

const HideShowNav = () => {
  navOpened ? (navOpened = false) : (navOpened = true);

  const nav = document.querySelector("#nav");
  console.log(navOpened ? "Opened" : "Closed");

  navOpened ? nav.classList.add("showNav") : nav.classList.remove("showNav");
};
