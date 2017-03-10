import React from 'react'

class StickyHeader extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md bg-faded navbar-inverse bg-inverse">
        <div className="container">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">React War Room</a>
        </div>
      </nav>
    )
  }
}

export default StickyHeader
