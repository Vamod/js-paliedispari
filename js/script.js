// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//versione senza funzione

// var parola = prompt('Inserisci una parola');
// var contrario = '';
//
// for (var i = parola.length; i >= 0 ; i--){
//     contrario += parola.charAt(i);
// }
//
// if(parola == contrario){
//     console.log('La parola è palindroma');
// } else {
//      console.log('La parola non è palindroma');
// }


// creazione funzione

var parola = prompt('Inserisci una parola');

var risultato = isPalindrome(parola);
console.log(risultato);

if(parola == risultato){
    console.log('La parola è palindroma');
} else {
     console.log('La parola non è palindroma');
}



function isPalindrome(stringa){
    var contrario = '';

    for (var i = parola.length; i >= 0 ; i--){
        contrario += parola.charAt(i);
    }

    return contrario;
}
