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

console.log(a)

// // Iterative approach

// const dfs=(root)=>{
//     //add to to statck
//     const stack=[root]
//     // lop while stack not empty
//     while(stack.length>0){
//         //get top node from stack
//         const currentNode = stack.pop()
//         //print value of current node
//         console.log(currentNode.val)
//         // if current node has children then push to stack
//         if(currentNode.right) stack.push(currentNode.right)
//         if(currentNode.left) stack.push(currentNode.left)
//     }
// }
// dfs(a)


// Recursive approach 

const dfsRecursive = (root) => {
    if (root == null) return
    console.log(root.val)
    dfsRecursive(root.left)
    dfsRecursive(root.right)
}
console.log("Recursive DFS result")
dfsRecursive(a)

// pre order dfs  (self,left,right)
const preOrderDfsRecursive = (root) => {
    if (root == null) return
    console.log(root.val)
    preOrderDfsRecursive(root.left)
    preOrderDfsRecursive(root.right)
}
console.log("Pre order DFS result")
preOrderDfsRecursive(a)
// post order dfs  (left,right,self)
const postOrderDfsRecursive = (root) => {
    if (root == null) return
    postOrderDfsRecursive(root.left)
    postOrderDfsRecursive(root.right)
    console.log(root.val)
}
console.log("Post order DFS result")
postOrderDfsRecursive(a)

// in order dfs (left,self,right)
const InOrderDfsRecursive = (root) => {
    if (root == null) return
    InOrderDfsRecursive(root.left)
    InOrderDfsRecursive(root.right)
    console.log(root.val)
}
console.log("In order DFS result")
InOrderDfsRecursive(a)