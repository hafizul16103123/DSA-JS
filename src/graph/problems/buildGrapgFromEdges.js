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
console.log(buildGrouph(edges))