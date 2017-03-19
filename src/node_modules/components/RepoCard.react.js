import React from 'react'
import { Link } from 'react-router-dom'
export default class RepoCard extends React.Component {
  render() {
    const {
      name = "-",
      description = "-",
      stargazers_count = 0,
      open_issues_count = 0,
      forks_count = 0,
      pull_requests_count = 0
    } = this.props.repository
    return (
      <div className="col-6">
        <div className="card">
          <h3 className="card-header">{name}</h3>
          <div className="card-block">
            <p className="card-text">{description}</p>
            <p className="card-text">Stars: {stargazers_count}</p>
            <p className="card-text">Open Issues: {open_issues_count}</p>
            <p className="card-text">Forks: {forks_count}</p>
            <p className="card-text">Pull Requests: {pull_requests_count}</p>
          </div>
          <div className="card-footer text-muted">
            <Link
              to={`/stargazers/${this.props.scopeName}`}
              className="btn btn-primary">
              View enemies
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
