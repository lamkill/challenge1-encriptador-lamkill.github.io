var btnEcriptar = document.querySelector("#encriptar");
var palabraEncriptada;

btnEcriptar.addEventListener("click", function (event) {
    event.preventDefault();
    var item = document.querySelector("#txtEncriptador");
    var palabra = item.value;
    var letras = palabra.split("");  //la palabra u oración se separa en caracteres, para luego buscar las vocales que seran  reemplazadas.
    var encriptada = [];

    for (var i = 0; i < palabra.length; i++) {
        if (letras[i] == 'a') {
            letras[i] = 'ai';
        } else if (letras[i] == 'e') {
            letras[i] = 'enter';
        } else if (letras[i] == 'i') {
            letras[i] = 'imes';
        } else if (letras[i] == 'o') {
            letras[i] = 'ober';
        } else if (letras[i] == 'u') {
            letras[i] = 'ufat';
        }
        encriptada += letras[i];
    }

    console.log(encriptada);
    palabraEncriptada = encriptada;
    var form = document.querySelector("#prueba1");
    form.reset();
    document.querySelector("#txtEncriptador").textContent = palabraEncriptada;

})

