/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVocals(word) {
    const vocals = ['a', 'e', 'i', 'o', 'u']
    let count = 0

    for (let i = 0; i < word.length; i++) {
        let letter = word[i]
        
        if (vocals.includes(letter)) {
            count++
        }
    }
    return count
}



// Invoca la funzione qui e stampa il risultato in console

const result = countVocals('JavaScript')
console.log(result)

const result1 = countVocals('Pyton')
console.log(result1)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)


//Arrow Function

const countVocals1 = (word) => {
    const vocals = ['a', 'e', 'i', 'o', 'u']
    let count = 0

    for (let i = 0; i < word.length; i++) {
        let letter = word[i]
        
        if (vocals.includes(letter)) {
            count++
        }
    }
    return count
}

const result2 = countVocals1('JavaScript')
console.log(result)