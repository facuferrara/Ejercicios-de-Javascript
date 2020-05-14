var lis = document.querySelectorAll(" .parrafos > li")
var target = document.querySelector("#1")

for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener("click", function(){
        this.style.color="red"
    })
}

target.addEventListener("mouseover", function(){
    this.classList.add("highlight")
})
target.addEventListener("mouseleave", function(){
    this.classList.remove("highlight")
})