import React from 'react'
import RepoHero from 'components/RepoHero.react'
// import RepositoryContainer from '../containers/RepositoryContainer.react'

import AppHeader from 'components/AppHeader.react'
import RepoCard from 'components/RepoCard.react'

import applyRepositoryContainer from 'libs/applyRepositoryContainer'

const RepoCardContainer = applyRepositoryContainer(RepoCard)

export default () => {
  return (
    <div className="container">
      <section className="section">
        
        <div className="columns is-multiline is-tablet">
          <div className="column is-12-tablet">
            <h1 className="title is-2">Allies</h1>
          </div>

          <RepoCardContainer scopeName="facebook/react" className="column is-12-tablet" />

          <div className="column is-12-tablet">
            <h1 className="title is-2">Enemies</h1>
          </div>

          <RepoCardContainer scopeName="vuejs/vue" className="column is-6-tablet" />
          <RepoCardContainer scopeName="angular/angular"  className="column is-6-tablet"  />
        </div>
      </section>
    </div>
  )
}
