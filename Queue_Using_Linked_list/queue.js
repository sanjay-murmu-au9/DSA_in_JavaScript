import { LinkedList } from './LinkedListUsingQueue';

class Queue {
    constructor() {
        this.list = new LinkedList();
    }

    enqueue(value) {
        this.list.append(value); // unshift to added in thebeggining;
    }
    dequeue() {
        this.list.deleteHead();
    }

    isEmpty() {
        return !this.list.head;
    }

    toArray() {
        return this.list.toArray()
    }
}

const queue = new Queue();
queue.enqueue('sanjay');
queue.enqueue('seven');
queue.enqueue('Albinus');

console.log(queue.toArray());

queue.dequeue();

console.log(queue.toArray());

queue.dequeue();
queue.dequeue();

console.log(queue.toArray());