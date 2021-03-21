const numbers = [4,0,-12,10,2,1]

function findHighest(number) {
    let highest = number[0]
    for (let index = 0; index < number.length; index++) {
       if(number[index] > highest){
           highest = number[index]
       }
    }
    return highest
}

function findHighest1(number) {
    return Math.max(...number)
}

console.log(findHighest1(numbers))

