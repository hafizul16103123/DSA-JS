const { performance } = require('./src/utils/performance')

/**
 * Fibonachi sequence 1,1,2,3,5,8
 *           
 */
// *************************** NormalO(2^n) exponential complexity

const number = 45;
const fib = (n) => {
    if (n <= 2) {
        return 1
    }
    return fib(n - 1) + fib(n - 2)
}
const ss = Date.now()
console.log(fib(number))
const es = Date.now()
performance("slow", ss, es)




// ************************** Better version with memorization
// O(2^n) exponential complexity
const fibMemo = (n, memo) => {
    if (n in memo) return memo[n]
    if (n <= 2) {
        return 1
    }
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo)
    return memo[n]
}
const s = Date.now()
console.log(fibMemo(number, {}))
const e = Date.now()

performance("faster", s, e)