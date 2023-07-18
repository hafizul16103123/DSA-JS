/**
 * Check if a given Binary Tree is SumTree
 */
class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null
    }
}

var a = new Node(1)
var b = new Node(1)

const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)

// constract tree 1
a.left = new Node(2)
a.right = new Node(3)
a.left.left = new Node(4)
a.left.right = new Node(5)
//             1
//      2          3
//  4     5

// constract tree 2
b.left = new Node(3)
b.right = new Node(2)
b.right.left = new Node(5)
b.right.right = new Node(4)
//           1
//      3          2
//              5    4

const areMirror = (a, b) => {
    /* Base case : Both empty */
    if (a == null && b == null) return true
    // If only one is empty
    if (a == null || b == null) return false
    /*
        * Both non-empty, compare them recursively Note that in recursive calls, we
        * pass left of one tree and right of other tree
        */
    return a.val == b.val && areMirror(a.left, b.right) && areMirror(a.right, b.left);

}

console.log(areMirror(a, b))



const traverse = (root) => {
    const queue = [root]
    while (queue.length > 0) {

        const current = queue.shift()
        console.log(current.val)
        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)
    }

}
console.log("A tree")
traverse(a)
console.log("B tree")
traverse(b)



