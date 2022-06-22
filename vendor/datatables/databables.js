var n = 0;

function createTest() {
  var number =  document.getElementsByName("inputNie").values;
  var caja = document.getElementsByName("caja").getelementsByTagsName("tr").lenght-1;
  console.log(caja);
}
window.addEventListener("", {
 
 
});

$(document).ready(function(createTest) {
  var nrows = 0; var nres = 0;
     $("table tr").each(function() {
         nrows++;
     })
     $("#nrows").html(nrows);
     $(".isres").each(function() {
         nres++;
     })
     $("#nres").html(nres);
 });
 console.log(nrows);

 //esto estaba viendo
 //https://es.stackoverflow.com/questions/335592/contar-filas-de-una-tabla-html