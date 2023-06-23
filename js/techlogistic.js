// Variables
let signInForm = document.getElementById("sign-in-form");
let signInEmail = document.getElementById("sign-in-form-email");
let signInPassword = document.getElementById("sign-in-form-password");

// Mostrar menú
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validar que existen variables
  if (toggle && nav) {
    // Agregamos la clase show-menu a la etiqueta div con la clase nav__menu
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// Quitar menú móvil
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // Cuando hacemos clic en nav__link, eliminamos la clase show-menu
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Cambiar encabezado de fondo
function scrollHeader() {
  const nav = document.getElementById("header");
  // cuando el desplazamiento es mayor que 200 de altura de ventana gráfica, agregue la clase de scroll-header a la etiqueta del encabezado
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

// Mostrar desplazamiento superior
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  // cuando el desplazamiento es superior a la altura de la ventana gráfica 560, agregue la clase show-scroll a la etiqueta scroll-top
  if (this.scrollY >= 560) scrollTop.classList.add("scroll-top");
  else scrollTop.classList.remove("scroll-top");
}

window.addEventListener("scroll", scrollTop);

// Animación de revelación de desplazamiento
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

// Cuando hace click en el botón submit, redirige a la página de dashboard
function redirect() {
  window.location.href = "dashboard/index.html";
}

// Formulario de Inicio de sesión

signInForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const patternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const patternPassword = /^.{8,}$/;

  console.log(signInEmail.value);
  console.log(signInPassword.value)

  if (
    patternEmail.test(signInEmail.value) &&
    patternPassword.test(signInPassword.value)
  ) {
    redirect();
  }

});
