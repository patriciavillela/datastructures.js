const soma = require('../src/soma')
test('quando somar 1 e 2 a resposta é 3', () => {
    expect(soma(1,2)).toBe(3)
})
test('quando somar 1 e 4 a resposta é 5', () => {
    expect(soma(1,4)).toBe(5)
})