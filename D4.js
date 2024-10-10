/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1,l2) {
console.log(l1* l2);
}
area(4,7); 

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
const crazySum = function(num1, num2) {
    let sum = num1 + num2;
if (num1===num2) {
    return sum*3}
else{
    return sum 
} 
}
console.log(crazySum(3,2));
console.log(crazySum(3,3));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
const crazyDiff = function (num) {
let difference = Math.abs(num -19)
if(num > 19) {
    return difference*3
} else {
    return difference
}
}
console.log(crazyDiff(21))
console.log(crazyDiff(18))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
const boundary = function(n) {
    if(n>=20 || n<=100) {
        return true
    }
    else if (n===400){ return true

    }
    else { 
        return false

    }

}
console.log(boundary(45))
console.log(boundary(140))
console.log(boundary(400))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function(str) {
if(str==='EPICODE') {
    return str

} else {
    return "EPICODE"+str
}
}
console.log(epify("sono uno studente epicode"))
console.log(epify('diventerò studente epicode'))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (npositive) {
    if( npositive%3===0||npositive%7===0) {console.log('il numero è un multiplo di 3 o 7')}
    else { console.log(' il numero non è un multiplo di 3 o 7')}
}
check3and7(21)
check3and7(12)
check3and7(9)
check3and7(34)
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/


/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString= function (str){
  let inverted = ''
  for(let i=str.length -1;i >=0;i--){
    inverted =inverted + str[i]
  } return inverted
}
console.log(reverseString('EPICODE'))
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (str){

}

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
const cutString = function(str) {
return str.slice(1,-1)
}
 console.log(cutString('Buonasera'))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
const giveMeRandom = function(n) {
    const randomArray = [];
    for (let i = 0; i < n; i++)
         {
        const randomN = Math.random() * 10;
randomArray.push(Math.ceil(randomN));
}
    
return randomArray;
}

console.log(giveMeRandom(8));

/* SCRIVI QUI LA TUA RISPOSTA */
