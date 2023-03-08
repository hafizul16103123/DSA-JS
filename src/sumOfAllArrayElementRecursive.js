const  {performance} =require('./src/utils/performance')

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