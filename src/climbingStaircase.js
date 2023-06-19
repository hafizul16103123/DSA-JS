// /**
//  * climbing staircase:Given a staircase of n steps,count the no of distinct ways to climb to the top.
//  * You can either climp 1 step or 2 step at a time 
//  */
// const stepsToClimb = (n) => {
//     if (n <= 2) return n
//     return stepsToClimb(n - 1) + stepsToClimb(n - 2)
// }
// console.log(stepsToClimb(4))


/**
 * climbing staircase:Given a staircase of n steps,count the no of distinct ways to climb to the top.
 * You can either climp 1 step or 2 or 3 step at a time 
 */
const stepsToClimb = (n) => {
    if (n <= 2) return n
    if (n == 3) return 4
    return stepsToClimb(n - 1) + stepsToClimb(n - 2) + stepsToClimb(n - 3)
}
console.log(stepsToClimb(10)) // 274