//PALINDROME//

function checkPalindrome(word) {
    if(word.toLowerCase() === word.toLowerCase().split("").reverse().join(""))
    {
        return true
} return false
    }

console.log(checkPalindrome("Justin"))

//DIGIT SUM//

function sumDigits(x) {
    let sum = 0;
    let numString = x.toString().split("");
    for(let i=0; i < numString.length; i++){
        sum = sum + +numString[i]
    }
return sum;

}

console.log(sumDigits(11111))
