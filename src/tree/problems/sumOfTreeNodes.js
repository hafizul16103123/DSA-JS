/**
 * Create a tree and Sum of all node of  that tree
 */
"use strict"
class node {
    constructor(val) {
        this.val = val;
        this.left = null
        this.right = null
    }
}
//create node
const a = new node(3)
const b = new node(2)
const c = new node(7)
const d = new node(4)
const e = new node(-2)
const f = new node(5)

// assign left and right => constract tree
a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

console.log(a)

const sumOfTreeNodes = (root) => {
    if (root === null) return 0
    return sumOfTreeNodes(root.left) + root.val + sumOfTreeNodes(root.right)
}
console.log(sumOfTreeNodes(a))

