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

// //iteratively
// // LinkedList doSum iteratively
// function reserseInplaceIteratively(head, index) {

//     let prev = null
//     let currentNode = head

//     while (currentNode !== null) {
//         let nextNode = currentNode.next
//         currentNode.next = prev
//         prev = currentNode
//         currentNode = nextNode
//     }
//     return prev.val

// }
// console.log(reserseInplaceIteratively(nodeA, 2))
console.log("----------------------")

//Recursively
//LinkedList do sum Recursively
function reserseInplaceRecursively(head, prev = null) {
    if (head == null) return prev.val
    const nextNode = head.next
    head.next=prev
    return reserseInplaceRecursively(nextNode, head)
}

console.log(reserseInplaceRecursively(nodeA, 2))
// 2 8 3 7
// 2 1 0