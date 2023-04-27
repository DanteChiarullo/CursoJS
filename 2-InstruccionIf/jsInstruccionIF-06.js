function mostrar() {
  let edad;
  edad = parseInt(document.getElementById("txtEdad").value);
  if (edad > 17) {
    alert("Es Adulto");
  } else if (edad >= 13) 
	alert("Es adolescente");
    else {
      alert("es niño");
    }
  }
