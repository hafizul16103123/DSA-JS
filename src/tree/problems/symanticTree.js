/**
 * Symmetric Tree (Mirror Image of itself)
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

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right.left = new Node(4);
root.right.right = new Node(3);

//      1
//  /        \
// 2          2
// / \       / \
// 3   4     4   3

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

console.log(areMirror(root, root))






