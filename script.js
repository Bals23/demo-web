document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const estado = document.getElementById("estado");

  if (!form) {
    console.log("Formulario no encontrado");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const datos = new FormData(form);
    const nombre = datos.get("nombre");

    estado.textContent = "Gracias " + nombre + ", mensaje preparado para enviar.";
    estado.style.color = "green";

    form.reset();
  });
});
