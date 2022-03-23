document.addEventListener('DOMContentLoaded',function somaPares(){
    var resultado=0;
    for(let i = 2; i <= 1000; i++){
        if (i % 2 === 0){
            resultado = resultado + i;
        }
    }
   
    window.alert("A soma de todos os números pares positivos até 1000 é: " + resultado);
});