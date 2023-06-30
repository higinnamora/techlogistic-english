// Variables
const signInForm = document.getElementById("sign-in-form");
const signInEmail = document.getElementById("sign-in-form-email");
const signInPassword = document.getElementById("sign-in-form-password");

const signUpForm = document.getElementById("sign-up-form");
const signUpName = document.getElementById("sign-up-form-name");
const signUpEmail = document.getElementById("sign-up-form-email");
const signUpPassword = document.getElementById("sign-up-form-password");
const signUpPasswordConfirm = document.getElementById(
  "sign-up-form-password-confirm"
);

const recoveryPasswordForm = document.getElementById("recovery-password-form");
const recoveryPasswordEmail = document.getElementById(
  "recovery-password-form-email"
);

// Expresiones regulares
const patternEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const patternName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const patternPassword = /^.{8,}$/;

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
showMenu("navigation-toggle", "navigation-menu");

// Quitar menú móvil
const navLink = document.querySelectorAll(".navigation__link");

function linkAction() {
  const navMenu = document.getElementById("navigation-menu");
  // Cuando hacemos clic en nav__link, eliminamos la clase show-menu
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

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
    interval: 100,
  }
);

// Cuando hace click en el botón submit, redirige a la página de dashboard
function redirect(path) {
  window.location.href = path;
}

// Formulario de Inicio de sesión

if (signInForm) {
  signInForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (
      patternEmail.test(signInEmail.value) &&
      patternPassword.test(signInPassword.value)
    ) {
      redirect("dashboard/index.html");
    }
  });
}

// Formulario de Registro

// Validar que las contraseñas coincidan
function checkPassword() {
  if (signUpPassword.value !== signUpPasswordConfirm.value) {
    alert("Las contraseñas no coinciden");
    return false;
  }
  return true;
}

if (signUpForm) {
  signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Por defecto el valor de la variable es false
    let isPasswordValid = false;
    if (checkPassword()) {
      isPasswordValid = true;
    }

    if (
      isPasswordValid &&
      patternEmail.test(signUpEmail.value) &&
      patternName.test(signUpName.value) &&
      patternPassword.test(signUpPassword.value) &&
      patternPassword.test(signUpPasswordConfirm.value)
    ) {
      redirect("./proceso-exitoso.html");
    }
  });
}

// Formulario de Recuperación de contraseña

if (recoveryPasswordForm) {
  recoveryPasswordForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (patternEmail.test(recoveryPasswordEmail.value)) {
      redirect("./proceso-exitoso.html");
    }
  });
}
