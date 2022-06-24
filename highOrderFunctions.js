const arr = [5,1,3,2,6,7]

//Double = [10,2,6,4,12,14]
//Triple = [15,3,24,9,6,18,21]
//Binary = ["101","1","11","10","110"]

function double(x){
    return x*2
}

//const output = arr.map(double)



function triple(x){
    return x*3
}

//const output = arr.map(triple)


function Binary(x){
    return x.toString(2)
}

//const output = arr.map(Binary)
// const output = arr.map(function(x){
//     return x.toString(2)
// })
//const output = arr.map((x)=>x.toString(2))
//console.log(output)


//filter function used to filter the value from the array
//filter odd values
// function isOdd(x){
//     return x%2;
// }
// const outPut= arr.filter(isOdd).sort()

// const greater = arr.filter((x)=>x>4)


// console.log(greater)


//Reduces 
//reduces take all array and give one out put 

const array = [5,1,3,2,6,7]

//sum or max
function findSum(array){
    let sum = 0;
    for(let i=0;i<array.length; i++){
        sum = sum+arr[i]
    }
    return sum 
}
//console.log(findSum(array))

// transform the find function to reduces 
const sum = arr.reduce(function(acc,curr){
    acc=acc+curr
    return acc;
},0)// 0 is the initial value off accumileter

//console.log(sum)
// how we can find max value 
function findMax(array){
    let max=0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max;
}
//console.log(findMax(array))

// Max with reduces 
 const maxReduce = array.reduce(function(acc,curr){
     if(curr > acc){
        acc = curr;
    }
    return acc
 },0)
 
//console.log(maxReduce)

////////////////////////////////////////////////////////////////////////////////////////
const users=[
    { firstName:"lee",
    LastName:"pol",
    age:3
    },
    { firstName:"Bili",
    LastName:"lolo",
    age:6
    },
    { firstName:"fikir",
    LastName:"rol",
    age:9
    },
    { firstName:"kena",
    LastName:"rol",
    age:3
    }


];

//find List of full name 

const fullName = users.map((name)=>name.firstName +" "+ name.LastName)
//console.log(fullName)

// find the same age group
// acc = {26:2,75:1,50:1}
const ageGroup = users.reduce(function(acc,curr){
    if(acc[curr.age]){
         acc[curr.age] = ++acc[curr.age]
    }
    else{
        acc[curr.age]=1
    }
      return acc
},{})//our acc initial is empty object 

//console.log(ageGroup )

//filter user lessan 5 

const lessThanFive = users.filter((user)=>user.age < 5).map((u)=>u.firstName)
//console.log(lessThanFive)

// const lessThanFiveRedus = users.reduce(function(acc,curr) {
//        if(acc[curr.age] < 5){
//       acc[curr.age]
//        }
//        else{
//         return 'Not Found'
//        }
//       return acc
// },{})

// console.log( lessThanFiveRedus)

const items = [
    { name: 'bike', price: 100},
    { name: 'Tv', price: 200},
    { name: 'bike', price: 10},
    { name: 'bike', price: 1000}
]

const filteredItem = items.filter((item)=>{
    return item.price<=100
})

//console.log( filteredItem )
const ItemName = items.map((item)=>{
    return item.price
})
//console.log(ItemName)

const foundItem = items.find((item)=>{
    return item.name === 'Tv'
})
//console.log(foundItem )
const loopItem = items.forEach((item)=>{
  //  console.log( item.name)
})

const hasInexpensiveItems = items.some((item)=>{// retun boolina and cheak if one item much the specification 
    return item.price<=30
})
//console.log(hasInexpensiveItems)
const  InexpensiveItems= items.every((item)=>{
    return item.price<100
})
//console.log( InexpensiveItemsg)


function diviser(num){
    num.filter((x)=>{return x%2})
   
}
console.log(diviser[1,4,5,8,9])