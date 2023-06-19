
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class LinkList {
    constructor() {
        this.head = null
    }
    append(val) {
        if (this.head === null) {
            this.head = new Node(val)
            return
        }
        this._append(val, this.head)
    }

    print() {
        let curr = this.head
        const res= this._print(curr)
        console.log(res)
    }
    contains(val) {
        let curr = this.head
        return this._contains(curr,val)
      
    }
    _append(val, curr) {
        if (curr.next === null) {
            curr.next = new Node(val)
            return
        }
        this._append(val, curr.next)
    }
    _print(curr){
        if(curr===null) return ""
        return curr.val +"-->"+ this._print(curr.next)
    }
    _contains(curr,val){
        if(curr.val == val) return true
        if(curr.next ==null) return false
        return this._contains(curr.next,val)
    }
}

const linklist = new LinkList()
linklist.append('a')
linklist.append('b')
linklist.append('c')
linklist.append('d')
linklist.print()
console.log(linklist.contains("a"))
console.log(linklist.contains("d"))
console.log(linklist.contains("z"))
console.log(linklist.contains("t"))


