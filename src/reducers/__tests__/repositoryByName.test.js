
import repositoryByName from '../repositoryByName'

describe("RepositoryByName reducer", () => {
  it('have initial state', () => {
    expect(
      repositoryByName(undefined, { type: '@@INIT' })
    ).toEqual({})
  })

  it('have should by name on FETCH_REPOSITORY_SUCCESS', () => {
    const apiResponse = {
      full_name: 'facebook/react',
      name: 'react'
    }

    const expected = {
      "facebook/react": apiResponse
    }

    expect(
      repositoryByName({}, { type: 'FETCH_REPOSITORY_SUCCESS', data: apiResponse })
    ).toEqual(expected)
  })
})
