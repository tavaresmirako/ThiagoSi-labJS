document.addEventListener('DOMContentLoaded', function fatorial() {
    var n = window.prompt("Ecolha um número");
    var resultado = 1;
    for (var i = n; i > 1; i--) {
        resultado = resultado * i;

    }
    window.alert("O fatorial desse numero  é  " + resultado);
});