/**
 * Palidroma
 * Chiedere all’utente di inserire una parola
 * Creare una funzione per capire se la parola inserita è palindroma
*/

//INSERIRE NOME UTENTE
var nomeUtente = prompt('Inserisci il tuo nome');
console.log(nomeUtente);

//INVERTIRE NOME
var nomeInverso = caratteriInversi(nomeUtente);
console.log(nomeInverso);

//FUNZIONE PER INVERTIRE I CARATTERI
function caratteriInversi(nome) {
    //CREAZIONE VARIABILE VUOTA
   var inverso = '';

   //CREAZIONE LOOP "INVERSO" 
   for (var i = nome.length - 1; i >= 0; i--) {
       //console.log( parola.charAt(i) );

       //CONCATENAMENTO CARATTERI
       inverso += nome.charAt(i);
   }

   //CREAZIONE PAROLA INVERSA
   return inverso;
}

//CONTROLLO NOME PALINDROMO
if (nomeUtente == nomeInverso) {
    console.log('Il nome ' + nomeUtente + ' è  Palindromo');
}else {
    console.log('Il nome ' + nomeUtente + ' non è  Palindromo');

}







/**Pari e Dispari
 * L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
 * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
 * Sommiamo i due numeri
 * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
 * Dichiariamo chi ha vinto.
 */

// //INSERIRE PARI O DISPARI
// do {
//     var sceltaUtente = prompt('Inserisci pari o dispari'); 
// } while (sceltaUtente != 'pari' && sceltaUtente !='dispari');
// console.log('Hai scelto ' , sceltaUtente);


// //INSERIRE NUMERO DA 1 A 5
// do {
//     var numeroUtente = parseInt( prompt('Adesso, inserisci un numero da 1 a 5'));
// } while ( isNaN(numeroUtente) || (numeroUtente > 5 || numeroUtente < 1 )); 
// console.log('Il tuo numero è ' , numeroUtente);

// //CREAZIONE NUMERI RANDOM
// var numeroCPU = numRandom();
// console.log('Il Computer ha scelto: ', numeroCPU);

// //SOMMA NUMERO UTENTE + CPU
// var somma = numeroUtente + numeroCPU;
// console.log('La somma dei vostri numeri è: ' , somma);

// var risultato = pariDispari(somma);
// console.log('Quindi il numero è: ', risultato);


// //DICHIARAZIONE VINCITORE
// if ( (sceltaUtente === 'pari') && (risultato === 'pari') ) {
//     console.log('Bravo, hai vinto!! Perché la somma del tuo numero e quello del Computer (' + somma + ') è un numero pari!');
// } else if ( (sceltaUtente === 'dispari') && (risultato === 'dispari') ) {
//     console.log('Bravo, hai vinto!! Perché la somma del tuo numero e quello del Computer (' + somma + ') è un numero dispari!');
// } else {
//     console.log('Mi dispiace... Hai perso =(');
// }


// /**
//  * FUNZIONE NUMERI RANDOM
//  * @returns un numero random
//  */
// function numRandom() {
//     var risultato = Math.floor (Math.random() * 5 + 1);
//     return risultato;
// }



// /**
//  * FUNZIONE PARI O DISPARI
//  * @param {*} num numero da analizzare
//  * @returns pari o dispari
//  */
// function pariDispari (num) {
//     if (num % 2 === 0) {
//         return 'pari';
//     }

//     return 'dispari';
// }