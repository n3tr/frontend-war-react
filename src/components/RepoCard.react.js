import React from 'react'
import { Link } from 'react-router-dom'

export default class RepoCard extends React.Component {
  static defaultProps = {
    repository: { },
    className: ""
  }
  render() {
    const {
      name = "-",
      description = "-",
      stargazers_count = 0,
      open_issues_count = 0,
      forks_count = 0,
      pull_requests_count = 0,
      organization = {}
    } = this.props.repository
    return (
      <div className={this.props.className}>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={organization.avatar_url} alt=""/>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong className="title">{ name }</strong>
                </p>
                <p className="subtitle">{ description }</p>
              </div>
            </div>
          </article>

          <hr/>

          <nav className="level is-mobile">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Stars</p>
                <Link to="/" className="title">{ stargazers_count }</Link>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Open Issues</p>
                <p className="title">{ open_issues_count }</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Forks</p>
                <p className="title">{ forks_count }</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Pull Requests</p>
                <p className="title">{ pull_requests_count }</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}
