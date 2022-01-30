var btnCopiar = document.querySelector("#copiar");

btnCopiar.addEventListener("click", function (event) {
    event.preventDefault();

  var textoCopiar = document.querySelector("#txtEncriptador");
  textoCopiar.select();
  document.execCommand("copy");
})