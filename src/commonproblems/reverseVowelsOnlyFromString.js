
const isVowel = (char) => {
    const isVowelReg = /[aeiouAEIOU]/
    return isVowelReg.test(char)
}
const reverseVowels = function (s) {
    const arr= s.split("")
    // get only vowels
    const vowelOnly = []
    for (let i = 0; i < arr.length; i++) {
        if (isVowel(arr[i])) {
            vowelOnly.push(arr[i])
        }
    }
    console.log({ vowelOnly })
    // swapping from back side of vowels
    for (let i = 0; i < arr.length; i++) {
        if (isVowel(arr[i])) {
            arr[i] = vowelOnly.pop()
        }
    }
    return arr.join("")
};
console.time(1)
console.log(reverseVowels("hello"))
console.timeEnd(1)