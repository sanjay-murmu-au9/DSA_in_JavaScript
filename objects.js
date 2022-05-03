const person = {
    firstName: 'Max',
    age: 31,
    hobbies: ['Sports', 'Cooking'],
    age: 32,
    greet() {
        console.log('Hi,I am ' + this.firstName + this.lastName);
    }
}

//to Add;
person.lastName = 'Murmu';
//to Delete
delete person.age // both age will be deleted;

console.log(person);

person.greet()