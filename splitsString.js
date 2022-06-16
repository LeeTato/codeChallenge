// Complete the solution so that it splits the string into pairs of two characters. 
//If the string contains an odd number of characters then 
//it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// 'abc' =>  ['ab', 'c_']
// 'abcdef' => ['ab', 'cd', 'ef']

function splitString(string){
    let i=0, result=[];
    if(string.length %2 !==0){ string+= "_"  }
    
    while(i< string.length){
        result.push(string[i]+string[i+1])
        i+=2
    }
       return result 
}

console.log(splitString('abcdef'))