// check uniq string 
function isUniqString(str){
    const arr = str.split('')
 for(i=0;  i< arr.length; i++){
for(j=i+1; j< arr.length; j++){
   if(arr[i]===arr[j]){
  return false
   }
}
 }
 return true
 } 
      
//console.log(isUniqString('abc'))

function isUniqStringT(str){
    let obj = {}
    const arr = str.split('')
    for(i=0; i<arr.length; i++){
        if(obj[arr[i]] && obj[arr[i]] >= 1){
            return false
        }else{
            obj[arr[i]]=1;
        }
    }
    return true 
}
console.log(isUniqStringT('abch'))