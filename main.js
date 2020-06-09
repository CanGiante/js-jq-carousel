$(document).ready(
  function() {


    $(".next").click(
      function() {

        mostraImgSuccessiva();

      }
    );

    $(".prev").click(
      function() {

        mostraImgPrecedente();

      }
    );


  }
);


//questa funzione toglie la classe "active" all'elemento che la detetiene
//e la attribuisce al fratello successivo, il quale,
//se ha classe "last", la attribuisce invece all'elemento con classe "first"
function mostraImgSuccessiva() {

  //salvo in una variabile il selettore riferito all'elemento che detiene la classe "active"
  var imgCorrente = $(".images img.active");
  var circleCorrente = $(".nav i.active");

  //gli rimuovo la classe
  imgCorrente.removeClass("active");
  circleCorrente.removeClass("active");

  //la aggiungo a chi mi pare
  if (imgCorrente.hasClass("last")) {
    //se sto sull'ultimo fratello
    //al primo
    $(".images img.first").addClass("active");
    $(".nav i.first").addClass("active");

  } else {
    //altrimenti
    //al fratello successivo
    imgCorrente.next().addClass("active");
    circleCorrente.next().addClass("active");

  }

}

//questa funzione toglie la classe "active" all'elemento che la detetiene
//e la attribuisce al fratello precedente, il quale,
//se ha classe "first", la attribuisce invece all'elemento con classe "last"
function mostraImgPrecedente() {

  //salvo in una variabile il selettore riferito all'elemento che detiene la classe "active"
  var imgCorrente = $(".images img.active");
  var circleCorrente = $(".nav i.active");

  //gli rimuovo la classe
  imgCorrente.removeClass("active");
  circleCorrente.removeClass("active");

  //la aggiungo a chi mi pare
  if (imgCorrente.hasClass("first")) {
    //se sto sul primo fratello
    //all'ultimo
    $(".images img.last").addClass("active");
    $(".nav i.last").addClass("active");

  } else {
    //altrimenti
    //al fratello precedente
    imgCorrente.prev().addClass("active");
    circleCorrente.prev().addClass("active");

  }

}
