class Queue {
    constructor() {
        this.item = [];
    }

    enqueu(value) {
        this.item.unshift(value) // added in the begging of the arr.
    }

    dequeue() {
        this.item.pop() // remove from end of the list;
    }

    toArray() {
        return this.item.slice(); // return copy of the arr.
    }

}

const queue = new Queue();
queue.enqueu('Max');
queue.enqueu('Manuel');
queue.enqueu('julie')

console.log(queue.toArray());

queue.dequeue();
console.log(queue.toArray());

queue.dequeue();
queue.dequeue();

console.log(queue.toArray())