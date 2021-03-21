const array = [1,2,1,3,4,5]

function countRepeated(array) {
    let char = {}
    for(let i of array){
        if(!char[i]){
            char[i] = 1
        }else{
            char[i]++
        }
    }
    return char
}

console.log(countRepeated(array))