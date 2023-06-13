// Show menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    // We add the show-menu class to the div tag with the nav__menu class
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// Remove menu mobile
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // when we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Change background header
function scrollHeader() {
  const nav = document.getElementById("header");
  // when the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

// Show scroll top
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  // when the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top
  if (this.scrollY >= 560) scrollTop.classList.add("scroll-top");
  else scrollTop.classList.remove("scroll-top");
}

window.addEventListener("scroll", scrollTop);

// Scroll reveal animation
const sr = ScrollReveal({
  origin: "bottom",
  distance: "20px",
  duration: 2000,
  reset: null,
});

sr.reveal(
  ".hero__data, .hero__img, .about__data, .features, .features-card, .banner, .big-card, .clients__card, .banner-chart, .contact, .copyright",
  {
    interval: 200,
  }
);
