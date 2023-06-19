/**
 * Given an array of sorted number and a terget sum.
 *  find a pair in the arra whose sum is equal to the given target.
 *Example:[1,2,3,4,5] result:[5,2]
 */

function findPairOfGivenSum(arr, target) {
  const len = arr.length;
  let lastPointer = len - 1;

  for (let i = 0; i < len; ) {
    const firstPointer = arr[i];
    const secondPointer = arr[lastPointer];

    const sum = firstPointer + secondPointer;
    // if sum is equal to target
    if (i !== lastPointer && sum == target) {
      return [firstPointer, secondPointer];
    }
    if (sum < target) {
      i++;
    } else {
      lastPointer--;
    }
  }
  return null;
}
console.log(findPairOfGivenSum([1, 2, 3, 4, 5], 7)); //[5,2]
console.log(findPairOfGivenSum([1, 6, 8, 9, 10], 14)); //[6,8]
console.log(findPairOfGivenSum([1, 3, 4, 6, 8, 10], 12)); //[4,8]
console.log(findPairOfGivenSum([1, 2, 3, 4, 5], 10)); //null
