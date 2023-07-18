/**
 * print  acyclic graph
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

function shortestPathBFS(graph, src) {
    const visited = new Set([src])
    const queue = [src]

    while (queue.length > 0) {
        const current = queue.shift()
        console.log(current)
        for (const neighbour of graph[current]) {
            if (!visited.has(neighbour)) {
                visited.add(neighbour)
                queue.push(neighbour)
            }
        }
    }

}


shortestPathBFS(graph, 'w')// 2

