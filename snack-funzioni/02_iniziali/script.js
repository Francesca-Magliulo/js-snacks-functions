/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function firstLetter(names) {
    let result = [];
    for(let i = 0; i < names.length; i++) {
        let word = names[i]
        let letter = word[0]
        result.push(letter)
    }

    return result
} 

// Invoca la funzione qui e stampa il risultato in console

const newArray = firstLetter(names)
console.log(newArray)


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]