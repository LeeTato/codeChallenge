// function isPangram(string){
 

// return /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(string) 
    
    
//   }
//   //console.log(isPangram('he'))

// function isPangram(string){
//     return new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;

// }
// console.log(isPangram('The quick brown fox jumps over the lazy dog'))

// function findNb(m){
//     let n = 0;
//     let sum = 0;
//     while(sum < m){
//         n++;
//         sum += Math.pow(n, 3);
//     }
//     return n >= m ? -1 : n;
// }

// function pigIt(str){
//     return str.split(' ').map(word => {
//         if(word.match(/[a-z]/g)){
//             return word.slice(1) + word[0] + 'ay';
//         }
//         return word;
//     }).join(' ');


// }


