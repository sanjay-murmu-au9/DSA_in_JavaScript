class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    toArray() {
        return this.items.slice(); // copy of the arr, so that it doesn't disrupt arr
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