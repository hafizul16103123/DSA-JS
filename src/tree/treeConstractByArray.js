/**
 * Binary tree array reprresentation
 */

const tree = new Array(10).fill(null)

const setRoot = (val) => {
    if (tree[0] !== null) {
        console.log("Tree already have root")
    } else {
        tree[0] = val
    }
}
const setLeft = (val, parent) => {
    if (tree[parent] == null) {
        console.log("No Root found")
    } else {
        tree[(parent * 2) + 1] = val
    }
}
const setRight = (val, parent) => {
    if (tree[parent] == null) {
        console.log("No Root found")
    } else {
        tree[(parent * 2) + 2] = val
    }
}

const printTree = (tree) => {
    for (let i = 0; i < tree.length; i++) {
        if (tree[i] !== null) {
            console.log(tree[i])
        }else{
            console.log("-")
        }

    }
}


setRoot("A")
setLeft("B", 0);
setRight("C", 0);
setLeft("D", 1);
setRight("E", 1);
setRight("F", 2);
printTree(tree)

