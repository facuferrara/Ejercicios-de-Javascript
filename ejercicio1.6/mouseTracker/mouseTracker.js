let myBody = document.body
let myImg = document.getElementById("imagen").style
let seguir = false;

myBody.even
function removerMove(){
    myBody.removeEventListener("mousemove",function(){
        console.log("move parado")
    })
}
myBody.addEventListener("mouseup",function(){
    console.log("mouseup")
    seguir=false;
    removerMove()
})
myBody.addEventListener("mousedown",function(){
    console.log("mousedown")
    seguir = true;
})
myBody.addEventListener("mousemove",function(evento){
    if(seguir){
        myImg.top = evento.clientY
        myImg.left = evento.clientX
    }
})