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

        let curr = this.head
        // find last node,whose next is null,and add value
        // check next of current node is falsy or not
        while (curr.next) {
            curr = curr.next
        }
        curr.next = new Node(val)
    }

    print(){
        let str='';
        let curr = this.head
         // check current node is falsy or not
        while (curr) {
            str+=curr.val+"-->"
            curr = curr.next
        }
        console.log(str)
    }
    contains(val){
        let curr = this.head
        while (curr) {
            if(curr.val==val) return true
            curr = curr.next
        }
        return false
    }
}

const linklist = new LinkList()
linklist.append('a')
linklist.append('b')
linklist.append('c')
linklist.print()
console.log(linklist.contains("a"))
console.log(linklist.contains("z"))
