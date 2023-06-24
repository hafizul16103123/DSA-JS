/**
 * Sum of all left leaves of a binary tree 
 *     3
 * 9     20
 *     15  7
 * 
 * result=9+15=24
 */


class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null

    }

}

// constract node
const node3 = new Node(3)
const node9 = new Node(9)
const node20 = new Node(20)
const node15 = new Node(15)
const node7 = new Node(7)

//constract tree
node3.left = node9
node3.right = node20
node20.left = node15
node20.right = node7

console.log(node3)

// BFS traverse
function traverseTree(root) {
    const queue = [root]
    let sum=0
    while (queue.length > 0) {

        const currentNode = queue.shift()
        console.log(currentNode.val)
        if(currentNode.left){
            sum+=currentNode.left.val
            queue.push(currentNode.left)
        }
        if(currentNode.right){
            queue.push(currentNode.right)
        }
    }
    return sum

}

console.log(traverseTree(node3))
