class Node {
    constructor(value, parentNode = null) {
        this.children = [];
        this.value = value;
        this.parent = parentNode;
    }

    addNode(value) {
        const segments = value.split('/');
        if (segments.length === 0) {
            return;
        }

        if (segments.length === 1) {
            const node = new Node(segments[0], this);
            this.children.push(node);
            return { node: node, index: this.children.length - 1 }
        }

        //if segment has length longer then 1
        const existingChildNode = this.children.find(child => child.value === segments[0]);

        //if exit then add on that || else create new node
        if (existingChildNode) {
            existingChildNode.addNode(segments.slice(1).join('/'));
        } else {
            const node = new Node(segments[0], this);
            node.addNode(segments.slice(1).join('/'));// slice(1) -> start index.
            this.children.push(node);
            return { node: node, index: this.children.length - 1 }
        }
    }

}

class Tree {
    constructor(rootNode) {
        this.root = new Node(rootNode);
    }

    add(path) {
        this.root.addNode(path);
    }

}

const filesystem = new Tree('/');
filesystem.add('documents');
filesystem.add('documents/personal/tax.docs');
filesystem.add('games/cod.exe');
filesystem.add('games/cod2.exe');

console.log(filesystem);