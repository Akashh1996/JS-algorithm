let string = "Akash Sapkota"

function reverse(string) {
    return string.split("").reverse().join("")
}

function reverse2(string) {
    let reversed = ""
    for (let index = string.length-1; index >= 0; index--) {
        reversed += string[index]
    }
    return reversed
}

console.log(reverse2(string))