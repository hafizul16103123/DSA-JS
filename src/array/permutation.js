const { performance } = require('./src/utils/performance')

/**
 * Permutation of array element
 *    [
  [ 'a', 'b', 'c' ],
  [ 'b', 'a', 'c' ],
  [ 'b', 'c', 'a' ],
  [ 'a', 'c', 'b' ],
  [ 'c', 'a', 'b' ],
  [ 'c', 'b', 'a' ]
]       
 */
// *************************** NormalO(2^n) exponential complexity

const permutation = (arr) => {
    if (arr.length == 0) return [[]]
    const firstEl = arr[0]
    const restEl = arr.slice(1)

    const permutationWithOutFirstEl= permutation(restEl)
    const allPermutations=[]

    permutationWithOutFirstEl.forEach((perm)=>{
        for (let i = 0; i <= perm.length; i++) {           
            const permutation =[...perm.slice(0,i),firstEl,...perm.slice(i)]
            allPermutations.push(permutation)
        }
    })
    return allPermutations

}
const arr = ["a", "b", "c"]
console.log(permutation(arr))

