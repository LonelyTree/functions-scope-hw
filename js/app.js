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

// function checkPrime(x){
//     for(let i=2; i < x; i++){
//         if(x%i=== 0){
//             return false
//         }
//     }return true;
//     };
// console.log(checkPrime(29))
// function printPrimes(x){
//     for(let i=0; i <= x; i++){
//         if(checkPrime(i) === true){
//             console.log(i)
//         }
//     }
// }

// printPrimes(400)

//HUNGRY FOR MORE//

//INSERT DASH//

// function insertDash(num) {
    
//     let arr = num.toString().split("")
//     const result = []
//     for(let i=0; i <= arr.length; i++){
//         if(((arr[i-1])%2 ===1)&&(arr[i]%2 ===1)){
//             result.push("-",arr[i]);
//         } else {
//             result.push(arr[i])
//         }
//     }
//     console.log(result.join(""))
// }

// insertDash(5555777777999993333);

//REVERSE STRING//

// function reverseString(string) {
// let resString = "";
// for(let i = string.length-1; i >= 0; i--){
//     resString += string[i];
//     }return resString;
// }
// console.log(reverseString("Test"))

//PALINDROME +//

function checkPalindrome(word) {
    if(word.toLowerCase().replace(/ /g,'') === word.toLowerCase().replace(/ /g,'').split("").reverse().join(""))
    {
    return true
    } 
    return false
    }
    
    console.log(checkPalindrome("Ha      nn ah"))
