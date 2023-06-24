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
const nodeA = new Node("A")
const nodeB = new Node("B")
const nodeC = new Node("C")
const nodeD = new Node("D")
//construct linkedlist

nodeA.next = nodeB
nodeB.next = nodeC
nodeC.next = nodeD

//iteratively
// LinkedList value added to array iteratively
const values = []
function fillvaluesLinkedListToArrayIteratively(head) {
    let currentNode = head
    while (currentNode !== null) {
        values.push(currentNode.val)
        currentNode = currentNode.next

    }
    return values
}
console.log(fillvaluesLinkedListToArrayIteratively(nodeA))
console.log("----------------------")

//Recursively
//LinkedList value added to array Recursively
function fillvaluesLinkedListToArrayRecursively(head) {
    if (head == null) return
    const values = []
    fillValues(head, values)
    return values
}
function fillValues(head, values) {
    if (head == null) return
    values.push(head.val)
    fillValues(head.next,values)
}
console.log(fillvaluesLinkedListToArrayRecursively(nodeA))