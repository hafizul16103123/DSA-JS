/**
 * Breadth first traverse values problem
 * 
 *            a
 *        b      c
 *      d   e       f
 * 
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
const a = new node("a")
const b = new node("b")
const c = new node("c")
const d = new node("d")
const e = new node("e")
const f = new node("f")

// assign left and right => constract tree
a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

console.log(a)

function bfs(root) {
    const values = []
    let queue = [root]
    while (queue.length > 0) {
        const currentNode = queue.shift()
        values.push(currentNode.val)
        if (currentNode.left) queue.push(currentNode.left)
        if (currentNode.right) queue.push(currentNode.right)
    }
    return values

}
console.log(bfs(a))
