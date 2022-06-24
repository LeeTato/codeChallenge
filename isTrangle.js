function isTriangle(a,b,c){
    let side1= a + b > c;
    let side2= b + c > a;
    let side3= a + c > b;
    return side1 && side2 && side3
}

console.log(isTriangle(1,2,2))