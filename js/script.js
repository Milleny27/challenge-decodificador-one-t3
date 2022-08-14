window.onload = function(){
    function criptografar(){
        let frase = textEntrada.value;

        let textoCriptografado = frase
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u","ufat");

        textSaida.value = textoCriptografado;
    }

    function descriptografar(){
        let frase = textSaida.value;

        let textoDescriptografado = frase
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat","u");

        textSaida.value = textoDescriptografado;
    }

    function copiar() {
        document.getElementById("textSaida").Select();
        document.execCommand("copy");
        alert("Text copiado");
    }

    let textEntrada = document.getElementById("entrada");
    let textSaida = document.getElementById("saida");

    let buttonCriptografar = document.getElementById("criptografar");
    let buttonDescriptografar = document.getElementById("descriptografar");
    let buttonCopiar = document.getElementById("copiar-texto");

    buttonCriptografar.onclick = criptografar;
    buttonDescriptografar.onclick = descriptografar;
    buttonCopiar.onclick = copiar;


}