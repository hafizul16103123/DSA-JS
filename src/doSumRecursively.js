
/**
 * problem - 1:
 * Write a recursive function that takes an input n sums all nonnegative integers up to n.
 * 
 */
function doSumRecursively(n) {
    if (n == 1) return n
    return n + doSumRecursively(n - 1)
}
console.log(doSumRecursively(4)) //10