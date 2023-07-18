/**
 * Insertion in a Binary Tree in level order.
 * Given a binary tree and a key, insert the key into the binary tree at the first position available in level order.
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
// const node5 = new node(5)
const node6 = new node(6)

// constract tree
node1.left = node2
node1.right = node3
node2.left = node4
// node2.right = node5
node3.left = node6

const bredthFirstTraverse=(root)=>{
    // add to the statck
    const queue=[root]
    // loop while queue not empty
    while(queue.length>0){
        // get top node from queue
        const currentNode = queue.shift()
        // print value of current node
        console.log(currentNode.val)
        // if current node has children then push to queue
        if(currentNode.left) queue.push(currentNode.left)
        if(currentNode.right) queue.push(currentNode.right)
    }
}




// DFS traverse recursively
const insert = (root,val) => {
    const queue = [root]
    while (queue.length > 0) {
        const currentNode = queue.shift()
        if (currentNode.left) {
            queue.push(currentNode.left)
        } else {
            const node5 = new node(val)
            currentNode.left = node5
            break 
        }
        if (currentNode.right) {
            queue.push(currentNode.right)
        } else {
            const node5 = new node(val)
            currentNode.right = node5
            break
        }
    }

}


console.log("Before insert")
bredthFirstTraverse(node1)

insert(node1,5)

console.log("After insert")
bredthFirstTraverse(node1)