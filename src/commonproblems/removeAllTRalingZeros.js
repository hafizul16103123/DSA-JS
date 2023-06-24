/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
    const arr=num.split("")
    let totalZerozInLast = 0
    const zeroPattern = /[0]/
    const len= arr.length
    for (let i = len-1; i >=0; i--) {
        const isZero = zeroPattern.test(arr[i])
        console.log({isZero})
        if (isZero) {
            totalZerozInLast++

        } else {
            break
        }
        
    }
    arr.splice(len-totalZerozInLast,totalZerozInLast)
    return arr.join("")
};


const num = "51230100";
console.log(removeTrailingZeros(num))