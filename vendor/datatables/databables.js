var n = 0;

function generate() {
  n++;
  //Obtener datos
  var dato = document.getElementById("dato").value;
  var caja = document.getElementById("caja");
  

  
  
  //Crean objetos
  var contenedor = document.createElement('tr');
  var numero = document.createElement("th");
  var btn1 = document.createElement('input');
  var btn2 = document.createElement('input');
  
  //Propiedades
  texto.innerHTML = n + " - "+ dato
  btn1.name="btn"+n;
  btn2.name="btn"+n;
  btn1.type="radio";
  btn2.type="radio";
  
  //Herencia
  contenedor.appendChild(texto);
  contenedor.appendChild(btn1);
  contenedor.appendChild(btn2);
  caja.appendChild(contenedor);
  
}