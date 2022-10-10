let containerEl;
containerEl = document.querySelector('.container');
//console.log(containerEl);

// stampi in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    //Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”
    let elements = `<li class="box_${i}">${i}</li>`;
    let fizz;
    let buzz;
    let fizzbuzz;
    if ((i % 3 == 0) && (i % 5 == 0)) { 
        console.log("FizzBuzz");
        fizzbuzz = 'FizzBuzz';
        containerEl.append(fizzbuzz);
    } 
    //per i multipli di 3 stampi “Fizz” al posto del numero   
    else if (i % 3 == 0){
        console.log("Fizz");
        fizz = 'Fizz';
        containerEl.append(fizz);
    }  
    //per i multipli di 5 stampi “Buzz”  
    else if (i % 5 == 0){ 
        console.log("Buzz");
        buzz = 'Buzz';
        containerEl.append(buzz);

    }    
    else {
        console.log(i);
        containerEl.append(`${i}`);
    }
    
}
