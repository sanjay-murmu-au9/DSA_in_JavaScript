export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

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

    prepend(value) {
        const newNode = { value: value, next: this.head }
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }
    }

    find(value) {
        if (!this.head) {
            return new Error('There is no elements!')
        }
        let curNode = this.head;

        while (curNode) {
            if (curNode.value === value) {
                return curNode;
            }

            curNode = curNode.next;
        }
    }

    toArray() {
        const elements = [];
        let curNode = this.head;

        while (curNode) {
            elements.push(curNode);
            curNode = curNode.next;
        }
        return elements;
    }

    delete(value) {
        if (!this.head) {
            return new Error('No value matched.')
        }

        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let curNode = this.head;
        while (curNode.next) {
            if (curNode.next.value === value) {
                curNode.next = curNode.next.next;
            } else {
                curNode = curNode.next;
            }
        }

        if (this.tail.value === value) {
            this.tail = curNode;
        }
    }

    deleteHead() {
        if (!this.head) {
            return new Error('No value matched.')
        }

        const deleteItem = this.head;
        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }
        return deleteItem
    }

    insertAfter(value, afterValue) {
        const exisitingNode = this.find(afterValue);

        if (exisitingNode) {
            const newNode = { value: value, next: exisitingNode.next };
            exisitingNode.next = newNode;
        }
    }


}



