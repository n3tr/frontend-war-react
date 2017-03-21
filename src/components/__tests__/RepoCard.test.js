import React from 'react'

import RepoCard from '../RepoCard.react'
import ReactTestRenderer from 'react-test-renderer'

import { MemoryRouter } from 'react-router-dom'

describe('RepoCard', () => {
    it('should render empty repo object', () => {
        const tree = ReactTestRenderer.create(
            <MemoryRouter>
                <RepoCard repository={ {} } />
            </MemoryRouter>
        )
        expect(tree).toMatchSnapshot()
    })

    it('should render correctly', () => {
        const repo = {
            name: "React",
            description: "Lib for create view",
            stargazers_count: 60000,
            open_issues_count: 400,
            forks_count: 1200,
            pull_requests_count: 200
        }
        const tree = ReactTestRenderer.create(
            <MemoryRouter>
                <RepoCard repository={ repo } />
            </MemoryRouter>
        )
        expect(tree).toMatchSnapshot()
    })
})