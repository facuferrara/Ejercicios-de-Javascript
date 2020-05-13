var boton = document.querySelector("button")
var parrafo = document.querySelector("p")
//Esta vez definimos la función fuera del evento y la llamamos cambiarTexto
var cambiarTexto = function(){
    parrafo.textContent = "Alguien hizo click!"
}
// En el callback pasamos directamente el nombre de la función cambiarTexto
boton.addEventListener("click", cambiarTexto)