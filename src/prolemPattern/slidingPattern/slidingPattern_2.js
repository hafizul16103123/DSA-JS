/**
 * Given an array of positive numbers and a positive number s,
 * find the length of the smallest contiguous subarray
 * whose sum is greater than or equal to s,Return )
 * if no such sub query exists;
 * input:[1,3,2,2,4,5],k=6
 * output: 2;  [2,4]
 *
 */

// Sliding window
const findSmallestContiguageSubArrayWithGivenSumSlidingApproach = (arr, number) => {
    let windowStart = 0;
    let windowSum = 0;
    let minLenSoFar = Infinity;
  
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
     windowSum += arr[windowEnd]   
     // if windowSum is greater then or equal then take min length and
     // substract windoeStart value and increase windowStart index
      while (windowSum >= number)
      {
        let len  = windowEnd-windowStart+1
        minLenSoFar= Math.min(len,minLenSoFar)
       
        windowSum -= arr[windowStart]
        windowStart++;
      } 
      
    }
  
    return minLenSoFar
  };
  const arr = [1,3,2,2,4,5];
  const arr2 = [2,1,5,2,8];
  console.log(findSmallestContiguageSubArrayWithGivenSumSlidingApproach(arr, 6));
  console.log(findSmallestContiguageSubArrayWithGivenSumSlidingApproach(arr2,7))
  