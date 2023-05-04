/*
al presionar el botón pedir la CLAVE (ayuda: es abc123)*/
function mostrar() {
  let pass_guardado ="abc123"
  let clave
  clave= prompt("Ingrese clave")
while(clave != pass_guardado ){
clave = prompt("Clave invalida. Reingrese clave ")
}
alert("bienvenido")
}