var n = 0;

function createTest() {
  const number = document.getElementById("inputNie").values;
  const box = document.getElementById("caja");
  var result = 0;
  console.log(number);

  if (
    typeof box === "object" &&
    box !== null &&
    "getElementsByTagName" in box
    ) {
      result = box.getElementsByTagName("tr");
    
    }
    
    console.log(result.length);



}

//esto estaba viendo
//https://es.stackoverflow.com/questions/335592/contar-filas-de-una-tabla-html
