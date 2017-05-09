var textoIzq = document.getElementById("izq");
var textoDer = document.getElementById("der");
var cont = 0;
//Función que verifica los links
function verificaClick(event) {
  cont++;//Contador que aumenta cada que entra a la función
  var obj = event.target;//Obtiene el elemento que detona el evento
  if(cont%2 != 0){
    ocultar(obj);
  }
  else if (cont%2 == 0) {
    mostrar(obj);
  }
}
// Función para ocultar elementos
function ocultar(obj) {
  if(obj.id == 1){//Caso boton Origen
    textoIzq.style.visibility = "hidden";
  }
  else if(obj.id == 2){//Caso boton Exhibición
    textoDer.style.visibility = "hidden";
  }
}
// Función para mostrar el texto
function mostrar(obj) {
  if(obj.id ==1){//Caso boton Origen
    textoIzq.style.visibility = "visible"
  }
  else{//Caso boton Exhibición
    textoDer.style.visibility = "visible";
  }
}

// Función para cerrar fotografías
var cerrar = document.getElementsByClassName("cerrar");
for(var i = 0; i<cerrar.length; i++){
  cerrar[i].addEventListener("click", cerrarFnc);
}

function cerrarFnc() {
  var padre = this.parentElement;
  padre.style.display="none";
}
// Función para restaurar las fotografiás
function restaurar() {
  for(var i = 0; i<cerrar.length; i++){
    cerrar[i].parentElement.style.display = "inline-block";
  }
}
