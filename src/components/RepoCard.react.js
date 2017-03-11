import React from 'react'
import { Link } from 'react-router-dom'
export default class RepoCard extends React.Component {
  render() {
    return (
      <div className="col-6">
        <div className="card">
          <h3 className="card-header">Polymer</h3>
          <div className="card-block">
            <p className="card-text">Build modern apps using web components</p>
            <p className="card-text">Stars: x</p>
            <p className="card-text">Open Issues: x</p>
            <p className="card-text">Forks: x</p>
            <p className="card-text">Pull Requests: x</p>
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
