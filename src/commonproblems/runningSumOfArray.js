var runningSum = function (nums) {
    // windowStart=0
    // window sum =0
    // windowEnd will increase by one
    let windowSum = 0;
    const res = []
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        windowSum += nums[windowEnd]
        res[windowEnd] = windowSum

    }
    return res

};
const nums = [1, 2, 3, 4]; // [1,3,6,10]
console.log(runningSum(nums))
