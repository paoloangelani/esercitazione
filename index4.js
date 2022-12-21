/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

/* for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
} */

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

/* pets.sort();
console.log(
  "The elements of the array are now in alphabetical order: " + pets.join(", ")
); */

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

/* pets.reverse();
console.log(
  "The elements of the array are now in a reversed alphabetical order: " +
    pets.join(", ")
); */

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

pets.push(pets.splice(0, 1));
/* console.log(
  "The first element of the array has now been pushed to last position: " +
    pets.join(", ")
); */

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
    {
        brand: "Ford",
        model: "Fiesta",
        color: "red",
        trims: ["titanium", "st", "active"],
    },
    {
        brand: "Peugeot",
        model: "208",
        color: "blue",
        trims: ["allure", "GT"],
    },
    {
        brand: "Volkswagen",
        model: "Polo",
        color: "black",
        trims: ["life", "style", "r-line"],
    },
];

let i = 0;
for (let i = 0; i < cars.length; i++) {
    cars[i].licensePlate = "EU00" + i;
}
/* console.log(cars); */

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({
    brand: "Lamborghini",
    model: "Performante",
    color: "black",
    trims: ["life", "style", "r-line"],
});
for (let i = 0; i < cars.length; i++) {
    cars[i].trims.pop();
}
/* console.log(cars); */

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
    justTrims.push(cars[i].trims.shift());
}
/* console.log(justTrims);
console.log(cars); */

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
/* for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt() == "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
} */

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
    6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

/* let numArrLenght = numericArray.length;
while (i < numArrLenght) {
  if (numericArray[i] === 32) {
    console.log(numericArray[i]);
    break;
  } else {
    console.log(numericArray[i]);
    i++;
  }
} */

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

/* Cambiando l'ordine delle lettere il ciclo viene completato ugualmente, ma ovviamente i numeri nell'array numerico hanno un ordine diverso */
/* 
const charactersArray = ["g", "n", "u", "z", "d"];
const numbersArray = [];
for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      numbersArray.push(1);
  }
  switch (charactersArray[i]) {
    case "b":
      numbersArray.push(2);
  }
  switch (charactersArray[i]) {
    case "c":
      numbersArray.push(3);
  }
  switch (charactersArray[i]) {
    case "d":
      numbersArray.push(4);
  }
  switch (charactersArray[i]) {
    case "e":
      numbersArray.push(5);
  }
  switch (charactersArray[i]) {
    case "f":
      numbersArray.push(6);
  }
  switch (charactersArray[i]) {
    case "g":
      numbersArray.push(7);
  }
  switch (charactersArray[i]) {
    case "h":
      numbersArray.push(8);
  }
  switch (charactersArray[i]) {
    case "i":
      numbersArray.push(9);
  }
  switch (charactersArray[i]) {
    case "j":
      numbersArray.push(10);
  }
  switch (charactersArray[i]) {
    case "k":
      numbersArray.push(11);
  }
  switch (charactersArray[i]) {
    case "l":
      numbersArray.push(12);
  }
  switch (charactersArray[i]) {
    case "m":
      numbersArray.push(13);
  }
  switch (charactersArray[i]) {
    case "n":
      numbersArray.push(14);
  }
  switch (charactersArray[i]) {
    case "o":
      numbersArray.push(15);
  }
  switch (charactersArray[i]) {
    case "p":
      numbersArray.push(16);
  }
  switch (charactersArray[i]) {
    case "q":
      numbersArray.push(17);
  }
  switch (charactersArray[i]) {
    case "r":
      numbersArray.push(18);
  }
  switch (charactersArray[i]) {
    case "s":
      numbersArray.push(19);
  }
  switch (charactersArray[i]) {
    case "t":
      numbersArray.push(20);
  }
  switch (charactersArray[i]) {
    case "u":
      numbersArray.push(21);
  }
  switch (charactersArray[i]) {
    case "v":
      numbersArray.push(22);
  }
  switch (charactersArray[i]) {
    case "w":
      numbersArray.push(23);
  }
  switch (charactersArray[i]) {
    case "x":
      numbersArray.push(24);
  }
  switch (charactersArray[i]) {
    case "y":
      numbersArray.push(25);
  }
  switch (charactersArray[i]) {
    case "z":
      numbersArray.push(26);
  }
}
console.log(numbersArray); */