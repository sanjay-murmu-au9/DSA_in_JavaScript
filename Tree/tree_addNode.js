class Node {
    constructor(value, parentNode = null) {
        this.children = [];
        this.value = value;
        this.parent = parentNode;
    }

    addNode(value) {
        const segments = value.split('/'); // split js method can be appied on string
        // nothing to add;
        if (segments.length === 0) {
            return;
        }

        // if segment has value one;
        if (segments.length === 1) {
            const node = new Node(segments[0], this); //segments[0], put it in first place
            this.children.push(node);
            return { node: node, index: this.children.length - 1 }
        }

        //if segment has length longer then 1
        const existingChildNode = this.children.find(child => child.value === segments[0]); // segments[0] --> first el in segment array

        //if exit then add on that || else create new node
        if (existingChildNode) {
            existingChildNode.addNode(segments.slice(1).join('/')); // slice(1) --> skept first elem. 
        } else {
            // if don't find existingChildNode. we need to create that node
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

            // if dont find match child segment
            if (existingNodeIndex < 0) {
                throw new Error('Could not find the matching value!');
            }
            // if existingNodeIndex >= 0, we find a child node
            this.children.splice(existingNodeIndex, 1); // add existingNodeIndex, remove 1 elem
        }

        // if we have more segment then one;
        if (segments.length > 1) {
            const existingChildNode = this.children.find(child => child.value === segments[0])

            // If find no child node
            if (!existingChildNode) {
                throw new Error("Could not find matching path! path segment: " + segments[0])
            }

            // we find a child node;
            existingChildNode.removeNode(segments.slice(1).join('/')); // slice (str,end)
        }
    }

    find(value) {
        // Depth- first Search
        // console.log(this, "<===Looking for one side of the branch only")
        // for (const child of this.children) {
        //     if (child.value === value) {
        //         return child;
        //     }
        //     const nestedChildNode = child.find(value);
        //     if (nestedChildNode) {
        //         return nestedChildNode;
        //     }
        // }


        console.log(this, "<===Looking for value in the child segment")
        //FInding using Breath -first
        for (const child of this.children) {
            // console.log(child.value, "<==child")
            if (child.value === value) {
                return child;
            }
        }

        for (const child of this.children) {
            const nestedChildNode = child.find(value);
            if (nestedChildNode) {
                return nestedChildNode;
            }
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

    remove(path) {
        this.root.removeNode(path);
    }

    find(value) {
        // if finding root node;
        if (this.root.value === value) {
            return this.root;
        }

        // if root node value we are not looking for
        return this.root.find(value)
    }
}

const filesystem = new Tree('/');
filesystem.add('documents');
filesystem.add('documents/myData/tax.docs');
filesystem.add('personal');
filesystem.add('games/cod.exe');
filesystem.add('games/cod2.exe');
// filesystem.remove('games/cod3.exe') // which is not there

// filesystem.remove('games/cod.exe');


console.log(filesystem.find('personal'), "<===find");

console.log(filesystem);