const array = [2,1,3,2,1,2,1,2,2,1]

function highestOccurence(array) {
    let obj = {}
    array.map((num)=>  obj[num] ? obj[num] ++ : obj[num] = 1) 
    return Object.fromEntries(Object.entries(obj).
        filter(([key, value]) => value === Math.max(...Object.values(obj))))   
}



