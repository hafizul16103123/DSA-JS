/**
 * insert all linkedlist values to a array
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
function fillvaluesLinkedListToArrayIteratively(head) {
    let sum = 0
    let currentNode = head
    while (currentNode !== null) {
        sum += currentNode.val
        currentNode = currentNode.next

    }
    return sum
}
console.log(fillvaluesLinkedListToArrayIteratively(nodeA))
console.log("----------------------")

//Recursively
//LinkedList do sum Recursively
function doSum(head) {
    if (head == null) return 0
    return head.val + doSum(head.next)
}

console.log(doSum(nodeA))