// Kata Task
// My little ants are marching across the terrain from left-to-right in the order A then B then C...

// What order do they exit on the right hand side?

// Notes
// - = solid ground
// . = a gap
// The number of ants may differ but there are always enough ants to bridge the gaps
// The terrain never starts or ends with a gap
// Ants cannot pass other ants except by going over ant-bridges
// If there is ever ambiguity which ant should move, then the ant at the back moves first
// Example
// Input
// ants = GFEDCBA
// terrain = ------------...-----------
// Output
// result = EDCBAGF


 const ants = 'GFEDCBA';

 const terrain = '------------...----------';

 class Ant{
     order = 0;
     state='';
     constructor (name, order){
         this.name = name;
         this.order = order;


     }
 }

 class Land{
     constructor(ground){
         this.ground = ground;
         console.log(this.ground)
         
     }
 }

 for(let i=0; i<terrain.length;i++){
     if(terrain[i]==='_'){
         let land =new Land (terrrain[i])
     }
 }