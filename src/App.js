import React, { Component } from 'react'
import {
  HashRouter,
  Route
} from 'react-router-dom'
import './App.css'

// Components
import AppHeader from 'components/AppHeader.react'
import Dashboard from 'pages/Dashboard.react'
import StargazersPage from 'pages/Stargazers.react'

class App extends Component {
  render() {
    return (
      <HashRouter basename="/frontend-war-react/">
        <div className="App">
          <AppHeader />
          <Route path="/" exact component={Dashboard} />
          <Route
            path="/:ownerName/:repoName"
            component={StargazersPage} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
