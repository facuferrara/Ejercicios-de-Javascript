let myColor = document.getElementById("txtcolor")

//indica el color seleccionado por el user
function cambiarColor(){
    let col = document.body.style.backgroundColor = myColor.value
    console.log("el color elegido es "+col);
}

//cambia a white
function borrar(){
    myColor.value = ""
    document.body.style.backgroundColor = "white"
}


document.querySelector("#txtcolor").addEventListener('keydown', function (i) {
    if(i.keyCode==13){
        cambiarColor()
        console.log("apretaste enter")
    }
    if(i.keyCode==8){
        borrar()
    }
})