import React, { Component } from 'react'
import './App.css'

// Components
import AppHeader from './components/AppHeader.react'
import Dashboard from './components/Dashboard.react'
import StargazersPage from './components/StargazersPage.react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        {/* <Dashboard /> */}
        <StargazersPage />
      </div>
    );
  }
}

export default App;
