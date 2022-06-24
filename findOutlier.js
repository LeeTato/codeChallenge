function findOutlier(integers){
  let even = []
  let odd=[]
  for (let i=0; i<integers.length;i++){
    if(integers[i]%2===0){
        even.push(integers)

    } else if(integers[i]% 1===0){
        odd.push(integers[i])   
    } else if(integers[i]%-2 === 0){
        even.push(integers[i])
    }else{
        odd.push(integers[i])
    }
  }
  if(even.length<odd.length){
    return Number(even)
  }else{
    return Number(odd)
  }
}

//console.log(findOutlier([1,2,4,6,8,5]))

// function findOutlier(int){
//     let even = int.filter(a=>a%2==0);
//     let odd =int.filter(b=>b%2)
//     return even.length==1  ? even[0]:odd[0]
// }
console.log(findOutlier([2,3,4,6,8,10]))