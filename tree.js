function tree(){
    for(let i = 0; i < 7; i++){
        console.log(' '.repeat(7 - i) + '*'.repeat(i * 2 + 1));
    }
}
tree();
function tree2(){
    for(let i = 0; i < 7; i++){
        console.log("*".repeat(i))
    }
}
tree2();