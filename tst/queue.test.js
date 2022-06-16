const Queue = require('../src/queue')

test('adicionando um item na fila, o tamanho dela deve ser 1', () => {
    const queue = new Queue()
    queue.enqueue(1)
    expect(queue.size).toBe(1)
})

test('adicionando um item na fila, ele deve ser o último', () => {
    const queue = new Queue()
    queue.enqueue(1)
    expect(queue.last.value).toBe(1)
})

test('adicionando dois itens na fila, o último a ser adicionado deve também ser o último da fila', () => {
    const queue = new Queue()
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.last.value).toBe(2)
})

test('removendo um item da fila, o segundo deve virar o primeiro e assim sucessivamente', () => {
    const queue = new Queue()
    queue.enqueue(1)
    queue.enqueue(2)
    queue.dequeue()
    expect(queue.first.value).toBe(2)
})

test('remover um item da fila retorna seu valor', () => {
    const queue = new Queue()
    queue.enqueue(1)
    expect(queue.dequeue().value).toBe(1)
})

test('tentar remover um item de uma fila vazia retorna nulo', () => {
    const queue = new Queue()
    expect(queue.dequeue()).toBeNull()
})