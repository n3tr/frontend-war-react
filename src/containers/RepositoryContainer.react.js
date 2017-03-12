import React from 'react'
import RepoHero from '../components/RepoHero.react'

import { fetchRepository } from '../api'

export default class RepositoryContainer extends React.Component {
  state = {
    repository: {}
  }

  componentDidMount() {
    fetchRepository(this.props.scopeName).then((repository) => {
      this.setState({ repository })
    })
  }

  render() {
    return <RepoHero repository={this.state.repository} />
  }
}
