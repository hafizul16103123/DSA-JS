



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
console.log(nodeA)


//iteratively
//traverse LinkedList 
function traverseLinkedlistIteratively(head) {
    let current = head
    while(current!==null){
        console.log(current.val)
        current=current.next

    }
}
traverseLinkedlistIteratively(nodeA)
console.log("----------------------")

//Recursively
//traverse LinkedList 
function traverseLinkedlistRecursively(head) {
    if(head==null) return
    console.log(head.val)
    traverseLinkedlistRecursively(head.next)

   
}
traverseLinkedlistRecursively(nodeA)

