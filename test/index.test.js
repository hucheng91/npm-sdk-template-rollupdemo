import { test1 } from '../lib/index.cjs'

test('test1 return true', () => {
    let result = test1();
    expect(result).toEqual(true)
})

