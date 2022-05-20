// Scrivi un programma che stampi in console i numeri da 1 a 100 all’avvio della pagina.
for( let i = 1; i <= 100; i++) {
    console.log(i);

    // MILESTONE 1
    // Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
    // Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
    let testoVisibile = i;
    // let multiploTre = "Fizz";
    // let multiploCinque = "Buzz";
    // let multiplo = multiploTre + multiploCinque;
    
    // console.log(multiploTre, multiploCinque , multiplo);
    
    if(i % 3 === 0 && i % 5 === 0) {

        testoVisibile = "FizzBuzz";
        // console.log(testoVisibile);

    }else if(i % 3 === 0) {

        testoVisibile = "Fizz";
        // console.log(testoVisibile);

    }else if(i % 5 === 0) {

        testoVisibile = "Buzz";
        // console.log(testoVisibile);
    }

    // MILESTONE 2
    // Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

    const squareDaStampare = document.getElementById("square");
    squareDaStampare.innerHTML += `<div class="square">${testoVisibile}</div>`;
    console.log(squareDaStampare);
    
}


