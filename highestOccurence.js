const array = ["b","b","a","b","d","a","a"]

function highestOccurence(array) {
    let obj = {}
    array.map((num)=>  obj[num] ? obj[num] ++ : obj[num] = 1) 
    return Object.entries(Object.fromEntries(Object.entries(obj).
        filter(([key, value]) => value === Math.max(...Object.values(obj)))))
}
 
console.log(highestOccurence(array))