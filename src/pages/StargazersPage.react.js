import React from 'react'
import StargazerList from '../components/StargazerList.react'

import { fetchStargazers } from '../api'


export default class StargazersPage extends React.Component {

  state = {
    stargazers: []
  }

  componentDidMount() {
    const { ownerName, repoName } = this.props.match.params
    const scope = `${ownerName}/${repoName}`
    fetchStargazers(scope)
    .then((stargazers) => {
      this.setState({ stargazers })
    })
  }

  render() {
    return (
      <div className="container">
        <h1>jQuery</h1>
        <p>
          jQuery JavaScript Library
        </p>
        <StargazerList stargazers={this.state.stargazers} />
      </div>
    )
  }
}
