function mostrar() {
  let i = 0;
  let total = 0

  while (i < 5) { 
 total += parseInt(prompt("ingrese su numero: "))
    i++;
  }
  document.getElementById("txtSuma").value = total;
  document.getElementById("txtPromedio").value = total / 5;
}
// let suma;
// let promedio;
// num1 = parseInt(prompt("ingrese un numero "));
// num2 = parseInt(prompt("ingrese un numero "));
// num3 = parseInt(prompt("ingrese un numero "));
// num4 = parseInt(prompt("ingrese un numero "));
// num5 = parseInt(prompt("ingrese un numero "));
// suma = num1 + num2 + num3 + num4 + num5;
// 
// document.getElementById("txtPromedio").value = promedio;
// document.getElementById("txtSuma").value = suma;
// promedio = suma / 5;
//i +=1;   i++;