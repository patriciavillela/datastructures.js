function DirectionalGraph() {
    this.nodeNumber = 0
    this.nodes = []

    function Node() {
        this.value = 0
        this.connectedNodes = []
    }

    this.add = function(value) {
        this.nodeNumber++
        node = new Node()
        node.value = value
        this.nodes.push(node)
        return node
    }

    this.connectNodes = function(nodeA, nodeB) {
        if(!nodeA.connectedNodes.includes(nodeB)) {
            nodeA.connectedNodes.push(nodeB)
        }
    }

    this.removeNode = function(nodeC) {
        this.nodes = this.nodes.filter(node => node != nodeC)
        this.nodes
            .forEach(
                node =>
                    node.connectedNodes = node.connectedNodes
                        .filter(n => n != nodeC))
    }
}

module.exports = DirectionalGraph