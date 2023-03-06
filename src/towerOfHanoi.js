
/**
 * problem - 1:
 * Tower of hanoi.
 * If total number of disk is n
 * other disk=6-(startRod+endRoad)
 * 
 * step-1: Move top n-1 disk to otherRod 
 * step-2: Move largest disk to endRod
 * step-3: Move top n-1 disk from otherRod to endRod
 * 
 */
"use strict"
function movePrint(start, end) {
    console.log(`${start} --> ${end}`)
    
}
function towerOfHanoi(n, start, end) {

    if (n == 1) {
        movePrint(start, end)
    }else{
        let otherRod = 6 - (start + end)
        towerOfHanoi(n - 1, start, otherRod)
        movePrint(start, end)
        towerOfHanoi(n - 1, otherRod, end)
    }
}

towerOfHanoi(3, 1, 3)