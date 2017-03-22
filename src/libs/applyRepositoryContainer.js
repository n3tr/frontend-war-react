import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import fetchRepository from 'actions/fetchRepository'

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

export default function applyRepositoryContainer(RepositoryInjectableComponent) {
  class AppliedRepositoryContainer extends React.Component {

    componentDidMount() {
      if (Object.keys(this.props.repository).length === 0) {
        this.props.fetch()
      }
    }

    render() {
      return <RepositoryInjectableComponent {...this.props} />
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(AppliedRepositoryContainer)
}
