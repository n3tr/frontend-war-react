import React from 'react'
import StargazerListItem from './StargazerListItem.react'

export default class StargazerList extends React.Component {
  render() {

    const stargazersItems = this.props.stargazers.map((stargazer) => {
        return <StargazerListItem stargazer={stargazer} key={stargazer.id}/>
    })

    return (
      <div className="row stargazers">
        { stargazersItems }
      </div>
    )
  }
}
