// Coding Challenge:
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

function isValid(str) {
	if (str.length % 2 !== 0) return false;
	while (str.includes("()")) {
		str = str.replace("()", "");
	}
	return str === "";
}
console.log(isValid("(" ));
