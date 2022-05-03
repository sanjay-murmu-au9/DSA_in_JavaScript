const person = {
    firstName: 'Max',
    age: 31,
    hobbies: ['Sports', 'Cooking'],
    age: 32, // first once will be overwritten;
    greet() {
        console.log('Hi,I am ' + this.firstName + this.lastName);
    }
}

//acces via key Name;
console.log(person['firstName']); // --> Max;
console.log(person.firstName); // --> Max

//to Add;
person.lastName = 'Murmu';
//to Delete
delete person.age // both age will be deleted;

console.log(person);

person.greet()