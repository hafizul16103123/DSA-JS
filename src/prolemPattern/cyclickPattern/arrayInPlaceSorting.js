/**
 * Sort an array in place
 *  0  1  2  3  4 => index
 * [3, 1, 5, 4, 2] => unsorted array
 */

const cyclickSort = (arr) => {
    let i = 0;
    const arrLength = arr.length
    while (i < arrLength) {

        const toSwap = arr[i] // 3 ; element
        const swapWithIdx = toSwap - 1  // 2 ; element's appropriate position

        // check they are not already sorted
        if (toSwap !== arr[swapWithIdx]) {  // 3 !== 5 ; element is not it's appropriate position so swap to take appropriate position
            // sweap
            const swapWith = arr[swapWithIdx]
            arr[swapWithIdx] = toSwap
            arr[i] = swapWith
        } else {
            // if elment is sorted already then check next element
            i++
        }
    }
    return arr
}

const arr = [3, 1, 5, 4, 2]
const arr2 = [2,6,4,3,1,5,]
const arr3 = [1,5,6,4,3,2]
const arr4 = [21,23,19,22,20]

console.log(cyclickSort(arr))
console.log(cyclickSort(arr2))
console.log(cyclickSort(arr3))
console.log(cyclickSort(arr4))