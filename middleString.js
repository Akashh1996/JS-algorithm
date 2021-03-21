let string = "AkTZZ"

function middleString(string) {
    let middleLetter = ""
    let stringLength = string.length
    if(stringLength % 2 !== 0){
        middleLetter = string[Math.ceil(stringLength/2-1)]
    }else{
        middleLetter = string[Math.floor(stringLength/2-1)]+string[Math.floor(stringLength/2)]
    }
    return middleLetter
}

console.log(middleString(string))

