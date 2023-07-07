const hamburgerMenuBtn = document.querySelector(".hamburger-menu");
const closeMobileMenuBtn = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu-wrapper");

const hideElement = () => {
  mobileMenu.classList.toggle('hidden');
  console.log('clicked ....');
};

hamburgerMenuBtn.addEventListener('click', hideElement);
closeMobileMenuBtn.addEventListener('click', hideElement);
