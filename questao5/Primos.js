/*function primeNumbers(num) {
    let numbers = new Array();
    for (var i = 0; i <= num; i++) {
      if (isPrime(i)){
        numbers.push(i);
      }
    }
    return numbers;
  }
  function isPrime(num) {
    for(let i = 2; i <num; i++)
      if(num % i === 0) {
          return false
      };
    return num > 1;
  }
  console.log(primeNumbers(1000));*/
  document.addEventListener('DOMContentLoaded',function Primos(){
    
    mods = 0; 
    primos = ""; 
     
    for(n = 1; n < 1000; n++){ 
     
        mods = 1; 
     
        for(z = 1; z < n; z++){ 
            mods += n % z === 0 ? 1 : 0; 
        } 
     
        if(mods == 2){ 
            primos += primos === "" ? n :  "\n" + n; 
        } 
     
    } 
     
    window.alert("Os numeros são" + primos); 
  	
});