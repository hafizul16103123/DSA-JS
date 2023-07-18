/**
 * component count in acyclic graph
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
    let count = 0
    const visitedNode = new Set()
    for (const node in graph) {
        // when reach to a node's end then increase count
        if (exploreGraph(graph, node, visitedNode) === true) {
            count += 1
        }
    }
    return count
}
function exploreGraph(graph, node, visitedNode) {
    if (visitedNode.has(String(node))) return false
    visitedNode.add(String(node))
    //after each node to end of explore return true
    for (const neighbour of graph[node]) {
        exploreGraph(graph, neighbour, visitedNode)
    }
    return true
}
console.log(asyclicGraph(graph))

