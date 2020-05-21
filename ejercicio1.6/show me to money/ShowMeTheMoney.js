let imgGoku = document.getElementById("goku")
let imgVegeta = document.getElementById("vegeta")
let imgGohan = document.getElementById("gohan")
let botonGoku = document.getElementById("money")
let botonVegeta = document.getElementById("miami")
let botonGohan = document.getElementById("rickyfort")

function toggleImg(imagen){imagen.classList.toggle("oculto")}

botonGoku.addEventListener("click",function(){
    toggleImg(imgGoku)
},false)
botonVegeta.addEventListener("click",function(){
    toggleImg(imgVegeta)
},false)
botonGohan.addEventListener("click",function(){
    toggleImg(imgGohan)
},false)

imgGoku.addEventListener("click", function(){this.classList.toggle("oculto")},false)
imgVegeta.addEventListener("click", function(){this.classList.toggle("oculto")},false)
imgGohan.addEventListener("click", function(){this.classList.toggle("oculto")},false)