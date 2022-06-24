// const arr = [5,1,3,2,6]
//  let odd = []
// //filter odd values

// // function isOdd(x){
// //     return x%2;
// // }
//  arr.filter((x, i) => x%2  && odd.push(i)).sort((a,b) => a-b).forEach((x,i) => arr[odd[i]] = x )

// console.log(arr)

// function sortArray(array){

// }

// array = [5, 3, 2, 8, 1, 4],
//     oddNum = [];

// array.filter((v, i) => v % 2 && oddNum.push(i)).sort((a, b) => a - b)
//     .forEach((v, i) => array[oddNum [i]] = v);

//console.log(array);

// function sortArray(array) {
//     // Return a sorted array.
//     let odd = [];
//      array.filter((x, i) => x%2  && odd.push(i))
//      .sort((a,b) => a-b).forEach((x,i) => array[odd[i]] = x )
//   }


function sortArray(array) {
    let odd = [];
    for(let i = 0; i < array.length; i++) {
        // console.log(i)
     array.filter((x, i) => x%2  && odd.push(i))
    .sort((a,b) => a-b).forEach((x,i) => array[odd[i]] = x )
      
      }
;
    return array;
  }

  console.log(sortArray([5, 3, 2, 8, 1, 4,9,7]))