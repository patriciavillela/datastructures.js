const Stack = require('../src/stack')
test('adicionando um item na pilha, o tamanho deve ser 1', () => {
    const stack = new Stack()
    stack.push(1)
    expect(stack.size).toBe(1)
})

test('adicionando um item na pilha, esse item deve ser o primeiro', () => {
    const stack = new Stack()
    stack.push(1)
    expect(stack.first.value).toBe(1)
})

test('adicionando dois itens na pilha, o segundo a ser adicionado deve ser o primeiro da pilha', () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    expect(stack.first.value).toBe(2)
})

test('removendo um item da pilha deve retornar esse item', () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    expect(stack.pop().value).toBe(2)
})

test('removendo um item da pilha, o item que foi adicionado anteriormente deve ser o primeiro', () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    stack.pop()
    expect(stack.first.value).toBe(1)
})

test('tentar remover um item de uma pilha vazia retorna nulo', () => {
    const stack = new Stack()
    expect(stack.pop()).toBeNull()
})