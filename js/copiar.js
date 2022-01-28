var btnCopiar = document.querySelector("#copiar");

btnCopiar.addEventListener("click", function (event) {
    event.preventDefault();

  var textoCopiar = document.querySelector("#txtEncriptador");
  textoCopiar.select();
  document.execCommand("copy");
})

/*src="/Users/lmena/DesktopCursos-de-Alura/Challenge-One/Challenge-1-encriptadorjs/encriptar.js"></script>
    <script src="/Users/lmena/DesktopCursos-de-Alura/Challenge-One/Challenge-1-encriptadorjs/desencriptar.js"></script>
    <script src="/Users/lmena/DesktopCursos-de-Alura/Challenge-One/Challenge-1-encriptadorjs/copiar.js"></script>*/