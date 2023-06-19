const findSmallestPositiveNumber = (arr) => {
    let i = 0;
    const arrLength = arr.length
    while (i < arrLength) {
        const toSwap = arr[i]
        const swapWithIdx = toSwap - 1
        if (toSwap !== arr[swapWithIdx] && toSwap<arrLength && toSwap > 0) {
            const swapWith = arr[swapWithIdx]
            arr[swapWithIdx] = toSwap
            arr[i] =swapWith
        } else {
            i++
        }
    }

    for (let j = 0; j < arrLength; j++) {
        if(arr[j]!==j+1) return j+1
        
    }
    return arrLength+1

}
console.log(findSmallestPositiveNumber([3, 0, -2, 1, 2])) //4
console.log(findSmallestPositiveNumber([-1, -7, -8, -3, 1, 5, 4, 2])) //3
console.log(findSmallestPositiveNumber([3, 2, 5, 1])) // 4
console.log(findSmallestPositiveNumber([3, 2, 1])) // 4


// 3,0,-2,1,2
// 1 2 3 -2 0