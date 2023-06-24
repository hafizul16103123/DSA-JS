const validStringBracket = () => {
    // const s = "[{()}]"
    // const s = "]"
    // const s = "()"
    const s = "(])"
    const obj = { "(": -1, "{": -2, "[": -3, ")": 1, "}": 2, "]": 3 }
    const stack = []
    for (const c of s) {
        // id first one is closing bracket then return false
        if(obj[s[0]]>0) return false
        // if opening bracket then insert in stack
        if (obj[c] < 0) {
            stack.push(obj[c])
        } else {
            // if get closing tag then match bracket(sum==0(-1+1=0))
            const sum = parseInt(stack.slice(-1)) + parseInt(obj[c])
            // id match then pop matching bracket else push to stack
            if (sum == 0){
                stack.pop()
            }else{
                stack.push(obj[c])
            }
        }
    }

    if (stack.length == 0) return true
    return false
}

console.log(validStringBracket())