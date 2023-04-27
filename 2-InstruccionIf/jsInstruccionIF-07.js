function mostrar() {
  let edad;
  let estado;
  edad = parseInt(document.getElementById("txtEdad").value);
  estadocivil = document.getElementById("estadoCivil").value;

  if (edad < 18 && estado != "Soltero") {
    alert("sos muy pequeño para no ser soltero");
  }
}
