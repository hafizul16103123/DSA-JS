/**
 * 169. Majority Element
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 * @param {*} nums 
 * @returns 
 */

var majorityElement = function (nums) {
    const len = nums.length
    const majority = len / 2
    let trace = {}

    for (let i = 0; i < len; i++) {

        trace[nums[i]] = trace[nums[i]] || 0
        trace[nums[i]]++

        if (trace[nums[i]] > majority) {
            return nums[i]

        }
    }

};

const arr = [3, 2, 3]
console.log(majorityElement(arr))