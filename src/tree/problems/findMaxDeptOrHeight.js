/**
 * Find the Maximum Depth or Height of given Binary Tree
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

// DFS traverse recursively
const findMaxDeptOrHeight = (root) => {
    if (root == null) return 0

    let maxDepth;
    const leftMaxDepth = findMaxDeptOrHeight(root.left)
    const rightMaxDepth = findMaxDeptOrHeight(root.right)
    maxDepth = Math.max(leftMaxDepth, rightMaxDepth)
    return maxDepth += 1

}
console.log(findMaxDeptOrHeight(node1))