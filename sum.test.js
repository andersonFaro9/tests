const sum = require('./sum')

test('two plus two is four', ()=> {
    expect(sum(2,2)).toBe(4)
})