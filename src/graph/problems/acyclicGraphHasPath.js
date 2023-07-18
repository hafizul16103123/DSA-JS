const edges = [
    ["i", "j"],
    ["k", "i"],
    ["m", "k"],
    ["k", "l"],
    ["o", "n"]
]
function buildGrouph(edges) {
    let graph = {}
    for (const edge of edges) {
        const [a, b] = edge
        //if key not exists then initialize
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []
        //if key exists then push  both to each other
        //because it is undirected graph
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph
}
const graph = buildGrouph(edges)

// find hasPath true or false
function undirectedPath(graph, src, dst) {
    return hasPath(graph, src, dst, new Set())
}
function hasPath(graph, src, dst,visitedSet) {
    if (src == dst) return true
    if(visitedSet.has(src)) return false
    visitedSet.add(src)
    for (const neighbour of graph[src]) {
        if(hasPath(graph, neighbour, dst,visitedSet)==true) return true
    }
    return false
}
console.log(undirectedPath(graph, "j", "m"))