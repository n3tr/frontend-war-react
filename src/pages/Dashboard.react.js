import React from 'react'
import RepoHero from '../components/RepoHero.react'
// import RepositoryContainer from '../containers/RepositoryContainer.react'

import RepoCard from '../components/RepoCard.react'

import applyRepositoryContainer from '../utils/applyRepositoryContainer'

const RepoHeroContainer = applyRepositoryContainer(RepoHero)
const RepoCardContainer = applyRepositoryContainer(RepoCard)

export default () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h2 className="display-5">Welcome to</h2>
        <h1 className="display-3">Frontend War Room</h1>
        <p className="lead">Here you can find your allies and enemies</p>
        <hr className="my-4"/>
        <RepoHeroContainer scopeName="facebook/react" />
      </div>
      <div className="row">
        <RepoCardContainer scopeName="vuejs/vue" />
        <RepoCardContainer scopeName="angular/angular" />
      </div>
    </div>
  )
}
