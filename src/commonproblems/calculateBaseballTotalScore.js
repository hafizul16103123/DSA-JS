/**
 * countScore:given a list of Operation,calculate total score,each operation donets :
 * "integet number":add to the score board
 * C: delete previous score
 * D: duplicate previous score and push to score board
 * "+": add sum of prvious two score to the score board
 * 
 * example:s["5","2","C","D","+"]
 * answer: 30
 * 
 */

const ops = ["5", "2", "C", "D", "+"]
const countScore = (ops) => {
    const tempArr = [];
    let result = null;
    for (let i = 0; i < ops.length; i++) {
        const degitOnlyPattern = /[0-9]/
        if (degitOnlyPattern.test(ops[i])) {
            tempArr.push(parseInt(ops[i]))
        }
        if ((ops[i]) == "C") {
            tempArr.pop()
        }
        if ((ops[i]) == "D") {
            tempArr.push(tempArr.slice(-1)[0] * 2)
        }
        if ((ops[i]) == "+") {
            const prev1 = tempArr.slice(-1)[0]
            const prev2 = tempArr.slice(-2,-1)[0]
            tempArr.push(prev1+prev2)
        }
        result = tempArr.reduce((total, e) => total + parseInt(e), 0)
    }
    console.log(tempArr)
    return result
}
console.log(countScore(ops))



