import React from 'react'

export default class StargazerListItem extends React.Component {
  render() {
    return (
      <div className="col-2 stargazer">
        <img
          className="img-fluid stargazer-image" 
          alt=""
          src={this.props.stargazer.avatar_url} />
      </div>
    )
  }
}
