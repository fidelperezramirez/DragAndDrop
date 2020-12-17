window.addEventListener("load",iniciar,false);

function iniciar() {
    var imagenes=document.getElementsByTagName("img");
    for (let i = 0; i < imagenes.length-1; i++) {
        imagenes[i].addEventListener("dragstart",arrastrado,false);
    }
    var secciones=document.getElementsByTagName("section");
    for (let i = 0; i < secciones.length; i++) {
        console.log(secciones[i]);
        secciones[i].addEventListener("drop",soltado,false);
    }
}
    function arrastrado(ev){
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function soltado(ev){
        ev.preventDefault();
        console.log("hola");
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }