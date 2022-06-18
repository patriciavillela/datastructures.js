function WeightedDirectionalGraph() {
    this.nodeNumber = 0
    this.nodes = []

    function Node() {
        this.value = 0
        this.connectedNodes = []

        this.weightTo = function(node) {
            weight = this.connectedNodes
                .filter(n => n.node == node)
                .map(n => n.weight)
            if(weight[0]) return weight[0]
            else return Infinity
        }

        this.isConnectedTo = function(node) {
            return this.connectedNodes
                .filter(n => n.node == node)
                .length > 0
        }
    }

    this.add = function(value) {
        this.nodeNumber++
        node = new Node()
        node.value = value
        this.nodes.push(node)
        return node
    }

    this.connectNodes = function(nodeA, nodeB, weight) {
        if(!nodeA.connectedNodes.includes(nodeB)) {
            nodeA.connectedNodes.push({"node":nodeB,"weight":weight})
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

module.exports = WeightedDirectionalGraph