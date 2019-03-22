//PALINDROME//

function checkPalindrome(word) {
    if(word.toLowerCase() === word.toLowerCase().split("").reverse().join(""))
    {
        return true
} return false
    }

console.log(checkPalindrome("Justin"))
