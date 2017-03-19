import React from 'react'
import { Link } from 'react-router-dom'
class StickyHeader extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md bg-faded navbar-inverse bg-inverse">
        <div className="container">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">React War Room</Link>
        </div>
      </nav>
    )
  }
}

export default StickyHeader
