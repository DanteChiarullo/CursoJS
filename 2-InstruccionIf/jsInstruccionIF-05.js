function mostrar()
{
	let edad;
  edad = parseInt(document.getElementById("txtEdad").value);
  if (edad < 13 || edad > 17 ) {
    alert("No es Adolescente");
}
}// else es por si es negativa la rta