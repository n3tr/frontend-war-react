import React from 'react'
import RepoHero from '../components/RepoHero.react'
import RepoCard from '../components/RepoCard.react'
export default () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h2 className="display-5">Welcome to</h2>
        <h1 className="display-3">Frontend War Room</h1>
        <p className="lead">Here you can find your allies and enemies</p>
        <hr className="my-4"/>
        <RepoHero scopeName="facebookincubator/create-react-app" />
      </div>
      <div className="row">
        <RepoCard scopeName="vuejs/vue-cli" />
        <RepoCard scopeName="angular/angular" />
      </div>
    </div>
  )
}
