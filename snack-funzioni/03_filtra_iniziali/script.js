/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function wordStartWith(names, letter) {
    let result = []

    for (let i = 0; i < names.length; i++) {
        let word = names[i]
        let firstLetter = word[0]
        if (firstLetter === letter) {
            result.push(word)
        }
    }
    return result
}


// Invoca la funzione qui e stampa il risultato in console

const newArray = wordStartWith(names, "A")
console.log(newArray)

const newArray1 = wordStartWith(names, "L")
console.log(newArray1)


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]