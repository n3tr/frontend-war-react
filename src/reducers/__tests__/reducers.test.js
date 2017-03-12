
import reducers from '../index'

describe('Main reducers', () => {
  it('should a function', () => {
    expect(typeof reducers).toBe('function')
  })

  it('contains initial state key', () => {
    expect(
      reducers(undefined, { type: '@@INIT'})
    ).toHaveProperty('repository')
  })
})
