/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

function cutString(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return "Non è stata inserita una stringa";
    } else {
        let str3 = "";
        return (str3 = string1.slice(0, 2) + string2.slice(0, -2)).toUpperCase();
    }
}
console.log(
    "Inserendo come stringhe Hello World otteniamo:",
    cutString("Hello", "World")
);

console.log(
    "-----------------------------------Esercizio 2-----------------------------------"
);

/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

function giveMeRandom() {
    let rng = [];
    for (let i = 0; i < 10; i++) {
        rng.push(Math.floor(Math.random() * 101));
    }
    return rng;
}

console.log("L'array random è composto dai numeri: ", giveMeRandom());

console.log(
    "-----------------------------------Esercizio 3-----------------------------------"
);

/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici (suggerimento: il metodo filter può aiutare)
*/

const arrayEx = [131, 335, 394, 70, 283, 42, 164, 213, 204, 415];

const arrayPari = () =>
    arrayEx.filter((element) => {
        return element % 2 === 0;
    });

console.log("Array esempio:", arrayEx);
console.log("Array pari:", arrayPari(arrayEx));

console.log(
    "-----------------------------------Esercizio 4-----------------------------------"
);

/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
const simpleSumArray = (givenArray) => {
    let totalSum = 0;
    givenArray.forEach((element) => {
        totalSum += element;
    });
    return totalSum;
};

console.log("Il risultato della somma semplice è: ", simpleSumArray(arrayEx));

console.log(
    "-----------------------------------Esercizio 5-----------------------------------"
);

/* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
*/

const sumArray = (givenArray) => {
    const initialValue = 0;
    const totalSum = givenArray.reduce(
        (accumulator, currentElement) => accumulator + currentElement,
        initialValue
    );
    return totalSum;
};

console.log("Il risultato della somma con Reduce è: ", sumArray(arrayEx));

console.log(
    "-----------------------------------Esercizio 6-----------------------------------"
);

/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

const nuovoArray = (givenArray, n) =>
    givenArray.map((element) => {
        return element + n;
    }); //Fornendo un array come primo parametro, e un numero come secondo, ci verrà fornito un array di numeri del primo array + n

console.log("Array esempio:", arrayEx);
console.log("L'array ai cui numeri è sommato 10: ", nuovoArray(arrayEx, 10));

console.log(
    "-----------------------------------Esercizio 8-----------------------------------"
);

/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
const stringArray = ["EPICODE", "is", "great"];

const strgArrLen = (givenArray) =>
    givenArray.map((element) => {
        return element.length;
    });

console.log("La lunghezza delle stringhe è di: ", strgArrLen(stringArray));

console.log(
    "-----------------------------------Esercizio 9-----------------------------------"
);

/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
const Oddify = () => {
    const arrOdd = [];
    for (let i = 0; i < 100; i++) {
        if (i % 2 !== 0) {
            arrOdd.push(i);
        }
    }
    return arrOdd;
};

console.log("I numeri dispari da 1 a 99 sono: ", Oddify());

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
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

console.log(
    "-----------------------------------Esercizio 10-----------------------------------"
);

/* ESERCIZIO 10
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

const oldestMovie = (givenArray) => {
    const filter = givenArray.filter(
        (element) => element.Year == Math.min(...movies.map((item) => item.Year))
    );
    return filter;
};

console.log("Il film più vecchio della lista è:", oldestMovie(movies));

console.log(
    "-----------------------------------Esercizio 11-----------------------------------"
);

/* ESERCIZIO 11
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

const numFilm = (givenArray) => {
    let total = 0;
    givenArray.forEach((element) => {
        if ((element = givenArray.length)) {
            return (total = element);
        }
    });
    return total;
};
console.log("Il totale dei film è: ", numFilm(movies));

console.log(
    "-----------------------------------Esercizio 12-----------------------------------"
);

/* ESERCIZIO 12
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

const movieTitles = (givenArray) => {
    const allTitles = givenArray.map((givenArray) => {
        return { Title: givenArray.Title };
    });
    return allTitles;
};

console.log(
    "Ecco un array con tutti i titoli dei film disponibili: ",
    movieTitles(movies)
);

console.log(
    "-----------------------------------Esercizio 13-----------------------------------"
);

/* ESERCIZIO 13
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
const currentMilleniaMovies = (givenArray) => {
    let newMovies = [];
    givenArray.forEach((element) => {
        if (parseInt(element.Year) > 1999) {
            newMovies.push(element);
        }
    });
    return newMovies;
};

console.log(
    "Ecco una lista dei film usciti nel millennio corrente: ",
    currentMilleniaMovies(movies)
);

console.log(
    "-----------------------------------Esercizio 14-----------------------------------"
);

/* ESERCIZIO 14
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

const findAMovie = (givenArray, ID) => {
    let targetMovie = undefined;
    givenArray.forEach((element) => {
        if ((element.imdbID = ID)) {
            targetMovie = element;
        }
    });
    return targetMovie;
};

console.log(
    "Dato l'id tt4154796, il film che troviamo è: ",
    findAMovie(movies, "tt4154796")
);

console.log(
    "-----------------------------------Esercizio 15-----------------------------------"
);

/* ESERCIZIO 15
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

const totalYears = (givenArray) => {
    let total = 0;
    givenArray.forEach((element) => {
        total += parseInt(element.Year);
    });
    return total;
};

console.log(
    " La somma totale degli anni di uscita dei film è di:",
    totalYears(movies)
);