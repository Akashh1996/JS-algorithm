const checkPalindrome = (string) => {
    return string.toLowerCase().split("").reverse().join("") === string
}

console.log(checkPalindrome("akash"))