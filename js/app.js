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

function aBC(a,b){
    c= Math.sqrt((a**2 + b**2));
    return c;
}
console.log(aBC(8,6));

//SUM ARRAY//
// function sumArray(arr){
//     sum = 0;
// for(let i=0; i < arr.length; i++){
//             sum = sum + +arr[i]
//         }
//     return sum;
// }

// console.log(sumArray([1,1,1,1,1,1,1,1,1,1]))