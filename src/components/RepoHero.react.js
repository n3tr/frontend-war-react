import React from 'react'
import { Link } from 'react-router-dom'

class RepoHero extends React.Component {

  render() {
    const {
      name = "-",
      description = "-",
      stargazers_count = 0,
      open_issues_count = 0,
      forks_count = 0,
      pull_requests_count = 0
    } = this.props.repository
    console.log(this.props);
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
          <Link
            to={`/stargazers/${this.props.scopeName}`}
            className="btn btn-primary btn-lg"
            role="button">
            View allies
          </Link>
        </p>
      </div>
    )
  }
}

export default RepoHero
