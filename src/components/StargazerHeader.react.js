
import React from 'react'

export default ({repository}) => {
  const {
    name = "-",
    description = "-"
  } = repository
  return (
    <div>
      <h1>{name}</h1>
      <p>
        { description }
      </p>
    </div>
  )
}
