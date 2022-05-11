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

    removeNode(value) {
        const segments = value.split('/');

        if (segments.length === 0) {
            return;
        }
        if (segments.length == 1) {
            const existingNodeIndex = this.children.findIndex(child => child.value === segments[0]);

            if (existingNodeIndex < 0) {
                throw new Error('Could not find the matching value!');
            }
            // if existingNodeIndex >= 0
            this.children.splice(existingNodeIndex, 1); // add existingNodeIndex, remove 1 elem
        }

        if (segments.length > 1) {
            const existingChildNode = this.children.find(child => child.value === segments[0])

            if (!existingChildNode) {
                throw new Error("Could not find matching path! path segment: " + segments[0])
            }
            existingChildNode.removeNode(segments.slice(1).join('/')); // slice (str,end)
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

    removeNode(path) {
        this.root.removeNode(path);
    }
}

const filesystem = new Tree('/');
filesystem.add('documents');
filesystem.add('documents/personal/tax.docs');
filesystem.add('games/cod.exe');
filesystem.add('games/cod2.exe');

filesystem.removeNode('games/cod.exe');

console.log(filesystem);