window.addEventListener("load",iniciar,false);

function iniciar() {
    crearImagenes();
    var imagenes=document.getElementsByTagName("img");
    for (let i = 1; i < imagenes.length; i++) {
        imagenes[i].addEventListener("dragstart",drag,false);
    }
    var td=document.getElementById("tablita").getElementsByTagName("td");
    for (let i = 0; i < td.length; i++) {
        td[i].addEventListener("dragover",allowDrop,false);
        td[i].addEventListener("drop",drop,false);
    }
}

function allowDrop(ev) {
    ev.preventDefault();
    
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (data==ev.target.id) {
        ev.target.appendChild(document.getElementById(data));
    }
    
}

function crearImagenes() {
    var imagenes=new Array();
    var tdTabla=document.getElementById("imagenes").getElementsByTagName("td");
    for (let i = 0; i < 16; i++) {
        imagenes[i]=document.createElement("img");
        imagenes[i].setAttribute("id","imagen"+(i+1));
        imagenes[i].setAttribute("src","../Giralda2/"+(i+1)+".jpg");
    }
    shuffle(imagenes);
    
    for (let i = 0; i < tdTabla.length; i++) {
        tdTabla[i].appendChild(imagenes[i]);
    }
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}