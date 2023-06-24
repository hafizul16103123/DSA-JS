var findMedianSortedArrays = function (nums1, nums2) {
    const arr = [...nums1, ...nums2]
    const len = arr.length
    const sortedArr = arr.sort((a,b)=>a-b)
    console.log({sortedArr})

    let res = 0;
    const mid = Math.floor(len / 2)
    if (len % 2 != 0) {
        console.log({mid})

        res = sortedArr[mid]
        console.log({1:res})
    } else {
        res = (sortedArr[mid - 1] + sortedArr[mid]) / 2;
    }
    console.log({ res })

    return res
};
// const arr1 = [1, 3], arr2 = [2];
const arr1 = [3], arr2 = [-2,-1];
console.log([findMedianSortedArrays(arr1, arr2)])