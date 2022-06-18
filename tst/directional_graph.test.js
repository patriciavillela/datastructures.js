const DirectionalGraph = require('../src/directional_graph')

test('adicionar um nó no grafo faz o número de nós virar 1', () => {
    const directionalGraph = new DirectionalGraph()
    directionalGraph.add('A')
    expect(directionalGraph.nodeNumber).toBe(1)
})

test('uma conexão entre nós deve ter uma direção', () => {
    const directionalGraph = new DirectionalGraph()
    const nodeA = directionalGraph.add('A')
    const nodeB = directionalGraph.add('B')
    directionalGraph.connectNodes(nodeA, nodeB)
    expect(nodeA.connectedNodes.includes(nodeB)).toBe(true)
    expect(nodeB.connectedNodes.includes(nodeA)).toBe(false)
})