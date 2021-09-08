document.addEventListener("DOMContentLoaded", function(event){
// Obtengo el modal
var modal = document.getElementById("myModal");

// Obtengo el boton
var btn = document.getElementById("myBtn");

// Obtiene boton de cerrar modal
var span = document.getElementsByClassName("close")[0];

// Crea evento click para el boton
btn.onclick = function(){
    modal.style.display = "block";
}

// Cierro modal
span.onclick = function(){
    modal.style.display = "none";
}

});