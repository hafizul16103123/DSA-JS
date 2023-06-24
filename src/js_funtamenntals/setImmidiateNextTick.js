console.log("program start")

const add = (a, b) => {
    return a + b
}

setImmediate(() => {
    console.log("setImmediate", add(2, 2))
})
setTimeout(() => {
    console.log("setTimeout", add(3, 3))
},0)
process.nextTick(() => {
    console.log("nextTick", add(4, 4))
})
console.log("program end")
