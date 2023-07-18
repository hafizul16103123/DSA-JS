/**
 * hasPath
 */
const graph = {
    a: ["b", "c"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: [],
}
//BreadthFirstGraph has Path  iteratively
function hasGraphPathBFS(graph, src, dst) {
    const queue = [src]
    while (queue.length > 0) {
        const current = queue.shift()
        if (current == dst) return true
        for (const neighbour of graph[current]) {
            queue.push(neighbour)
        }
    }
    return false

}
console.log(hasGraphPathBFS(graph, "a", "d")) // true
console.log(hasGraphPathBFS(graph, "a", "t")) // false


// //DFS Graph has Path  iteratively
// function hasGraphPathDFS(graph, src, dst) {
//     const stack = [src]
//     while (stack.length > 0) {
//         const current = stack.pop()
//         if (current == dst) return true
//         for (const neighbour of graph[current]) {
//             stack.push(neighbour)
//         }
//     }
//     return false

// }
// console.log(hasGraphPathDFS(graph, "a", "d")) // true
// console.log(hasGraphPathDFS(graph, "a", "t")) // false


// //DFS Graph has Path  recursively
// function hasGraphPathRecursivelyDFS(graph, src, dst) {
//     if (src == dst) return true

//     for (const neighbour of graph[src]) {
//         if (hasGraphPathRecursivelyDFS(graph, neighbour, dst) === true) {
//             return true
//         }
//     }
//     return false

// }

// console.log(hasGraphPathRecursivelyDFS(graph, "a", "d")) // true
// console.log(hasGraphPathRecursivelyDFS(graph, "a", "t")) // false
