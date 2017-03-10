import React from 'react'
import { fetchRepository } from '../api'

class RepoHero extends React.Component {
  state = { repo: {} }

  componentDidMount() {
    fetchRepository('facebook/react').then((repo) => {
      this.setState({ repo })
    })
  }

  render() {
    const {
      name,
      description,
      stargazers_count,
      open_issues_count,
      forks_count,
      pull_requests_count
    } = this.state.repo
    return (
      <div>
        <h2>The Greatness Project is <b>{name}</b></h2>
        <p className="lead">
          "{description}"
        </p>
        <p className="card-text">Stars: {stargazers_count}</p>
        <p className="card-text">Open Issues: {open_issues_count}</p>
        <p className="card-text">Forks: {forks_count}</p>
        <p className="card-text">Pull Requests: {pull_requests_count}</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="stargazers.html" role="button">View allies</a>
        </p>
      </div>
    )
  }
}

export default RepoHero
