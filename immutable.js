const person = {name:'logan'};
Object.freeze(person);
person.age=30
const mutated =person.name ="lee"