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
function getNodeIteratively(head, index) {

    let currentNode = head
    let i = 0
    while (currentNode !== null) {
        if (index == i) return currentNode.val
        currentNode = currentNode.next

        i++
    }
    return null
}
console.log(getNodeIteratively(nodeA, 2))
console.log("----------------------")

//Recursively
//LinkedList do sum Recursively
function findTargetRecursively(head, index) {
    if (head == null) return
    if (index == 0) return head.val
    return findTargetRecursively(head.next, index - 1)
}

console.log(findTargetRecursively(nodeA, 2))
// 2 8 3 7
// 2 1 0