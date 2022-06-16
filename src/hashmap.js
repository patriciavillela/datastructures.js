function HashMap() {
    this.size = 0
    this.storage = []

    function Item() {
        this.key = null
        this.value = null
        this.next = null
    }

    this.put = function(key, value) {
        this.size++
        recordIndex = this.calculateHash(key)
        const item = new Item()
        item.key = key
        item.value = value
        if(!this.storage[recordIndex])
            this.storage[recordIndex] = item
        else
            item.next = this.storage[recordIndex]
            this.storage[recordIndex] = item
    }

    this.get = function(key) {
        firstItemInIndex = this.storage[this.calculateHash(key)]
        while(firstItemInIndex.key != key)
            firstItemInIndex = firstItemInIndex.next
        return firstItemInIndex.value
    }

    this.calculateHash = function(key) {
        return key
            .split('') // string to array
            .map(c => c.charCodeAt(0)) // char to ASCII
            .reduce((a,b) => a = a + b) //sum
    }
}


module.exports = HashMap