/**
 * size of smallest components in acyclic graph
 */
const edges = [
    ["w", "x"],
    ["x", "y"],
    ["z", "y"],
    ["z", "v"],
    ["w", "v"],
]
function buildGraph(edges) {
    let graph = {}
    for (const node of edges) {
        const [a, b] = node
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph
}
const graph = buildGraph(edges)

function shortestPathBFS(graph, src, dst) {
    const visited = new Set([src])
    const queue = [[src, 0]]

    while (queue.length > 0) {
        const current = queue.shift()
        let [node, distance] = current
        if(node==dst) return distance
        for (const neighbour of graph[node]) {
            if(!visited.has(neighbour)){
                visited.add(neighbour)
                queue.push([neighbour,distance+1])
            }
        }
    }
    return -1
}


console.log(shortestPathBFS(graph, 'w', 'z'))// 2
console.log(shortestPathBFS(graph, 'w', 'p'))// -1
