function repetition(array){
     let obj = {}
     array.map((num)=> {
         if(obj[num]){
             obj[num] ++
         }else{
             obj[num] = 1
         }
     })
     return obj
}

let array = [1,2,3,4,1,3,5,9]

let reult = repetition(array)

let d = Object.entries(reult).filter((key, value)=> value === Math.max(...Object.values(reult)))

console.log(Object.fromEntries(d))