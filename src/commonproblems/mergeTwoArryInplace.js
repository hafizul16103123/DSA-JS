
var merge = function (nums1, m, nums2, n) {
    for (let e of nums2) {
        const findZero = nums1.indexOf(0)
        nums1[findZero] = e
    }
    nums1.sort((a,b)=>a-b)
};
const nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
console.log(merge(nums1, m, nums2, n))