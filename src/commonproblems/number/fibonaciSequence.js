/**
 *   n=  0    1   2   3   4   5   6   7
 * fib=  0    1   1   2   3   5   8   13
 * @param {*} n 
 * @returns 
 */
const fib = (n) => {

    if (n == 0) return 0
    if (n == 1 || n==2) return 1s
    return fib(n - 1) + fib(n - 2)
}

console.log(fib(7))

// const fibSequence = (n) => {
//     let fib = []
//     fib[0] = 0
//     fib[1] = fib[2] = 1
//     for (let i = 3; i <= n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2]

//     }
//     return fib
// }
// console.log(fibSequence(7))