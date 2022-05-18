class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
        this.parent = null;
    }

    addNode(value) {
        // if it is first node || root value;
        if (this.value === null) {
            this.value = value;
            return;
        }

        // if it has root node & val is greater then root node
        if (this.value < value) { // such value need to go the right side;
            // if we have right node then add value inside of it as new node.
            if (this.right) {
                this.right.addNode(value);
                return; // return so that below code dosen't execute.
            }
            // else add in right below root node
            const newNode = new Node(value);
            newNode.parent = this; // keeping track of the parents of our different node;
            this.right = newNode;
            return;
        }

        if (this.value > value) {
            if (this.left) {
                this.left.addNode(value);
                return;
            }
            const newNode = new Node(value);
            newNode.parent = this;
            this.left = newNode;
            return;
        }
    }

    remove(value) {
        // we find the node that we want to remove;
        const identifiedNode = this.find(value);

        if (!identifiedNode) {
            throw new Error(`Could not find node with this ${value}`);
        }

        // for leave node no children
        if (!identifiedNode.left && !identifiedNode.right) {
            const identifiedParent = identifiedNode.parent; //parent node should no longer point at this Identified node
            identifiedParent.removeChild(identifiedNode)
            return;
        }

        // removing node that has both left and right leave node || Indentified node has two child;
        if (identifiedNode.left && identifiedNode.right) {

            //call it on the right node bcs only on the right node's 
            // subtree we find bigger values then the value we wanna remove.
            const nextBiggerNode = identifiedNode.right.findNext();

            if (nextBiggerNode.value !== identifiedNode.right.value) {
                this.remove(nextBiggerNode.value);
                identifiedNode.value = nextBiggerNode.value;

            } else {
                identifiedNode.value = identifiedNode.right.value;
                identifiedNode.right = identifiedNode.right.right;
            }
        } else {
            // has either only left or right node
            const childNode = identifiedNode.left || identifiedNode.right; // if identifiedNode.left has value then it will be store in varibale else second value will be
            //copied all the values, pointers child Node to be removed node
            // technically didn't remove the to be removed all the data, but
            // overrode all the data that was stored in it.
            identifiedNode.left = childNode.left;
            identifiedNode.right = childNode.right;
            identifiedNode.value = childNode.value
        }

        if (identifiedNode.left) {
            identifiedNode.left.parent = identifiedNode;
        }
        if (identifiedNode.right) {
            identifiedNode.left.parent = identifiedNode;
        }

    }

    removeChild(node) {
        if (this.left && this.left === node) {
            this.left = null;
            return;
        }

        if (this.right && this.right === node) {
            this.right = null;
            return;
        }

    }

    find(value) {
        if (this.value === value) {
            return this;
        }

        // if the value is greater the  this.value then we only need to look in the right side of Binary search tree.
        if (this.value < value && this.right) { // this.right --> right node exist;
            return this.right.find(value);
        }

        if (this.value > value && this.left) {
            return this.left.find(value);
        }
    }

    // helpr method || if this node for which we call it don't has a left node
    // so this node on which we are calling find next has to be the smallest value we find close to the node.
    // we are looking for.
    findNext() {
        if (!this.left) {
            return this;
        }
        // else recursively call this left untill we find closest bigger value;
        return this.left.findNext();
    }


}

class Tree {
    constructor() {
        this.root = new Node(null) // initially root node has no value
    }

    add(value) {
        this.root.addNode(value);
    }

    remove(value) {
        this.root.remove(value);
    }

    find(value) {
        return this.root.find(value);
    }
}

const tree = new Tree();
tree.add(10); // root
tree.add(5); // left
tree.add(2); // leftNode_left
tree.add(6);// leftNode_right
tree.add(20); // right
tree.add(25); //right_right
tree.add(23);
tree.add(21);
tree.add(15);
tree.add(28);
tree.add(27);
tree.add(31);
tree.add(39); // right _ right_ right

tree.remove(39)
tree.remove(20)
tree.remove(25)
console.log(tree);

console.log(tree.find(6));
console.log(tree.find(7))
console.log(tree.find(39))
