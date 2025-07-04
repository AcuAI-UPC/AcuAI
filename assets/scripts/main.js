const btn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu_horizontal");

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};


btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario-contacto");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !correo || !mensaje) {
      alert("Por favor completa todos los campos antes de enviar el formulario.");
      return;
    }
    alert("Formulario enviado correctamente");
    form.reset();
  });
});

// register
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario-register");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!nombre || !email || !password) {
        alert("Por favor completa todos los campos.");
        return;
      }
      alert("Registro exitoso");
      form.reset();

      setTimeout(() => {
        window.location.href = "../pages/login.html";
      }, 1000);
    });
  }
});

// olvide
document.getElementById("formulario-olvide").addEventListener("submit", function (e) {
  e.preventDefault();
    const email = document.getElementById("email").value.trim();
    if (!email) {
      alert("Por favor ingresa tu correo electrónico.");
      return;
    }
    alert("Hemos enviado un enlace de recuperación a tu correo.");
    this.reset();
    setTimeout(() => {
      window.location.href = "../pages/login.html";
    }, 1000);
});


