const array = [1,2,1,3,4,5, 8]

const countRepeated = (array) => {
    let obj = {}
    array.map((num)=>  obj[num] ? obj[num] ++ : obj[num] = 1)  
    return obj
}

console.log(countRepeated(array))