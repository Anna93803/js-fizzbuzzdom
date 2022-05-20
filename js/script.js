
// Scrivi un programma che stampi in console i numeri da 1 a 100 all’avvio della pagina.
for( let i = 1; i <= 100; i++) {

    console.log(i);
    let testoVisibile = i;

    // MILESTONE 1
    // Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
    // Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

     // MILESTONE 3
    // Applica uno stile differente a seconda del valore dell’indice per i multipli di 3,
    //  per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

    let sfondoSquare = "blue";

    if(i % 3 === 0 && i % 5 === 0) {

        testoVisibile = "FizzBuzz";
        sfondoSquare = "pink";

    }else if(i % 3 === 0) {

        testoVisibile = "Fizz";
        sfondoSquare = "green";

    }else if(i % 5 === 0) {

        testoVisibile = "Buzz";
        sfondoSquare = "yellow";
    }

    // MILESTONE 2
    // Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
    // ho stampato il quadrato il testo che deve essere visibile, e per ogni quadrato ho dato uno sfondo.

    const squareDaStampare = document.getElementById("square");
    squareDaStampare.innerHTML += `<div class="square ${sfondoSquare}">${testoVisibile}</div>`;
    
}


