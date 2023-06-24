/**
 *  Longest Substring Without Repeating Characters
 * @param {*} s 
 * @returns 
 */
const loguestSubString = (s) => {
    let windowStart = 0;
    let longuestLength = 0;
    let arrLen = s.length
    while (arrLen > 0) {
        let str = ""
        for (let windowEnd = windowStart; windowEnd < s.length; windowEnd++) {
            if (!str.includes(s[windowEnd])) {
                str += s[windowEnd]
                longuestLength = Math.max(longuestLength, str.length)
            } else {
                break

            }

        }
        windowStart++
        arrLen--
    }

    return longuestLength
}
// const s = "abcabcbb"
// const s = "bbbbb"
const s = "pwwkew"
console.log(loguestSubString("abcabcbb"))
console.log(loguestSubString("bbbbb"))
console.log(loguestSubString("pwwkew"))