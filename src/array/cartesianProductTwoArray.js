/**
 * cartesian product of two array
 * 
 */
"use strict"
const curtetioProduct = (a, b) => {
    const res = []
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            res.push([a[i], b[j]])
        }
    }
    return res
}

const a = [1, 2]
const b = [3, 4, 5]
console.log(curtetioProduct(a, b))