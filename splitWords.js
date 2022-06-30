function splitWords(str){
  let result=[]
  for(let i=0;i<str.length;i+=2){
     sec = str[i+1] || '_'
      result.push(str[i]+ sec)
    }
  
   return result
}
 console.log(splitWords('abcde'))
////////////////////////////////////////////////////////////
function solution(str){
  let i =0
  let result =[];
  if(str.length%2){
    str+="_"
  }
  while(i<str.length){
    result.push(str[i]+str[i+1])
    i+=2
  }
  return result;
}

//console.log(solution('abcdeo'))

//************************************************************
function solution(str){
  arr = [];
  for(var i = 0; i < str.length; i += 2){
    second = str[i+1] || '_';
    arr.push(str[i] + second);
  }
  return arr;
}
// function solution(str){
//   arr = [];
//   for(var i = 0; i < str.length; i += 2){
//     second = str[i+1] || '_';
//     arr.push(str[i] + second);
//   }
//   return arr;
// }