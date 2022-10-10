// stampi in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    //Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”
    if ((i % 3 == 0) && (i % 5 == 0)) { 
        console.log("FizzBuzz");
    } 
    //per i multipli di 3 stampi “Fizz” al posto del numero   
    else if (i % 3 == 0){
        console.log("Fizz");
    }  
    //per i multipli di 5 stampi “Buzz”  
    else if (i % 5 == 0){ 
        console.log("Buzz");
    }    
    else {
        console.log(i);
    }
}