function mostrar() {
  let mes = document.getElementById("txtMes").value;
  switch (mes) {
    case "Enero":
      alert("que comiences bien el año !!!.");
      break;
    case "Marzo":
      alert("a clases!!!.");
      break;
    case "Julio":
      alert("Se vienen las vacaciones!!!.");
      break;
    case "Diciembre":
      alert("Felices fiestas!!!.");
      break;
    default:
      alert("Ese mes no tiene respuesta");
  }
}
//{
//if (mes == "Enero") {
//   alert("que comiences bien el año !!!.");
// } else if (mes == "Marzo") {
// alert("a clases!!!.");
// } else if (mes == "Julio") {
//   alert("Se vienen las vacaciones!!!.");
// } else if (mes == "Diciembre") {
//   alert("Felices fiestas!!!.");
//} else {
//  alert("Ese mes no tiene respuesta");
