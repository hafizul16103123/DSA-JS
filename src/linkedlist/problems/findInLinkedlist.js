/**
 * find  a value,if exists then return true or false
 */
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
// create node
const nodeA = new Node(2)
const nodeB = new Node(8)
const nodeC = new Node(3)
const nodeD = new Node(7)
//construct linkedlist

nodeA.next = nodeB
nodeB.next = nodeC
nodeC.next = nodeD

//iteratively
// LinkedList doSum iteratively
function findTargetIteratively(head,target) {
   
    let currentNode = head
    while (currentNode !== null) {
        if(target===currentNode.val) return true
        currentNode = currentNode.next

    }
    return false
}
console.log(findTargetIteratively(nodeA,2))
console.log("----------------------")

//Recursively
//LinkedList do sum Recursively
function findTargetRecursively(head, target) {
    if (head == null) return false
    if (head.val == target) return true
    return findTargetRecursively(head.next,target)
}

console.log(findTargetRecursively(nodeA,2))
// 2 8 3 7
//2