var btnDesencriptar = document.querySelector("#desencriptar");
var palabraDesencriptada;

btnDesencriptar.addEventListener("click", function (event) {
    event.preventDefault();
    var item = document.querySelector("#txtEncriptador");

    var desencriptada = item.value.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i")
        .replace(/ober/gi, "o").replace(/ufat/gi, "u");

    console.log(desencriptada);
    palabraDesencriptada = desencriptada;
    var form = document.querySelector("#prueba1");
    form.reset();
    document.querySelector("#txtEncriptador").textContent = palabraDesencriptada;

})

