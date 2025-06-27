const btn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu_horizontal");

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
