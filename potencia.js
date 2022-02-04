document.addEventListener('DOMContentLoaded', function potencia() {
    let números = new Array();
    for (var i = 1; i <= 30; i++) {
        números = Math.pow(4, i);
    }

    window.alert("As 30 primeiras potências de 4 " + números);

});