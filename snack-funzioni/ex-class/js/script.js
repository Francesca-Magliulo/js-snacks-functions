
//1) Creare una funzione che accetti come parametro un array e trovi il numero più grande all'interno

const num = [2, 63, 9, 14, 56, 6, 12]

function bigNum(num) {
    let max = num[0]

    for (let i = 0; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i]
        }
    }
    return max
}

const result = bigNum(num)
console.log(result)

//2) Creare una funzione che accetti come parametro un array e trovi il numero più piccolo all'interno

const numArray = [63, 9, 14, 56, 6, 12, 1, 32, -1, -9, 5]

function smallNum(numArray) {
    let min = numArray[0]

    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] < min) {
            min = numArray[i]
        }
    }
    return min
}

const result1 = smallNum(numArray)
console.log(result1)


//3) Creare una funzione che accetti come parametro un array e un numero e ritorna la posizione del numero nell'array o, se non c'è, ritorna -1


const array = [32, 8, 5, 65, 4, 12, 9, -6, 28]

function trovaNum(array, num) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === num) {
            return i;
        }
    }
    return -1
}

const result2 = trovaNum(array, 28)
console.log(result2)


//4) Creare una funzione che accetti come parametro un array e ritorna la somma degli elementi dell'array

function sommaArray(array) {

    const somma = array.reduce(function (acc, numero) {
        return acc + numero;
    }, 0);

    return somma;

}

const resultSomma = sommaArray(array)
console.log(resultSomma)


//5) Creare una funzione che inverta una stringa passata come argomento

//6) Creare una funzione che inverta un array passato come argomento

//7) Creare una funzione che conti le occorrenze di un numero in un array. La funzione accetta come parametro un array e un numero
//e ritorna la quantità di volte in cui il numero è presente nell'array, ritorna -1 se non c'è
