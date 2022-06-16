function Stack() {

    function Item() {
        this.value = 0
        this.next = null
    }

    this.size = 0
    this.first = null

    this.push = function(value) {
        this.size++
        oldFirst = this.first
        this.first = new Item()
        this.first.value = value
        this.first.next = oldFirst
    }

    this.pop = function(value) {
        if(this.size == 0) return null
        valueReturned = this.first
        this.first = this.first.next
        this.size--
        return valueReturned
    }
}

module.exports = Stack