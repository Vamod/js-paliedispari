// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt('Inserisci una parola');
var contrario = '';

for (var i = parola.length; i >= 0 ; i--){
    contrario += parola.charAt(i);
}
console.log(contrario);

if(parola == contrario){
    console.log('La parola è palindroma');
} else {
     console.log('La parola non è palindroma');
}

// creazione funzione
