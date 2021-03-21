const numbers = [1,2,1,2,3,5]

function removeDuplicate(num) {
   return num.filter((n, index)=> num.indexOf(n) === index)
}

function removeDuplicate1(array) {
   let newArray = []
   array.map(element => {
      if(!newArray.includes(element)){
         newArray.push(element)
      }
   });
   return newArray
}

function removeDuplicate2(array) {
   let newArray = []
   array.map((element)=>{
      if(newArray.indexOf(element) === -1){
         newArray.push(element)
      }
   })
   return newArray

}
console.log(removeDuplicate2(numbers))
