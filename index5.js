/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
    if (typeof l1 !== "number" && typeof l2 !== "number") {
        console.log("Uno dei due lati non è un numero");
    } else {
        console.log("Il valore dell'area è di:", l1 * l2);
    }
}

/* area(2, 4); */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(value1, value2) {
    if (value1 === value2) {
        console.log(
            "I parametri hanno lo stesso valore, la loro somma per tre è:",
            (value1 + value2) * 3
        );
    } else {
        console.log("La somma dei parametri è:", value1 + value2);
    }
}

/* crazySum(5, 5);
crazySum(7, 10); */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(x) {
    const y = 19;
    if (x > 19) {
        return console.log(
            "Il numero fornito è maggiore di 19, differenza assoluta per tre:",
            Math.abs(x - y) * 3
        );
    } else {
        return console.log("La differenza assoluta è di:", Math.abs(x - y));
    }
}

/* crazyDiff(15);
crazyDiff(25); */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    if (typeof n !== "number") {
        return "Non è stato inserito un numero";
    } else if ((Number.isInteger(n) && n >= 20 && n <= 100) || n === 400) {
        return true;
    } else {
        return false;
    }
}

/* console.log(boundary(19));
console.log(boundary(21));
console.log(boundary(101));
console.log(boundary(400));
console.log(boundary(25.5)); */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(strg) {
    if (typeof strg !== "string") {
        return "Non è stata inserita una stringa";
    } else if (
        typeof strg === "string" &&
        (first = strg.split(" ")[0] === "EPICODE")
    ) {
        return strg;
    } else {
        return "EPICODE " + strg;
    }
}
/* console.log(epify("Hello"));
console.log(epify("EPICODE"));
console.log(epify(1)); */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
function check3and7(x) {
    if (Math.abs(x % 3) === 0 && Math.abs(x % 7) === 0) {
        return "Il numero è divisibile sia per 3 che per 7";
    } else if (Math.abs(x % 3) === 0) {
        return "Il numero è divisibile per 3";
    } else if (Math.abs(x % 7) === 0) {
        return "Il numero è divisibile per 7";
    } else {
        return "Il numero non è divisibile per 3 o 7";
    }
}

/* console.log(check3and7(9));
console.log(check3and7(14));
console.log(check3and7(21));
console.log(check3and7(11)); */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(invert) {
    if (typeof invert !== "string") {
        return "Non è stata inserita una stringa";
    } else {
        return invert.split("").reverse().join("");
    }
}
/* console.log(reverseString("EPICODE"));
console.log(reverseString(1)); */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(multiString) {
    if (typeof multiString !== "string") {
        return "Non è stata inserita una stringa";
    } else {
        const splitString = multiString.split(" ");
        for (let i = 0; i < splitString.length; i++) {
            splitString[i] =
                splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
        }
        return splitString.join(" ");
    }
}

/* console.log(upperFirst("Hello world i am simone"));
console.log(upperFirst(123)); */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(chop) {
    if (typeof chop !== "string") {
        return "Non è stata inserita una stringa";
    } else {
        return chop.slice(1, -1);
    }
}
/* let stringEx = "Barbabietola";
console.log(cutString(stringEx));
console.log(stringEx); // La stringa originale è rimasta inalterata
console.log(cutString(7400)); */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
    if (typeof n !== "number") {
        return "Non è stata inserita un numero";
    } else {
        let rng = [];
        for (let i = 0; i < n; i++) {
            rng.push(Math.floor(Math.random() * 11));
        }
        return rng;
    }
}

const eG = giveMeRandom(25);
console.log(eG);