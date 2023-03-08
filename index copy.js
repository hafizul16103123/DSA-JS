const  {performance} =require('./src/utils/performance')


// class Node {
//     constructor(val) {
//         this.val = val
//         this.next = null
//     }
// }
// class LinkList {
//     constructor() {
//         this.head = null
//     }
//     append(val) {
//         if (this.head === null) {
//             this.head = new Node(val)
//             return
//         }
//         this._append(val, this.head)
//     }

//     print() {
//         let curr = this.head
//         const res= this._print(curr)
//         console.log(res)
//     }
//     contains(val) {
//         let curr = this.head
//         while (curr) {
//             if (curr.val == val) return true
//             curr = curr.next
//         }
//         return false
//     }
//     _append(val, curr) {
//         if (curr.next === null) {
//             curr.next = new Node(val)
//             return
//         }
//         this._append(val, curr.next)
//     }
//     _print(curr){
//         if(curr===null) return ""
//         return curr.vall + this._print(curr.next)
//     }
// }

// const linklist = new LinkList()
// linklist.append('a')
// linklist.append('b')
// linklist.append('c')
// linklist.append('d')
// linklist.print()
// // console.log(linklist.contains("a"))
// // console.log(linklist.contains("z"))


/**
 * Sum of all array element.
 * Time complexity:n recurtion function call * array.slice have n = O(n2)
 * @param {*} arr 
 * @returns 
 */

const array= new Array(900).fill(1)
const sumOfArrayRecursively = (arr) => {
    if (arr.length == 0) return 0
    return parseInt(arr[0]) + parseInt(sumOfArrayRecursively(arr.slice(1)))
}

// const arr = [1, 2, 3, 4, 5]
console.log("With slice and O(n2)")
const slowStartTime = Date.now()
console.log(sumOfArrayRecursively(array)) 
const slowEndTime = Date.now()
performance("slow",slowStartTime,slowEndTime)


// Better Option with O(n2)
const sumOfArray=(array)=>{
    return _doSum(array,0)

}
const _doSum=(array,idx)=>{
 if(idx === array.length) return 0
 return array[idx]+_doSum(array,idx+1)
}
console.log("Without  slice and O(n)")
const startTime = Date.now()
console.log(sumOfArray(array)) 
const endTime = Date.now()

performance("faster",startTime,endTime)