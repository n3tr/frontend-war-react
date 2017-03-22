import React from 'react'
import { Link } from 'react-router-dom'
class StickyHeader extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title is-1">Frontend War Room</h1>
        <h2 className="subtitle is-3">Here you can find your allies and enemies.</h2>
      </div>
    )
  }
}

export default StickyHeader
