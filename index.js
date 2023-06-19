const doSumRecursively = (n) => {
    if (n === 1) return n
    return n + doSumRecursively(n - 1)
}

console.log(doSumRecursively(4))