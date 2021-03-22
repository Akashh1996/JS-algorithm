function replaceString(string) {
    return string.replace(" ", "/")
}

console.log(replaceString("akash sapkota"))

function replaceString1(string) {
    let newString = ""
    for (let index = 0; index < string.length; index++) {
        newString = newString + string[index] + "/"
    }
    return newString
}

console.log(replaceString1("akash sapkota"))