function substringOccurence(str) {
    resultArray = []
    if(str) { // if str is non-empty
        strLen = str.length;
        n = Math.floor(strLen / 2);
        for(let i = 1; i<=n; i++) {
            if( (i == 1) || ((strLen % i) == 0) ) {
                subStr = str.substring(0,i);
                result = isPerfectSubstring(subStr,i,str);
                if(result != -1) {
                    resultArray = result;
                    return resArray;
                }
            }
        }
        resultArray = [str,1];
        return resultArray;
    }
    else {
        console.log("String can not be empty");
        return;
    }
}

//"helloh" 8 2,4
function isPerfectSubstring(subStr, i, str) {
    count = 0;
    for(let p = i; p< str.length; p= p+i) {
        nextSubString = str.substring(p,p+i);
        if(!(subStr === nextSubString)) {
            return -1;
        }
        count++;
    }
    count++;
    resArray = [subStr, count];
    return resArray;
}
console.log(substringOccurence("uiui7"));