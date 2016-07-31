// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap
//= require jquery-ui

$(document).ready(function() {
	// Este código corre después de que `document` fue cargado(loaded)
	// completamente.
	// Esto garantiza que si amarramos(bind) una función a un elemento
	// de HTML este exista ya en la página.

  //Creacion de la peticion para guardar los valores que el usuario haya puesto en el text area
  $( "#wordform" ).on("submit", function(event) {
    //retener la informacion hasta que acabe este proceso
    event.preventDefault();
    //Guardar los valores que el usuario haya ingresado con el serialize solo se guardaran los valores y no todo el form
    var form_data = $(this).serialize();
    //Crear el Ajax sobre el url que se quiere recargar y pasarle los valores que el usuario haya dado
    //Con el function(data) se hara el callback de el metodo y se guardaran los valores que haya regresado el metodo del controller
    $.post('/word', form_data, function(data) {
      //Agregar a el div abuela lo que contenga ahora data y lo sobreescriba cada vez
      $("#word").html(data);
    });
  });
  //Creacion de la peticion para guardar los valores que el usuario haya puesto en el text area
  $( "#videoform" ).on("submit", function(event) {
    //retener la informacion hasta que acabe este proceso
    event.preventDefault();
    //Guardar los valores que el usuario haya ingresado con el serialize solo se guardaran los valores y no todo el form
    var form_data = $(this).serialize();
    //Crear el Ajax sobre el url que se quiere recargar y pasarle los valores que el usuario haya dado
    //Con el function(data) se hara el callback de el metodo y se guardaran los valores que haya regresado el metodo del controller
    $.post('/video', form_data, function(data) {
        //Agregar a el div abuela lo que contenga ahora data y lo sobreescriba cada vez
        //$("#video").innerHTML(data);
        $("#video").html(data);
        console.log(data);
    });
  });
  $( "#morseform" ).on("submit", function(event) {
    //retener la informacion hasta que acabe este proceso
    event.preventDefault();
    //Guardar los valores que el usuario haya ingresado con el serialize solo se guardaran los valores y no todo el form
    var form_data = $(this).serialize();
    //Crear el Ajax sobre el url que se quiere recargar y pasarle los valores que el usuario haya dado
    //Con el function(data) se hara el callback de el metodo y se guardaran los valores que haya regresado el metodo del controller
    $.post('/morse', form_data, function(data) {
        //Agregar a el div abuela lo que contenga ahora data y lo sobreescriba cada vez
        //$("#video").innerHTML(data);
        $("#morse").html(data);
        console.log(data);
    });
  });
});
