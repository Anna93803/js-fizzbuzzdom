// Scrivi un programma che stampi in console i numeri da 1 a 100 all’avvio della pagina.
for( let i = 1; i <= 100; i++) {
    console.log(i);

    // MILESTONE 1
    // Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
    // Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

    let multiploTre = "Fizz";
    let multiploCinque = "Buzz";
    let multiplo = multiploTre + multiploCinque;
    

    // console.log(multiploTre, multiploCinque , multiplo);
    console.log(multiplo);

    if(i % 3 === 0 && i % 5 === 0) {

        console.log(multiplo);

    }else if(i % 3 === 0) {

        console.log(multiploTre);

    }else if(i % 5 === 0) {

        console.log(multiploCinque);
    }
}


