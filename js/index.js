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
 * L’utente sceglie pari o dispari
 * e inserisce un numero da 1 a 5.
 * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
 * Sommiamo i due numeri
 * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
 * Dichiariamo chi ha vinto.
 */