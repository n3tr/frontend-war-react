import React from 'react'
import StargazerHeader  from '../components/StargazerHeader.react'
import StargazerList from '../components/StargazerList.react'

import { fetchStargazers } from '../api'
import applyRepositoryContainer from '../utils/applyRepositoryContainer'

const AppliedStargazerHeader = applyRepositoryContainer(StargazerHeader)

export default class StargazersPage extends React.Component {

  state = {
    stargazers: [],
    fetching: true,
    currentPage: 1,
  }

  componentDidMount() {
    window.onscroll = this._onScrollTpBottom.bind(this)

    this.fetchStargazersList()
  }

  _onScrollTpBottom() {
    if (this.state.fetching) {
      return
    }
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
      this.fetchStargazersList()
    }
  }

  fetchStargazersList() {
    // Set Loading state
    this.setState({
      fetching: true
    })

    fetchStargazers(this.getScopeName(), this.state.currentPage)
    .then((stargazers) => {
      this.setState({
        stargazers: this.state.stargazers.concat(stargazers),
        fetching: false,
        currentPage: this.state.currentPage + 1
      })
    })
  }

  getScopeName() {
    const { ownerName, repoName } = this.props.match.params
    const scope = `${ownerName}/${repoName}`
    return scope
  }

  render() {
    return (
      <div className="container">
        <AppliedStargazerHeader scopeName={this.getScopeName()} />
        <StargazerList stargazers={this.state.stargazers} />
        { this.state.fetching ? <p>Loading...</p> : null}
      </div>
    )
  }
}
