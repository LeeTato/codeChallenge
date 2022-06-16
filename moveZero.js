// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

 function moveZeros(arr) {
    const isZero = (value) => value === 0;
    const isNotZero = (value) => !isZero(value);
    let result 
    //return arr.filter(isNotZero).concat(arr.filter(isZero));
    result = [...arr.filter(isNotZero), ...arr.filter(isZero)];
    return result;
  };
  
  console.log(moveZeros( [false,1,0,1,2,0,1,3,"a"]));




