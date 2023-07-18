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
             const a = new node(5)//            1
             const b = new node(2)//     2            3
             const c = new node(3)//   4   5            6
             const d = new node(4)//
             const e = new node(1)
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
             function findMinDFS(root) {
             
                 if (root == null) return -Infinity
                 const leftMin = findMinDFS(root.left)
                 const rightMin = findMinDFS(root.right)
                 return Math.max(root.val, leftMin, rightMin)
             
             }
             
             
             console.log({ "res": findMinDFS(a) })
             
             
             