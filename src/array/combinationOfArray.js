const { performance } = require('./src/utils/performance')

/**
 * Combination of array element
 *           
 */
// *************************** NormalO(2^n) exponential complexity

const comb = (arr) => {
    if (arr.length == 0) return [[]]
    const firstEl = arr[0]
    const restEl = arr.slice(1)

    const combinationWithOutFirstEl= comb(restEl)
    const combinationWithFirstEl=[]

    combinationWithOutFirstEl.forEach((comb)=>{
        const combination =[...comb,firstEl]
        combinationWithFirstEl.push(combination)
    })
    return [...combinationWithOutFirstEl,...combinationWithFirstEl]

}
const arr = ["a", "b", "c"]
console.log(comb(arr))

