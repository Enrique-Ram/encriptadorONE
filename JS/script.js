/*
`La letra "e" es convertida para "enter"`
`La letra "i" es convertida para "imes"`
`La letra "a" es convertida para "ai"`
`La letra "o" es convertida para "ober"`
`La letra "u" es convertida para "ufat"
*/

function encriptar(){
    var textoIngresado = document.getElementById("textoIngresado").value.toLowerCase();

    var textoCifrado = textoIngresado.replace(/e/igm, "enter");
    var textoCifrado = textoCifrado.replace(/o/igm, "ober");
    var textoCifrado = textoCifrado.replace(/i/igm, "imes");
    var textoCifrado = textoCifrado.replace(/a/igm, "ai");
    var textoCifrado = textoCifrado.replace(/u/igm, "ufat");

    document.getElementById("muneco").style.display = "none";
    document.getElementById("mensajeTexto").style.display = "none";
    document.getElementById("codificacion").style.fontSize = "24px";
    document.getElementById("codificacion").style.marginTop = "80%";
    document.getElementById("codificacion").innerHTML = textoCifrado;
    document.getElementById("textoIngresado").value = "";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
    var textoIngresado = document.getElementById("textoIngresado").value.toLowerCase();

    var textoCifrado = textoIngresado.replace(/enter/igm, "e");
    var textoCifrado = textoCifrado.replace(/ober/igm, "o");
    var textoCifrado = textoCifrado.replace(/imes/igm, "i");
    var textoCifrado = textoCifrado.replace(/ai/igm, "a");
    var textoCifrado = textoCifrado.replace(/ufat/igm, "u");

    document.getElementById("muneco").style.display = "none";
    document.getElementById("mensajeTexto").style.display = "none";
    document.getElementById("codificacion").innerHTML = textoCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    var textoCopiar = document.querySelector("#codificacion");
    textoCopiar.select();
    document.execCommand("copy");
}