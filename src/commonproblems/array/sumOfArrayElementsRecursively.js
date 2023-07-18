// const sumOfArraElementsR=(arr)=>{
//     if(arr.length==0) return 0
//     if(arr.length==1) return arr[0]
//     const rest=arr.slice(1)
//     return arr[0]+sumOfArraElementsR(rest)
// }
// console.log(sumOfArraElementsR([1,2,3,4,5]))


const sumOfArraElementsR = (arr) => {
    return _sum(arr, 0)
}
const _sum = (arr, idx) => {
    if (idx == arr.length) return 0
    const sum = arr[idx] + _sum(arr, idx + 1)
    console.log({ sum })
    return sum
}
console.log(sumOfArraElementsR([1, 2, 3, 4,5]))