/** Palindrome
 * a word phrase or sequence that reads the same backward as forward
 * Example, mom,level,radar,kayak
 * check if string === reverse
 */

const isPalindrome = string =>{
    //first split and see the revers then we use join to put together the string 
 const reverse = string.split('').reverse().join('')
 if(string === reverse) return true;
  return false;
 
}
console.log( isPalindrome('mom'))