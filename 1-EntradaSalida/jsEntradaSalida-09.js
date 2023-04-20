/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{let sueldo
	let aumento
	let resultadofinal
 sueldo = parseInt(document.getElementById("txtSueldo").value);
 resultadofinal= parseInt(document.getElementById("txtResultado").value);
  aumento = sueldo * 0.10
  resultadofinal = aumento + sueldo
 document.getElementById("txtResultado").value = resultadofinal
}
