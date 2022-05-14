class Node {
    constructor(value) {
        this.value = value;

    }

    addNode() {

    }
}

class Tree {
    constructor() {
        this.root = new Node(null)
    }

    add(value) {
        this.root.addNode(value);
    }

    remove(value) { }
}