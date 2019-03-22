//PALINDROME//

// function checkPalindrome(word) {
//     if(word.toLowerCase() === word.toLowerCase().split("").reverse().join(""))
//     {
//         return true
// } return false
//     }

// console.log(checkPalindrome("Justin"))

//DIGIT SUM//

// function sumDigits(x) {
//     let sum = 0;
//     let numString = x.toString().split("");
//     for(let i=0; i < numString.length; i++){
//         sum = sum + +numString[i]
//     }
// return sum;

// }

// console.log(sumDigits(11111))

//PYTHAGORAS//

// function aBC(a,b){
//     c= Math.sqrt((a**2 + b**2));
//     return c;
// }
// console.log(aBC(8,6));

//SUM ARRAY//
// function sumArray(arr){
//     sum = 0;
// for(let i=0; i < arr.length; i++){
//             sum = sum + +arr[i]
//         }
//     return sum;
// }

// console.log(sumArray([1,1,1,1,1,1,1,1,1,1]))

//PRIME NUMBERS//

// A Prime number is a number that is not evenly 
// divisible by another number except 1 and itself. 
// If you want to read more deeply about it, [go here]
// (https://en.wikipedia.org/wiki/Prime_number).
// To test whether a number is Prime, you only need 
// to test as far as the **square root** of that 
// number. This is advisable for optimization and 
// testing large numbers.

function checkPrime(x){
    for(let i=2; i < x; i++){
        if(x%i=== 0){
            return false
        }
    }return true;
    };
console.log(checkPrime(29))
function printPrimes(x){
    for(let i=0; i <= x; i++){
        if(checkPrime(i) === true){
            console.log(i)
        }
    }
}

printPrimes(400)