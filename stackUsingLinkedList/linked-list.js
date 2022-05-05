export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    //add;
    append(value) {
        const newNode = { value: value, next: null }

        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;

        if (!this.head) {
            this.head = newNode;
        }
    }

    // prepend
    prepend(value) {
        const newNode = { value: value, next: this.head };

        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
    }

    // delete
    delete(value) {
        if (!this.head) {
            return null;
        }

        if (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        const curNode = this.head;
        // checking sec elem; by checking the first item and checking the next property.
        while (curNode.next) {
            if (curNode.next.value === value) {
                curNode.next = curNode.next.next;
            } else {
                curNode = curNode.next;
            }
        }

        //
        if (this.tail.value === value) {
            this.tail = curNode;
        }

    }

    // find
    find(value) {
        if (!this.head) {
            return new Error('No data found');
        }

        let curNode = this.head;
        while (curNode) {
            if (curNode.value === value) {
                return curNode;
            }
            curNode = curNode.next;
        }
        return new Error('No data found!')
    }

    // delete the head list;
    deleteHead() {
        if (!this.head) {
            return new Error('No element exists!')
        }

        const deleteItem = this.head;
        // checking sec elem; by checking the first item and checking the next property.
        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }
        return deleteItem;
    }

    //convert list into an array;
    toArray() {
        const elements = [];

        let curNode = this.head;
        while (curNode) {
            elements.push(curNode);
            curNode = curNode.next;
        }
        return elements;
    }
}
