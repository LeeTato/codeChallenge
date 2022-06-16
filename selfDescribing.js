// Input: Your program should read lines of text from standard input. Each line contains a single positive integer, N.
// Output: For each input N, print 1 to standard output if N is a self-describing number, Otherwise print 0
// E.g:- 2020 is a self-describing number : Position 0 has value 2 and there are two 0s in the number. Position 1 has value 0 because there are no 1s in the number. Position 2 has value 2 and there are two 2s. And the position 3 has value 0 and there are zero 3’s
// Test 1:- Input : 2020,  Expected output:- 1
// Test 2:- Input : 22,  Expected output:- 0

function isSelfDescribing(n) {
    let digits = String(n).split("").map(function(e) {return parseInt(e)});
    let count = digits.map(
        (x) =>{
            return 0
        })
    digits.forEach(
        (d) =>{ 
        if (d >= count.length) {
            return 0 
        }
        count[d] += 1;
    });

     if (digits === count) {
        return 1;
    }
    if (digits.length != count.length) {
        return 0;
    }
    
    for (let i=0; i< digits.length; i++){
      if (digits[i] !== count[i]) {
        return 0;
      }
    }
    return 1;
}

console.log(isSelfDescribing(22))