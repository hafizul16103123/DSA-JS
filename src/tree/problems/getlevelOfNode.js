/**
 * Get Level of a node in a Binary Tree
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

function getLevelUtil(node, data, level) {
    if (node == null) return 0;
    console.log({level,"node.val":node.val,data})
    
    if (node.val == data) return level;

    let downlevel = getLevelUtil(node.left, data, level + 1);
    if (downlevel != 0) return downlevel;

    downlevel = getLevelUtil(node.right, data, level + 1);
    return downlevel;
}


console.log(getLevelUtil(node1, 5, 1))

