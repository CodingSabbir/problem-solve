const avgPercentage=(arr)=>{
    
   for(let number of arr){
    if(number < 300 ){
        return 'failed';
    }
   }
    
   const total= arr.reduce((acc, val)=> acc + val, 0)
   const aveNumber=total/arr.length
   const parcentens=aveNumber/1000
   const result=Math.round(parcentens*100)
   return result
}
console.log(avgPercentage([700,650,847,365,320,]))




// const maxMumNumber=(array)=>{
//     let maxNum=array[0]
// for(let num of array){
//    if(num > maxNum){
//      maxNum=num
//    }
// }
// return maxNum
// }
// console.log(maxMumNumber([10,50,42,26,15,75,50,]))

const maxMumNumber=(array)=>{
const result=array.reduce((acc,curr)=>{
        const max= acc > curr ? acc : curr
        return max
    })
    return result
}
console.log(maxMumNumber([10,50,42,26,15,75,50,]))



const sameArray=(arr1,arr2)=>{
// console.log(arr1.length === arr2.length)


for (let i=0; i<arr1.length; i++){
   if(arr1[i]!==arr2[i]){
    return false
   }
}
}
console.log(sameArray([1,2,3,4,5,6,7,8],[1,2,5,4,6,7,8]))