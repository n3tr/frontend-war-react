
import repository from '../repository'

describe('Repository', () => {
  it('should initial state', () => {
    const type = "@@INIT"
    expect(
      repository(undefined, { type })
    ).toEqual({
      byName: {}
    })
  })
})
