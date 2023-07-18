const graph = {
    a: ["b", "c"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: [],
}
// //DebthfirstGraph iteratively
// // a: ["c", "b"],
// function graphDepthFirstPrint(graph, source) {
//     const stack = [source]
//     while (stack.length > 0) {
//         const current = stack.pop()
//         console.log(current)
//         for (let neighber of graph[current]) {
//             stack.push(neighber)
//         }
//     }
// }
// graphDepthFirstPrint(graph, "a") // abdfce


// DebthfirstGraph recursively
// a: ["b", "c"],
function graphDepthFirstPrintRecursively(graph, source) {
    console.log(source)
    const current = graph[source]
    for (let neighbour of current) {
        graphDepthFirstPrintRecursively(graph, neighbour)
    }
}

graphDepthFirstPrintRecursively(graph, "a") // abdfce