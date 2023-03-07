/**
 * Depth first traverse
 *  possible to solve by recursively by the use of call stack but Bredth first is not possible through recurvive easily
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

// console.log(a)

// Recursive approach 
const dfsRecursiveSearchTarget = (root,target) => {
    if (root == null) return
    // console.log(root.val)
    if(root.val=== target){
        return true
    }
    dfsRecursiveSearchTarget(root.left)
    dfsRecursiveSearchTarget(root.right)
    return false
}

console.log(dfsRecursiveSearchTarget(a,"a"))
console.log(dfsRecursiveSearchTarget(a,"z"))
