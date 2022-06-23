var n = 0;
var result = 0;

function createTest() {
  const number = document.getElementById("inputNie").value;
  const box = document.getElementById("caja");
  var titulo = document.getElementById("title-table");
  var fila = document.getElementById("fila");

  console.log("Numero de columnas: " + number);

  if (
    typeof box === "object" &&
    box !== null &&
    "getElementsByTagName" in box
  ) {
    result = box.getElementsByTagName("tr");
  }

  var tCelda = document.createElement("th");
  var celda = document.createElement("td");
  var dato = document.createElement("input");

  dato.type = "number";
  dato.placeholder = 0;
  dato.value = 0;
  tCelda.innerHTML = "Eva-" + n;

  if (result[n] === 0) {
    titulo.appendChild(tCelda);
  } else if(result[n]<= result.length){
    
    for (let i = n; i <= result.length; i++) {
      celda.appendChild(dato);
      fila.appendChild(celda);
    }
    
  }

  console.log("Numeros de filas: " + result.length);
}

//esto estaba viendo
//https://es.stackoverflow.com/questions/335592/contar-filas-de-una-tabla-html
