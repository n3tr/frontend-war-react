// NOTE:
// This file is unused, only use for example

import React from 'react'
import RepoHero from 'components/RepoHero.react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import fetchRepository from 'actions/fetchRepository'

class RepositoryContainer extends React.Component {
  state = {
    repository: {}
  }

  componentDidMount() {
    this.props.fetch()
  }

  render() {
    return <RepoHero repository={this.props.repository} scopeName={this.props.scopeName}/>
  }
}

function mapStateToProps(state, ownProps) {
  const { repository } = state
  const { byName } = repository
  const repositoryInfo = byName[ownProps.scopeName]
  return {
    repository: repositoryInfo || {}
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  const { scopeName } = ownProps
  return {
    fetch: bindActionCreators(fetchRepository.bind(null, scopeName), dispatch)
  }
}

connect(mapStateToProps, mapDispatchToProps)(RepositoryContainer)
