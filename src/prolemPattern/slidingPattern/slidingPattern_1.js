/**
 * Given an array ,find all the avarage of contiguous subArray of size k;
 * input:[1,2,3,4,5],k=3
 * output: [2,3,4]
 * 
 */

// // Naive approach
// const findAvgOfContiguageSubArray=(arr,size)=>{
//     const len=arr.length-size;
//     const diff=size;
//     const result=[]
//     for (let i = 0; i <= len; i++) {
//         const subArr=arr.slice(i,diff+i)
//         const subArraySum= subArr.reduce((total,acc)=>total+acc)
//         result.push(subArraySum/size)
//     }
//     return result;
// }
// const arr=[1,2,3,4,5]
// const arr2=[1,3,2,6,-1,4,1,8,2]
// console.log(findAvgOfContiguageSubArray(arr,3))
// console.log(findAvgOfContiguageSubArray(arr2,5))


// Sliding window
const findAvgOfContiguageSubArraySlidingApproach=(arr,size)=>{

    let windowStart=0,windowSum=0;
    const avarage=[]

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {

        windowSum+=arr[windowEnd]
        // if windowEnd meet the first window and higher than size;
        // then substract windowStart value and increment window start index
        if(windowEnd>=size-1){
            // find avarage
            avarage.push(windowSum/size)
            // substract windowStart
            windowSum-=arr[windowStart]
            // increment windowStart by one
            windowStart++
        }
        
    }
return avarage
}
const arr3=[1,2,3,4,5]
const arr4=[1,3,2,6,-1,4,1,8,2]
console.log(findAvgOfContiguageSubArraySlidingApproach(arr3,3))
console.log(findAvgOfContiguageSubArraySlidingApproach(arr4,5))

