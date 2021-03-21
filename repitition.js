const array = [1,2,1,3,4,5, 8]

function countRepeated(array) {
    let char = {}
    array.map((num)=>  char[num] ? char[num] ++ : char[num] = 1)  
    return char
}

console.log(countRepeated(array))