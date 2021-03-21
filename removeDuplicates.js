const numbers = [1,2,1,,2,3,5]

function removeDuplicate(num) {
   return num.filter((n, index)=> num.indexOf(n) === index)
   
}

console.log(removeDuplicate(numbers))