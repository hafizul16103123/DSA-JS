/**
 * Write a program to Calculate Size of a tree | Recursion
 */
class node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null
    }
}

const node1 = new node(1)
const node2 = new node(2)
const node3 = new node(3)
const node4 = new node(4)
const node5 = new node(5)

// constract tree
node1.left = node2
node1.right = node3
node2.left = node4
node2.right = node5

const calculateSize = (root) => {

    if (root == null) return 0
    let sum = 1 + calculateSize(root.left) + calculateSize(root.right)
    return sum

}

console.log(calculateSize(node1))