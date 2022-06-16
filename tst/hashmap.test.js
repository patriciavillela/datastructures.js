const HashMap = require('../src/hashmap')

test('adicionar um registro no mapa, seu tamanho é 1', () => {
    const hashMap = new HashMap()
    hashMap.put('patricia',29)
    expect(hashMap.size).toBe(1)
})

test('calcular o hash de \'a\' deve retornar seu código ASCII, que é 97', () => {
    const hashMap = new HashMap()
    expect(hashMap.calculateHash('a')).toBe(97)
})

test('calcular o hash de \'abc\' deve retornar seu código ASCII, que é 294', () => {
    const hashMap = new HashMap()
    expect(hashMap.calculateHash('abc')).toBe(294)
})

test('ao inserir um registro com a chave \'a\' o registro deve ser inserido no index 97 do array de registros', () => {
    const hashMap = new HashMap()
    hashMap.put('a', 12)
    expect(hashMap.storage[97].key).toBe('a')
})

test('ao inserir um registro com chave \'totally\' eu devo conseguir recuperá-lo usando a mesma chave', () => {
    const hashMap = new HashMap()
    hashMap.put('totally', 30)
    expect(hashMap.get('totally')).toBe(30)
})

test('ao inserir dois registros que colidem, eu devo conseguir recuperar ambos', () => {
    const hashMap = new HashMap()
    hashMap.put('totally', 30)
    hashMap.put('tallyto', 40)
    expect(hashMap.get('totally')).toBe(30)
    expect(hashMap.get('tallyto')).toBe(40)
})

test('ao inserir diversos registros que colidem, eu devo conseguir recuperar todos', () => {
    const hashMap = new HashMap()
    hashMap.put('abc', 1)
    hashMap.put('acb', 2)
    hashMap.put('bac', 3)
    hashMap.put('bca', 4)
    hashMap.put('cab', 5)
    hashMap.put('cba', 6)
    expect(hashMap.get('abc')).toBe(1)
    expect(hashMap.get('acb')).toBe(2)
    expect(hashMap.get('bac')).toBe(3)
    expect(hashMap.get('bca')).toBe(4)
    expect(hashMap.get('cab')).toBe(5)
    expect(hashMap.get('cba')).toBe(6)
    
})