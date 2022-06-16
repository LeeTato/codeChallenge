// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
// For example:
// a = 1
// b = 4
// --> [1, 2, 3, 4]



function getRange(a,b)
{
    ar = new Array();
    var y = a - b > 0 ? a - b : b - a;
    for (i=1;i<y;i++)
    {
        ar.push(i+a);
    }
    return ar;
}
console.log(getRange(1,5))