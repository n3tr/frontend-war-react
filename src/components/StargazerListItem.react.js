import React from 'react'
import avatarPlaceHolder from '../assets/profile.jpg'
export default class StargazerListItem extends React.Component {
  render() {
    return (
      <div className="col-2">
        <img className="img-fluid" src={avatarPlaceHolder} />
      </div>
    )
  }
}
