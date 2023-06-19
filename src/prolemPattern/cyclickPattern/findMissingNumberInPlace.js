/**
 * find missing number from a ranged array [0 to n]
 * input : [4, 0, 3, 1]
 *  almost sorted array with missing value : [0, 1, 4, 3]
 * 
 */

const findMissingNummber = (arr) => {
    //sort in place
    let i = 0;
    const arrLength = arr.length
    while (i < arr.length) {
        const toSwap = arr[i]
        const swapWithIdx = toSwap
        // swap if not sorted and must element is less then array length
        if (toSwap !== arr[swapWithIdx] && toSwap < arrLength) {
            const swapWith = arr[swapWithIdx]
            arr[swapWithIdx] = toSwap
            arr[i] = swapWith
        } else {
            i++
        }
    }
    // number with appropriate place's index will be the answer
    for (let j = 0; j < arrLength; j++) {
        if (arr[j] !== j) return j

    }
    return arrLength+1
}

console.log(findMissingNummber([4, 0, 3, 1]))
console.log(findMissingNummber([8,3,5,2,4,6,0,1]))
console.log(findMissingNummber([3,5,2,6,0,1]))
console.log(findMissingNummber([3,5,2,4,0,1]))