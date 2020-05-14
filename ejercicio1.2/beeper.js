function CreaNuevoParrafo() {
    var h = document.getElementById("myH2");
    h.insertAdjacentHTML("afterend", "<p>BEEP</p>");
  }

  function colocarSombra() {
    document.getElementById("Sombrear").classList.toggle("mystyle");
  }
  function colocarSombraVCallback(){
    var seEjecutaEnEvento =colocarSombra();
  }