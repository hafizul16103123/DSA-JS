/**
 * step-1 : sort those intervals
 * step-2 : if bStart>aEnd then push  a and b respecttively to mergedStack
 * otherwise c = [aStart,max(aEnd,bEnd)] and push c to mergedStack
 *
 **/
const mergeInterval=(intervals)=>{
    //sort those intervals
    const sortedIntervals=intervals.sort((a,b)=>a[0]-b[0])

    const mergedIntervals = [sortedIntervals.shift()]
    while(sortedIntervals.length){
        //always want to compare the last interval seen which will be
        //the last element in the mergedINtervals
        // to the next available in the sorted array 
        const a = mergedIntervals.pop()
        const b = sortedIntervals.shift()
        const [aStart,aEnd] = a,
            [bStart,bEnd] = b ;
        // our schenarios
        // a and b don't overlape
        if(bStart>aEnd){
            mergedIntervals.push(a)
            mergedIntervals.push(b)
        }else{
            const c=[]
            c[0]= aStart
            c[1]=Math.max(aEnd,bEnd)
            mergedIntervals.push(c)
        }    
    }
    return mergedIntervals
}

console.log(mergeInterval([[1,4],[7,9],[2,5]]))
console.log(mergeInterval([[6,7],[2,4],[5,9]]))
console.log(mergeInterval([[1,4],[2,6],[3,5]]))
