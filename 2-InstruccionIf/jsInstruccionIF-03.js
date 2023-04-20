function mostrar() {
  let edad;
  edad = parseInt(document.getElementById("txtEdad").value);
  if (edad >= 18) {
    alert("es mayor de edad");
  } else {
    alert("es menor de edad");
  }//else sirve por si la rta es negativa para ya tener la rta sin necesidad de volver a preguntar con el if
}
