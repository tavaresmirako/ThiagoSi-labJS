/*função primeNumbers(num) {
    let números = new Array();
    for (var i = 0; i <= num; i++) {
      if (éPrimo(i)){
        números.push(i);
      }
    }
    números de retorno;
  }
  função éPrimo(num){
    for(seja i = 2; i < núm; i++)
      if(num % i === 0) {
          retorna falso
      };
    retorna num > 1;
  }
  console.log(primeNumbers(1000));*/
document.addEventListener('DOMContentLoaded', function Primos() {

    mod = 0;
    primos = "";

    for (n = 1; n < 1000; n++) {

        mod = 1;

        for (z = 1; z < n; z++) {
            mods += n % z === 0 ? 1 : 0;
        }

        if (mods == 2) {
            primos += primos === "" ? n : "\n" + n;
        }

    }

    window.alert("Os numeros são" + primos);

});