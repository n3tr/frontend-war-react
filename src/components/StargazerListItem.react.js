import React from 'react'
import avatarPlaceHolder from '../assets/profile.jpg'
export default class StargazerListItem extends React.Component {
  render() {
    return (
      <div className="col-2 stargazer">
        <img
          className="img-fluid stargazer-image" src={this.props.stargazer.avatar_url} />
      </div>
    )
  }
}
