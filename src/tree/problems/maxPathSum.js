/**
 * Breadth first traverse
             a
 *        b      c
 *      d   e       f
 * 
 */
             "use strict"
             class node {
                 constructor(val) {
                     this.val = val;
                     this.left = null
                     this.right = null
                 }
             }
             // //create node
             // const a = new node("a")
             // const b = new node("b")
             // const c = new node("c")
             // const d = new node("d")
             // const e = new node("e")
             // const f = new node("f")
             const a = new node(1)//            1
             const b = new node(2)//     2            3
             const c = new node(3)//   4   5            6
             const d = new node(4)//
             const e = new node(5)
             const f = new node(6)
             
             // assign left and right => constract tree
             a.left = b
             a.right = c
             b.left = d
             b.right = e
             c.right = f
             
             // console.log(a)
             //         1
             //     2       3
             //   4   5    0   6
             //  0 0 0 0      0   0
             
             
             // //BY BFS
             // function findMin(root) {
             //     let queue=[root]
             //     let min=Infinity
             //     while(queue.length>0){
             //         const current= queue.shift()
             //         min=Math.min(min,current.val)
             //         if(current.left) queue.push(current.left)
             //         if(current.right) queue.push(current.right)
             //     }
             //     return min
             // }
             
             
             // console.log({ "res": findMin(a) })
             
             
             //BY BFS
             function findMaxRootToLeafSum(root) {
                 // if one side is null then return -Infinity
                 if (root == null) return -Infinity
                 //if left and right both are null then it is leaf node
                 if (root.left == null && root.right == null) return root.val
                 //find maxFrom left side
                 const maxSumFromLeft = findMaxRootToLeafSum(root.left)
                 //find maxFrom right side
                 const maxSumFromRight = findMaxRootToLeafSum(root.right)
                 //find max
                 const maxFronLeftAndRight = Math.max(maxSumFromLeft, maxSumFromRight)
                 //add root value with max sum
                 return root.val + maxFronLeftAndRight
             
             }
             
             console.log({ "res": findMaxRootToLeafSum(a) })
             
             
             