/**
 * Subtree with given sum in a Binary Tree
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

// const trsverse = (root, expectedSum) => {

//     if (root == null) return 0
//     let sum = root.val + trsverse(root.left, expectedSum) + trsverse(root.right, expectedSum)
//     console.log({sum})
//     return sum

// }
// function isSumTreeSum(node1, expectedSum) {
//     return trsverse(node1, expectedSum)
// }
// console.log(isSumTreeSum(node1, 11))


const bfsTraverse=(root,expectedSum)=>{
    const stack=[root]
    let sum=0;
    while(stack.length>0){
        const current = stack.pop()
        sum+=current.val
        if(current.left)stack.push(current.left)
        
        if(current.right)stack.push(current.right)
        
       if(sum==expectedSum) return true
    }
    return false
}

console.log(bfsTraverse(node1, 11))