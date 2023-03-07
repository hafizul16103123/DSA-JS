/**
 * climbing staircase:Given a staircase of n steps,count the no of distinct ways to climb to the top.
 * You can either climp 1 step or 2 step at a time 
 */
const stepsToClimb = (n) => {
    if (n <= 2) return n
    return stepsToClimb(n - 1) + stepsToClimb(n - 2)
}
console.log(stepsToClimb(4))