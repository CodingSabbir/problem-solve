const avgPercentage=(arr)=>{
    
   for(let number of arr){
    if(number < 300 ){
        return null;
    }
   }
    
   const total= arr.reduce((acc, val)=> acc + val, 0)
   const aveNumber=total/arr.length
   const parcentens=aveNumber/1000
   const result=Math.round(parcentens*100)
   return result

}
console.log(avgPercentage([700,650,847,365,320,]))