var result = 0;
var n = 0;
function btnCreateActiv(params) {
  let numrows = document.getElementById("num");
  let actividades = document.getElementById("inputNie").value;
  let caja = document.getElementById("caja");

  
  result = numrows.getElementsByTagName("tr");


  for (let i = 1; i <= actividades; i++) {
    let contenedor = document.createElement("div");
    let table = document.createElement("table");
    let celtitle = document.createElement("thead");
    let tableBody = document.createElement("tbody");
    let titletable = document.createElement("th");
    let rowtitle = document.createElement("tr");

    contenedor.className = "col";

    table.id = "Act-" + i;
    table.className = "table";

    rowtitle.className = "Title-table";

    titletable.innerHTML = "Activ-" + i;

    rowtitle.appendChild(titletable);
    celtitle.appendChild(rowtitle);
    table.appendChild(celtitle);

    for (let j = 0; j < result.length-1; j++) {
      let line = document.createElement("tr");
      let celda = document.createElement("td");
      let dato = document.createElement("input");
      
      dato.name = "input-" + i;
      dato.className = "form-control";
      dato.placeholder = "0";
      dato.type = "number";
      dato.min = "0";
      dato.max = "10";

      celda.appendChild(dato);
      line.appendChild(celda);
      tableBody.appendChild(line);
      table.appendChild(tableBody);
    }

    contenedor.appendChild(table);
    caja.append(contenedor);
  }
}
