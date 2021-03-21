const findVowel = (string) => {
    const vowels = "aeiou"
    return string.toLowerCase().split("").filter((letter)=> vowels.includes(letter)).join("")
}

console.log(findVowel("akashi"))

const countVowel = (string) => findVowel(string).length

console.log(countVowel("akashi"))
