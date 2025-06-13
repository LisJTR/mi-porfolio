function toggleImagen() {
  const imagen = document.getElementById("miImagen");
  imagen.classList.toggle("visible");
}

// Ocultar al hacer clic fuera
document.addEventListener("click", function (event) {
  const contenedor = document.getElementById("contenedorCertificado");
  const imagen = document.getElementById("miImagen");

  if (!contenedor.contains(event.target)) {
    imagen.classList.remove("visible");
  }
});