
function addUsername(list){
    let currentYear =new Date().getFullYear();
    for(let e of list)
    e.username =`${e.firstName.toLowerCase()}${e.lastName[0].toLowerCase()}${currentYear-e.age}`
   return e
    
}





console.log(addUsername( [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
  ]))