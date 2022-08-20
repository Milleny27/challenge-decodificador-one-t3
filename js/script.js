window.onload = function(){

    document.getElementById("copiar-texto").addEventListener("click", clipboardCopy);
    async function clipboardCopy() {
        let text = document.getElementById("saida").value;
        await navigator.clipboard.writeText(text);
        document.getElementById("entrada").value = "";
        document.getElementById("saida").value = "";
        alert("Texto copiado!");
    }

    function criptografar(){

            let frase = textEntrada.value.toLowerCase();

            let textoCriptografado = frase
            .replaceAll("e", "enter")
            .replaceAll("i", "imes")
            .replaceAll("a", "ai")
            .replaceAll("o", "ober")
            .replaceAll("u","ufat");

            textSaida.value = textoCriptografado;

            document.getElementById("menino").style.display = "none";
            document.getElementById("text1").style.display = "none";
            document.getElementById("text2").style.display = "none";
            document.getElementById("saida").style.display = "inline";
            document.getElementById("copiar-texto").style.display = "inline";
        
    }

    function descriptografar(){

            let frase = textEntrada.value.toLowerCase();

            let textoDescriptografado = frase
            .replaceAll("enter", "e")
            .replaceAll("imes", "i")
            .replaceAll("ai", "a")
            .replaceAll("ober", "o")
            .replaceAll("ufat","u");

            textSaida.value = textoDescriptografado;

            document.getElementById("menino").style.display = "none";
            document.getElementById("text1").style.display = "none";
            document.getElementById("text2").style.display = "none";
            document.getElementById("saida").style.display = "inline";
            document.getElementById("copiar-texto").style.display = "inline";
            
    }

    function verifica() {

        if (document.getElementById("entrada").value === "") {
            document.getElementById("copiar-texto").style.display = "none";
            document.getElementById("saida").style.display = "none";
        } 
    }

    let textEntrada = document.getElementById("entrada");
    let textSaida = document.getElementById("saida");

    let buttonCriptografar = document.getElementById("criptografar");
    let buttonDescriptografar = document.getElementById("descriptografar");
    let buttonCopiar = document.getElementById("copiar-texto");
    verifica();

    buttonCriptografar.onclick = criptografar;
    buttonDescriptografar.onclick = descriptografar;

}