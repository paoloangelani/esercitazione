/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* const number1 = 2;
const number2 = 10;
if (number1 > number2) {
  console.log("Il primo numero è il più grande");
} else {
  console.log("Il secondo numero è il più grande");
} */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* const number3 = 5;
const number4 = 7;
if (number4 === number3) {
  console.log(number4, "è uguale a", number3);
} else {
  console.log(number4, "non è uguale a", number3);
} */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* const number5 = 25;
const number6 = 21;
if (number5 % 5 == 0) {
  console.log(number5, "può essere diviso per 5");
} else {
  console.log(number5, "non può essere diviso per 5");
}
if (number6 % 5 == 0) {
  console.log(number6, "può essere diviso per 5");
} else {
  console.log(number6, "non può essere diviso per 5");
} */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* const number7 = 12;
const number8 = 4;
if (number7 == 8 || number8 == 8) {
  console.log("Uno dei due numeri è 8");
} else if (number7 + number8 || number7 - number8 == 8) {
  console.log("Addizionare o sottrarre i numeri risulta in 8");
} */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* let totalShoppingCart = undefined;
let spedizione = 10;
totalShoppingCart = 30;
if (totalShoppingCart >= 50) {
  console.log(
    "Hai diritto alla spedizione gratuita! Il tuo totale è di:",
    totalShoppingCart,
    "€"
  );
} else {
  console.log(
    "Non hai diritto alla spedizione gratuita, il costo della spedizione è di 10€. Il tuo totale è di:",
    totalShoppingCart + spedizione,
    "€"
  );
}
totalShoppingCart = 50;
if (totalShoppingCart >= 50) {
  console.log(
    "Hai diritto alla spedizione gratuita! Il tuo totale è di:",
    totalShoppingCart,
    "€"
  );
} else {
  console.log("il tuo totale è di:", totalShoppingCart + spedizione, "€");
} */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart = undefined;
let spedizione = 10;

/* totalShoppingCart = 30;
discountedTotal = totalShoppingCart - totalShoppingCart * 0.2;
console.log(
  "Il totale del tuo carrello prima dell sconto è di:",
  totalShoppingCart,
  "€.",
  "Con lo sconto è di:",
  discountedTotal,
  "€"
);
if (discountedTotal >= 50) {
  console.log(
    "Hai diritto alla spedizione gratuita! Il tuo totale è ora di:",
    discountedTotal,
    "€"
  );
} else {
  console.log(
    "Non hai diritto alla spedizione gratuita, il costo della spedizione è di 10€. Il tuo totale è di:",
    discountedTotal + spedizione,
    "€"
  );
} */

/* totalShoppingCart = 70;
discountedTotal = totalShoppingCart - totalShoppingCart * 0.2;
console.log(
  "Il totale del tuo carrello prima dell sconto è di:",
  totalShoppingCart,
  "€.",
  "Con lo sconto è di:",
  discountedTotal,
  "€"
);
if (discountedTotal >= 50) {
  console.log(
    "Hai diritto alla spedizione gratuita! Il tuo totale rimane a:",
    discountedTotal,
    "€"
  );
} else {
  console.log(
    "Non hai diritto alla spedizione gratuita, il costo della spedizione è di 10€. Il tuo totale è di:",
    discountedTotal + spedizione,
    "€"
  );
} */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* let a = 103;
let b = 5;
let c = 21;
/         a > b > c
          a > c > b
          b > a > c
          b > c > a
          c > a > b
          c > b > a   /
if (a > b && a > c && b > c) {
  console.log(a, b, c);
} else if (a > c && a > b && c > b) {
  console.log(a, c, b);
} else if (b > a && b > c && a > c) {
  console.log(b, a, c);
} else if (b > c && b > a && c > a) {
  console.log(b, c, a);
} else if (c > a && c > b && a > b) {
  console.log(c, a, b);
} else {
  console.log(c, b, a);
} */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* let number1 = 2;
let notANumber = "Hi";
console.log(typeof number1);
console.log(typeof notANumber); */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* let number1 = 24;
let number2 = 11;
if (number1 % 2 == 0) {
  console.log("Il numero", number1, "è pari");
} else {
  console.log("Il numero", number1, "è dispari");
}
if (number2 % 2 == 0) {
  console.log("Il numero", number2, "è pari");
} else {
  console.log("Il numero", number2, "è dispari");
} */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza. */

/* let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
} */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
    name: "John",
    lastName: "Doe",
    skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
/* console.log("La città di provenienza di John è:", me.city); */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* delete me.lastName;
console.log(me.lastName); // lastName sarà ora undefined */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* delete me.skills[2];
console.log(me.skills); */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* const array = [];
array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(array); */

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* array[9] = 100;
console.log(array); */