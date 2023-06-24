const minimizedStringLength = (s) => {
    const a = new Set(s.split(""))
    return a.size
}
// const s = "aaaaaaabbbcc"
// const s = "ipi"
const s = "dddaaa"
console.log(minimizedStringLength(s))