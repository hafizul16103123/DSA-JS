/**
 * zipper problems
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

const nodeX = new Node("X")
const nodeY = new Node("Y")

//construct linkedlist 1

nodeA.next = nodeB
nodeB.next = nodeC
nodeC.next = nodeD

//construct linkedlist 2

nodeX.next = nodeY

// //iteratively
// // Zipper iteratively
// function zippePronlemIteratively(head1, head2) {
//     let count = 0
//     let tail = head1
//     let current1 = head1.next
//     let current2 = head2
//     while (current1 !== null && current2 !== null) {
//         if (count % 2 == 0) {
//             tail.next = current2
//             current2 = current2.next
//         } else {
//             tail.next = current1
//             current1 = current1.next
//         }

//         tail = tail.next
//         count++
//     }
//     if (current1 !== null) tail.next = current1
//     if (current2 !== null) tail.next = current2

//     return head1


// }
// const zipperList = zippePronlemIteratively(nodeA, nodeX)
// console.log(zipperList)
// console.log("----------------------")

console.log("----------------------")

// Recursively
// Zipper Recursively
function zippePronlemRecursively(head1, head2) {
    if (head1 === null && head2 === null) return null
    //if head1 is short then return rest of head2 nodes
    if (head1 === null) return head2
    //if head2 is short then return rest of head1 nodes
    if (head2 === null) return head1

    const next1 = head1.next
    const next2 = head2.next
    head1.next = head2
    head2.next = zippePronlemRecursively(next1, next2)

    return head1
}

const zipperListRecursively = zippePronlemRecursively(nodeA, nodeX)
console.log({ zipperListRecursively })

function traverseLinkedlistIteratively(head) {
    let currentNode = head
    while (currentNode !== null) {
        console.log(currentNode.val)
        currentNode = currentNode.next

    }
}
traverseLinkedlistIteratively(zipperListRecursively)
console.log("----------------------")



