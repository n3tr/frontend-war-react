import React, { Component } from 'react'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import './App.css'

// Components
import AppHeader from 'components/AppHeader.react'
import Dashboard from 'pages/Dashboard.react'
import StargazersPage from 'pages/StargazersPage.react'

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/frontend-war-react/">
        <div className="App">
            <AppHeader />

            <Route path="/" exact component={Dashboard} />
            <Route
              path="/stargazers/:ownerName/:repoName"
              component={StargazersPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
