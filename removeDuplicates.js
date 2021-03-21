const numbers = [1,2,1,2,3,5,1]

const removeDuplicate = (num) => {
   return num.filter((n, index)=> num.indexOf(n) === index)
}

const removeDuplicate1 = (array) => {
   let newArray = []
   array.map(element => {
      if(!newArray.includes(element)){
         newArray.push(element)
      }
   });
   return newArray
}

const removeDuplicate2 = (array) => {
   let newArray = []
   array.map((element)=>{
      if(newArray.indexOf(element) === -1){
         newArray.push(element)
      }
   })
   return newArray

}
console.log(removeDuplicate(numbers))
