/*REGOLE
    - Tutte le risposte devono essere scritte in JavaScript
        - Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
            - Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
                - Puoi testare il tuo codice in un file separato, o de - commentando un esercizio alla volta
                    - Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo(se utilizzi macOS o Linux)
                        * /

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
    {
        Title: "The Lord of the Rings: The Fellowship of the Ring",
        Year: "2001",
        imdbID: "tt0120737",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },

    {
        Title: "The Lord of the Rings: The Return of the King",
        Year: "2003",
        imdbID: "tt0167260",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
        Title: "The Lord of the Rings: The Two Towers",
        Year: "2002",
        imdbID: "tt0167261",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
        Title: "Lord of War",
        Year: "2005",
        imdbID: "tt0399295",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
        Title: "Lords of Dogtown",
        Year: "2005",
        imdbID: "tt0355702",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
        Title: "The Lord of the Rings",
        Year: "1978",
        imdbID: "tt0077869",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
        Title: "Lord of the Flies",
        Year: "1990",
        imdbID: "tt0100054",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
        Title: "The Lords of Salem",
        Year: "2012",
        imdbID: "tt1731697",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
        Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
        Year: "1984",
        imdbID: "tt0087365",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
        Title: "Lord of the Flies",
        Year: "1963",
        imdbID: "tt0057261",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
        Title: "The Avengers",
        Year: "2012",
        imdbID: "tt0848228",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
        Title: "Avengers: Infinity War",
        Year: "2018",
        imdbID: "tt4154756",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
        Title: "Avengers: Age of Ultron",
        Year: "2015",
        imdbID: "tt2395427",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
        Title: "Avengers: Endgame",
        Year: "2019",
        imdbID: "tt4154796",
        Type: "movie",
        Poster:
            "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
];

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log(
    "---------------------------------------Esercizio A---------------------------------------"
);

const sum = 10 + 20;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

console.log(
    "---------------------------------------Esercizio B---------------------------------------"
);

const random = Math.floor(Math.random() * 21);

console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log(
    "---------------------------------------Esercizio C---------------------------------------"
);

const me = {
    name: "Simone",
    surname: "Basile",
    age: 23,
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log(
    "---------------------------------------Esercizio D---------------------------------------"
);

delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log(
    "---------------------------------------Esercizio E---------------------------------------"
);

me.skills = ["HTML, CSS, JavaScript"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log(
    "---------------------------------------Esercizio F---------------------------------------"
);

me.skills.push("newskill");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log(
    "---------------------------------------Esercizio F---------------------------------------"
);

me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log(
    "---------------------------------------Esercizio 1---------------------------------------"
);

const dice = () => {
    let rng = 0;
    rng = Math.floor(Math.random() * 6) + 1;
    return rng;
};

console.log("Random number:", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log(
    "---------------------------------------Esercizio 2---------------------------------------"
);
const whoIsBigger = (num1, num2) => {
    if (num1 > num2 && num1 != num2) {
        console.log(num1, "is bigger than", num2);
    } else if (num1 < num2 && num1 != num2) {
        console.log(num1, "is smaller than", num2);
    } else {
        console.log(num1, "is equal to", num2);
    }
};

whoIsBigger(dice(), dice());

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.
  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log(
    "---------------------------------------Esercizio 3---------------------------------------"
);
const splitMe = (string) => {
    let splitString = [];
    splitString = string.split(" ");
    return splitString;
};

console.log(splitMe("Look I have been split in an array"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log(
    "---------------------------------------Esercizio 4---------------------------------------"
);

const deleteOne = (string, bool) => {
    if (bool === true) {
        console.log(string.slice(1));
    } else {
        console.log(string.slice(0, -1));
    }
};

let exString = "Hello I am missing a letter";
deleteOne(exString, true);
deleteOne(exString, false);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.
  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log(
    "---------------------------------------Esercizio 5---------------------------------------"
);

const onlyLetters = (string) => {
    const noNumbers = string.replace(/[0-9]/g, "");
    return noNumbers;
};
exString = "H3ll0 1 h4v3 numb3rs";
console.log("Ex string:", exString);
console.log("String with no numbers:", onlyLetters(exString));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log(
    "---------------------------------------Esercizio 6---------------------------------------"
);

const ValidateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return console.log(mail, "is a valid email");
    } else {
        console.log(mail, "is NOT a valid email!");
        return false;
    }
};

ValidateEmail("BrASGSAS@gmail.com");
ValidateEmail("BrASGSASgmail.com");

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log(
    "---------------------------------------Esercizio 7---------------------------------------"
);

const whatDayIsit = () => {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const d = new Date();
    let day = weekday[d.getDay()];
    return day;
};

console.log("Today is: ", whatDayIsit());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().
  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log(
    "---------------------------------------Esercizio 8---------------------------------------"
);

const rollTheDices = (number) => {
    let totalDie = { sum: 0, values: [] };
    let currentRng = 0;
    for (i = 0; i < number; i++) {
        currentRng = dice();
        totalDie.values.push(currentRng);
        totalDie.sum = totalDie.sum + currentRng;
    }
    return totalDie;
};

console.log(rollTheDices(5));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log(
    "---------------------------------------Esercizio 9---------------------------------------"
);

const howManyDays = (date) => {
    let today = new Date();
    let givenDay = new Date(date);

    const days = (today, givenDay) => {
        let difference = today.getTime() - givenDay.getTime();
        let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
        return TotalDays;
    };
    console.log(days(today, givenDay) + " days passed from the given date");
};

howManyDays("10/25/2021");

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log(
    "---------------------------------------Esercizio 10---------------------------------------"
);

const isTodayMyBirthday = () => {
    let date = new Date();
    let bDay = "1999/2/3";
    const padTo2Digits = (num) => {
        return num.toString().padStart(2, "2");
    };
    const formatDate = () => {
        return [
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
        ].join("-");
    };
    justMonthDayDate = formatDate().substring(5);
    justMonthDayBDay = bDay.substring(5);
    bool = true;
    if (justMonthDayDate === justMonthDayBDay) {
        bool = true;
    } else {
        bool = false;
    }
    return bool;
};
console.log(isTodayMyBirthday()); //Funziona, ma non è possibile chiedere se una data in particolare è il mio compleanno.

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log(
    "---------------------------------------Esercizio 11---------------------------------------"
);

const deleteProp = (obj, str) => {
    if (str === "Nome") {
        delete obj[str];
    } else if (str === "Cognome") {
        delete obj[str];
    }
    return object;
};
let object = {
    Nome: "Simone",
    Cognome: "Basile",
};
console.log(deleteProp(object, "Cognome"));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log(
    "---------------------------------------Esercizio 12---------------------------------------"
);

const newestMovie = (givenArray) => {
    const filter = givenArray.filter(
        (element) => element.Year == Math.max(...movies.map((item) => item.Year))
    );
    return filter;
};

console.log("Il film più recente della lista è:", newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log(
    "---------------------------------------Esercizio 13---------------------------------------"
);

const countMovies = (givenArray) => {
    let totalMovies = 0;
    givenArray.forEach((element) => {
        if ((element = givenArray.length)) {
            return (totalMovies = element);
        }
    });
    return totalMovies;
};

console.log("Il totale dei film nell'array è di:", countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log(
    "---------------------------------------Esercizio 14---------------------------------------"
);

const onlyTheYears = (givenArray) => {
    const yearsArray = givenArray.map((givenArray) => {
        return { Year: givenArray.Year };
    });
    return yearsArray;
};
console.log(
    "This array contains all the years in which the movies were released:",
    onlyTheYears(movies)
);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log(
    "---------------------------------------Esercizio 15---------------------------------------"
);

const onlyInLastMillennium = (givenArray) => {
    let lastMilleniaMovies = [];
    givenArray.forEach((element) => {
        if (parseInt(element.Year) > 1999) {
            lastMilleniaMovies.push(element);
        }
    });
    return lastMilleniaMovies;
};

console.log(
    "Movies released in the last millenia:",
    onlyInLastMillennium(movies)
);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log(
    "---------------------------------------Esercizio 16---------------------------------------"
);

const sumAllTheYears = (givenArray) => {
    let totalYears = 0;
    givenArray.forEach((element) => (totalYears += parseInt(element.Year)));
    return totalYears;
};

console.log("The total of all years is:", sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log(
    "---------------------------------------Esercizio 17---------------------------------------"
);

const searchByTitle = (givenArray, str) => {
    searchKey = str.toLowerCase();
    const filteredMovies = givenArray.filter((e) =>
        e.Title.toLowerCase().includes(searchKey)
    );
    return filteredMovies;
};
console.log(searchByTitle(movies, "avEngers"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log(
    "---------------------------------------Esercizio 18---------------------------------------"
);

const searchAndDivide = (givenArray, str) => {
    const movieList = { match: [], unmatch: [] };
    searchKey = str.toLowerCase();
    const matchingMovies = givenArray.filter((e) =>
        e.Title.toLowerCase().includes(searchKey)
    );
    const unmatchingMovies = givenArray.filter(
        (e) => !e.Title.toLowerCase().includes(searchKey)
    );
    movieList.match = matchingMovies.map((x) => x);
    movieList.unmatch = unmatchingMovies.map((x) => x);
    return movieList;
};
console.log(searchAndDivide(movies, "avEngers"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log(
    "---------------------------------------Esercizio 19---------------------------------------"
);

const removeIndex = (number) => {
    const newMovies = movies.map((x) => x);
    delete newMovies[number];
    return newMovies;
};
console.log(removeIndex(1));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const containersearch = () => {
    const foundContainer = document.getElementById("container");
    return foundContainer;
};
console.log(containersearch());

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const selectTD = () => {
    const foundTD = document.getElementsByTagName("td");
    return foundTD;
};

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const printTD = () => {
    const foundTD = document.getElementsByTagName("td");
    const arrayTD = Array.from(foundTD);
    arrayTDValue = arrayTD.forEach((td) => console.log(td.innerText));
    return arrayTDValue;
};

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const paintItRed = () => {
    const backgroundA = document.querySelectorAll("a");
    const backgroundsforA = Array.from(backgroundA);
    backgroundsforA.forEach((a) => a.classList.add("bgRed"));
};

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

//Se abbiamo un input field, tramite questa funzione potremo appendere un nuovo div, al quale daremo la classe "list-item", e appenderemo sotto all'elemento specificato "myList"

const addToList = () => {
    const newDiv = document.createElement("div");
    newDiv.innerText = "New item";
    document.getElementById("myList").appendChild(newDiv);
};

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const emptyMyList = () => {
    let myListValue = document.getElementById("myList");
    myListValue.innerText = "";
};

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const addClassTR = () => {
    const foundTR = document.getElementsByTagName("tr");
    const arrayTR = Array.from(foundTR);
    arrayTDValue = arrayTR.forEach((tr) => tr.classList.add("test"));
};

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.
  Esempio:
  halfTree(3)
  *
  **
  ***
*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.
  Esempio:
  tree(3)
    *
   ***
  *****
*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/