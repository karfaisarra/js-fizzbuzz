let containerEl;
containerEl = document.querySelector('.container');
//console.log(containerEl);

// stampi in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    //Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”
    let elements = document.createElement('p');
    let fizz;
    let buzz;
    let fizzbuzz;
    if ((i % 3 == 0) && (i % 5 == 0)) { 
        console.log("FizzBuzz");
        elements.innerHTML +='FizzBuzz'
        containerEl.append(elements);
        elements.style.backgroundColor = "#DE5471";

    } 
    //per i multipli di 3 stampi “Fizz” al posto del numero   
    else if (i % 3 == 0){
        console.log("Fizz");
        elements.innerHTML += 'Fizz'
        containerEl.append(elements);
        elements.style.backgroundColor = "#61D2A4";
    }  
    //per i multipli di 5 stampi “Buzz”  
    else if (i % 5 == 0){ 
        console.log("Buzz");
        elements.innerHTML += 'Buzz'
        containerEl.append(elements);
        elements.style.backgroundColor = "#F9D277";
    }    
    else {
        console.log(i);
        elements.innerHTML +=`${i}`
        containerEl.append(elements);
        elements.style.backgroundColor = "#3D88AE";
    }
    
}
