import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css'

// Components
import AppHeader from './components/AppHeader.react'
import Dashboard from './pages/Dashboard.react'
import StargazersPage from './pages/StargazersPage.react'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <AppHeader />
            
            <Route exact path="/" component={Dashboard} />
            <Route
              path="/stargazers/:ownerName/:repoName"
              component={StargazersPage} />
        </div>
      </Router>
    );
  }
}

export default App;
