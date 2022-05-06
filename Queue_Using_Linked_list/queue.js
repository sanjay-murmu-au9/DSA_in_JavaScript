import { LinkedList } from './LinkedListUsingQueue.js';

class Queue {
    constructor() {
        this.list = new LinkedList();
    }

    enqueue(value) {
        this.list.append(value); // new elem are added at the end || FIFO;
    }
    dequeue() {
        this.list.deleteHead(); //  will delete the first elem in first || First in First Out;
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