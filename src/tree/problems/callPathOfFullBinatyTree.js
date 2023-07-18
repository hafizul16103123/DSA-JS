/**Calculate depth of a full Binary tree from Preorder ?
 * 
 * A full Binary tree is a special type of binary tree in which every parent node/internal node has either two or no children.
 * 
 * @param {*} tree 
 * @param {*} n 
 * @param {*} index 
 * @returns 
 */
const findDepthRec = (tree, n, index) => {
    // check array end or reach a leaf node
    if (index >= n || tree[index] == "l") return 0;
    // find pathn of left side
    index++
    const leftDepth = findDepthRec(tree, n, index)
    // find pathn of left side
    index++
    const rightDepth = findDepthRec(tree, n, index)
    // return max one plus 1
    return Math.max(leftDepth, rightDepth) + 1

}
const findDepth = () => {
    let index = 0;
    return (findDepthRec(tree, n, index))
}

const input = "nlnnlll";
const tree = input.split('');
const n = tree.length
console.log(findDepth(tree, n))

