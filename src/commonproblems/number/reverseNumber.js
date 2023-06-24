/* Reverse a number 243
*   0*10+3=3
 *  3*10+4=34
  * 34*10+2=342
*/

const reverseNumber = (n) => {
   const base = 10;
   let acc = 0
   while (n > 0) {
       const currentdigit = n % 10
       acc = acc * base + currentdigit
       const resNumber = Math.floor(n / 10)
       n = resNumber
   }
   return acc
}
console.log(reverseNumber(243)) // 342