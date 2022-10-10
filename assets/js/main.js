// stampi in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    //per i multipli di 3 stampi “Fizz” al posto del numero       
    if (i % 3 == 0) { 
        console.log("Fizz");
    } 
    //per i multipli di 5 stampi “Buzz” 
    else if (i % 5 == 0) {
        console.log("Buzz");
    } 
    //Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”  
    else if ((i % 3 == 0) && (i % 5 == 0)){ 
        console.log("FizzBuzz");
    }    
    else {
        console.log(i);
    }
}