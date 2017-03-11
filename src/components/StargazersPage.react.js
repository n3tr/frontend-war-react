import React from 'react'
import StargazerList from './StargazerList.react'
export default class StargazersPage extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>jQuery</h1>
        <p>
          jQuery JavaScript Library
        </p>
        <StargazerList />

      </div>
    )
  }
}
