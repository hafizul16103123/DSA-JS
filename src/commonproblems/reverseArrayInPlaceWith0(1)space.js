var reverseString = function(s) {

    for (let i = 0; i <= (s.length-1)/2; i++) {
        const toBeSwapped=s[i]
        const swapWithIndex= (s.length-i)-1
        s[i]= s[swapWithIndex]
        s[swapWithIndex]=toBeSwapped
    }
    return s
    
};

console.log(reverseString( ["a","r","m","y"]))
console.log(reverseString( ["h","e","l","l","o"]))
console.log(reverseString( ["H","a","n","n","a","h"]))