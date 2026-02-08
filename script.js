function toggleImagen(icono) {
  const contenedor = icono.parentElement;
  const imagen = contenedor.querySelector(".imagen-certificado");

  imagen.classList.toggle("visible");
}

// cerrar al hacer click fuera
document.addEventListener("click", function (event) {
  document.querySelectorAll(".contenedor-certificado").forEach(contenedor => {
    if (!contenedor.contains(event.target)) {
      contenedor
        .querySelector(".imagen-certificado")
        .classList.remove("visible");
    }
  });
});






