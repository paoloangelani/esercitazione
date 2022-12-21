/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*let numero = 1; /* Questa è una variabile a cui viene assegnato un numero */
//let parola =
//  "Ciao!"; /* Questa è invece una variabile a cui viene assegnata una parola, una "stringa" */
//let esempioBool = false; /* Questa è una variabile che può essere solo vera o falsa, un "boolean" */
//let esempioNull = null; /* Viene utilizzato quando la variabile è vuota */
//let esempioUndef =
//  undefined; /* Viene utilizzato quando la variaible non è ancora stata definita*/

/* console.log("Numero: " + numero);
console.log("Parola: " + parola);
console.log("Boolean: " + esempioBool); */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* let Name = "Simone"; */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numero1 = 12;
let numero2 = 20;
let somma = numero1 + numero2;

console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* let x = 12; */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* Name = "Basile";
const esCostante = 1;
esCostante = 2;
console.log(
  esCostante ); /* Togliendo il commento da queste linee, potremo notare l'errore una volta avviato il codice in quanto le costanti non possono essere ridefinite */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* let numero3 = 4;
let sottrazione = numero3 - x;
console.log(sottrazione); */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/*let name1 = "john";
let name2 = "John";
console.log(name1 === name2); /* Questo risulterà falso sul terminal */
//console.log(
//    name1.toLocaleLowerCase() === name2.toLocaleLowerCase()
; /* Questo risulterà vero sul terminal */