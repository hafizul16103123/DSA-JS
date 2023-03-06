/**
 * merge sort
 */

const mergeSort = (arr) => {
    //base case
    if(arr.length<2) return arr
    //find mid
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    // sort and merge 
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}
const merge =(leftArr,rightArr)=>{
    let sortedArr=[]
    // if left and right array both have length or value
    while(leftArr.length && rightArr.length){
        // check linear camparison and push smaller value to sorted array
        if(leftArr[0]<rightArr[0]){
            //push to sortedArray and remove that value from left array
            sortedArr.push(leftArr.shift())
        }else{
            //push to sortedArray and remove that value from right array
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr,...leftArr,...rightArr]
}
const arr = [-2, -6, 5, 1, 9, 7, 2]
console.log(mergeSort(arr))
