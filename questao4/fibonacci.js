document.addEventListener('DOMContentLoaded',function(){

    var n = window.prompt("Escolha um número");
    

    fib(n);

    function fib(n){
     var fibonacci = [];
     fibonacci[0] = 0;
     fibonacci[1] = 1;
     for (var i = 2; i <= n; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
      }
        
        
        window.alert("O fibonacci desse número é " + fibonacci);
    }
    
});

