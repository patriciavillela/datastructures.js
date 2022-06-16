const Graph = require('../src/graph')

test('ao incluir um nó no grafo, o número de nós deve ser 1', () => {
    const graph = new Graph()
    graph.add(1)
    expect(graph.nodeNumber).toBe(1)
})

test('ao incluir dois nós no grafo e conectá-los, ambos devem estar na lista de nós conectados um do outro', () => {
    const graph = new Graph()
    const nodeA = graph.add(1)
    const nodeB = graph.add(2)
    graph.connectNodes(nodeA, nodeB)
    expect(nodeA.connectedNodes.includes(nodeB)).toBe(true)
    expect(nodeB.connectedNodes.includes(nodeA)).toBe(true)
})

test('ao remover um nó do grafo, todas as suas referências devem ser atualizadas para não mais apontar para ele', () => {
    const graph = new Graph()
    const nodeA = graph.add(1)
    const nodeB = graph.add(2)
    const nodeC = graph.add(3)
    graph.connectNodes(nodeA, nodeB)
    graph.connectNodes(nodeA, nodeC)
    graph.connectNodes(nodeB, nodeC)
    graph.removeNode(nodeC)
    expect(nodeA.connectedNodes.includes(nodeC)).toBe(false)
    expect(nodeB.connectedNodes.includes(nodeC)).toBe(false)
})

test('deve-se poder listar todos os nós conectados a um determinado nó', () => {
    const graph = new Graph()
    const nodeA = graph.add(1)
    const nodeB = graph.add(2)
    graph.connectNodes(nodeA, nodeB)
    expect(nodeA.connectedNodes).toStrictEqual([nodeB])
    expect(nodeB.connectedNodes).toStrictEqual([nodeA])
})