class LinkedList {
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
        // checking sec node
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

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append('hello there');
linkedList1.append('max');
linkedList1.append('max');
linkedList1.append(true);
linkedList1.append(18.95);
//prepend
linkedList1.prepend('First value')
linkedList1.prepend('First value')

console.log(linkedList1.toArray());


linkedList1.delete('max');
linkedList1.delete('First value');
linkedList1.delete(18.95);
console.log(linkedList1.toArray());


console.log(linkedList1.find('max'));
console.log(linkedList1.find('hello there'));