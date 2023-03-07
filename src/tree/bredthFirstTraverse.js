/**
 * Breadth first traverse
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

//Bredth first traverse
// Iterative approach

const bredthFirstTraverse=(root)=>{
    //add to to statck
    const queue=[root]
    // lop while queue not empty
    while(queue.length>0){
        //get top node from queue
        const currentNode = queue.shift()
        //print value of current node
        console.log(currentNode.val)
        // if current node has children then push to queue
        if(currentNode.left) queue.push(currentNode.left)
        if(currentNode.right) queue.push(currentNode.right)
    }
}
console.log("Iteratively")
bredthFirstTraverse(a)


