/**
 * give medel and positionaccoring to score
 */
const arr = [5, 4, 3, 2, 1] // [gold,silver,bronz,"4","5"]
const res = []
for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
        res.push("G")
    } else if (i == 1) {
        res.push("S")
    } else if (i == 2) {
        res.push("B")
    } else {
        res.push(String(i + 1))
    }
}
console.log(res)
