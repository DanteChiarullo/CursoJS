/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarDescuento() {
  let importe;
  let descuento;
  let resultado;
  importe = parseInt(document.getElementById("txtImporte").value);
  resultado = parseInt(document.getElementById("txtResultado").value);
  descuento = importe * 0.25;
  resultado = importe - descuento;
  document.getElementById("txtResultado").value = resultado;
}
