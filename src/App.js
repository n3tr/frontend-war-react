import React, { Component } from 'react'
import './App.css'

// Components
import AppHeader from './components/AppHeader.react'
import Dashboard from './components/Dashboard.react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Dashboard />
      </div>
    );
  }
}

export default App;
