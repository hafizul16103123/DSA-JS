var removeDuplicates = function (nums) {
    const length = nums.length;
    for (let i = 0; i < length; i++) {

        const slice = nums.slice(i + 1).indexOf(nums[i]);
        console.log({slice})
        if (slice > -1) {
            nums.splice(i, 1);
            i--;
        }

    }
    console.log(nums)
    return nums;
};
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums))