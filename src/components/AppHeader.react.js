import React from 'react'
import { Link } from 'react-router-dom'
class StickyHeader extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="section">
          <h1>
            <Link to="/" className="title is-1">Frontend War Room</Link>
          </h1>
          <h2 className="subtitle is-3">Here you can find your allies and enemies.</h2>
        </div>
      </div>

    )
  }
}

export default StickyHeader
