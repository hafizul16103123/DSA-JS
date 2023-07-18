/**
 * Check given Binary Trees is same or not
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
b.left = new Node(2)
b.right = new Node(3)
b.left.left = new Node(4)
b.left.right = new Node(5)
//             1
//      2          3
//  4     5

const isIdenticalTrees = (a, b) => {
    if (a == null && b == null) return true
    return a.val == b.val && isIdenticalTrees(a.left, b.left) && isIdenticalTrees(a.right, b.right);

}


if (isIdenticalTrees(a, b))
    console.log("Both trees are identical");
else
    console.log("Trees are not identical");

