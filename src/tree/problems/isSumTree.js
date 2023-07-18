/**
 * Check if a given Binary Tree is SumTree
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

const sumTreeRec = (root) => {
    if (root == null) return 0
    return root.val + sumTreeRec(root.left) + sumTreeRec(root.right)

}


const isSumTree = (root, sum) => {
    const sumTree = sumTreeRec(root)
    if (sumTree == sum) return true
    return false
}
console.log(isSumTree(node1,15))