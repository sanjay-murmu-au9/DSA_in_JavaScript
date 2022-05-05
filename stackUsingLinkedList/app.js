import { LinkedList } from './linked-list.js';
// import syntax needed "npm i global http-server"> run http-server & copy the port number; and paste; e.g :- http://localhost:8081/

class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    push(value) {
        this.list.prepend(value);
    }

    pop() {
        return this.list.deleteHead();
    }

    isEmpty() {
        return !this.list.head;
    }

    toArray() {
        return this.list.toArray(); // copy of the arr, so that it doesn't disrupt arr
    }
}

const stack = new Stack();
stack.push('Cook dinner');
stack.push('wash the dishes!');
stack.push('Buy ingredients!');

console.log(stack.toArray());

console.log(stack.pop());
console.log(stack.toArray())
console.log(stack.pop())
console.log(stack.pop())

console.log(stack.toArray())
