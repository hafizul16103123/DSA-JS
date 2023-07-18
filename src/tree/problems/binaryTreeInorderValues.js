var inorderTraversal = function (root) {
    if (root == null) return []
    const res = []
    traverse(root, res)
    return res

};

function traverse(root, res) {
    if (root == null) return
    traverse(root.left, res)
    res.push(root.val)
    traverse(root.right, res)
}