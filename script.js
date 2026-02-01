document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const estado = document.getElementById("estado");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const datos = {
      nombre: form.nombre.value,
      email: form.email.value,
      mensaje: form.mensaje.value
    };

    estado.textContent = "Enviando...";
    estado.style.color = "black";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
      });

      const result = await res.json();

      estado.textContent = result.message;
      estado.style.color = "green";
      form.reset();
    } catch (error) {
      estado.textContent = "Error al enviar";
      estado.style.color = "red";
    }
  });
});
