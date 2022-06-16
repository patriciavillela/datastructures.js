function Queue() {

    function Item() {
        this.value = 0
        this.next = null
    }

    this.size = 0
    this.first = null
    this.last = null

    this.enqueue = function(value) {
        this.size++
        oldLast = this.last
        this.last = new Item()
        this.last.value = value
        if(oldLast != null)
            oldLast.next = this.last
        if(this.first == null)
            this.first = this.last
    }

    this.dequeue = function(value) {
        if(this.size == 0) return null
        this.size--
        valueReturned = this.first
        this.first = this.first.next
        return valueReturned
    }
}

module.exports = Queue