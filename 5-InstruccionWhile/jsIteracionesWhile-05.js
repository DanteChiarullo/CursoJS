/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino*/
function mostrar() {
  let sexo;
  sexo = prompt("Ingrese f/m").toLowerCase();
  while (sexo != "f" && sexo != "m") {
    sexo = prompt("Sexo invalido.Ingrese sexo f/m ").toLowerCase();
  }
  document.getElementById("txtSexo").value = sexo;
}
