/**
 * size of smallest components in acyclic graph
 */
const graph = {
    3: [],
    4: [6],
    6: [4, 5, 7, 8],
    8: [6],
    7: [6],
    5: [6],
    1: [2],
    2: [1],
}

function asyclicGraph(graph) {
    let largestSize = Infinity
    const visitedNode = new Set()
    for (const node in graph) {
        // when reach to a node's end then increase count
        const size = exploreGraphSize(graph, node, visitedNode)
        largestSize = Math.min(largestSize, size)
    }
    return largestSize
}
function exploreGraphSize(graph, node, visitedNode) {

    if (visitedNode.has(String(node))) return Infinity
    visitedNode.add(String(node))
    //after each node to end of explore return true
    let size = 1
    for (const neighbour of graph[node]) {
        size += exploreGraphSize(graph, neighbour, visitedNode)
    }
    return size
}
console.log(asyclicGraph(graph))

