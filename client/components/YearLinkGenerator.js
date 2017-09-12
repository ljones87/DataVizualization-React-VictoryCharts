import React from 'react'
import { Link } from 'react-router-dom'


const YearLinkGenerator = (props) => {
  return (
    <div className="link">
      <Link to={`/${props.year}`}>Sample State Emissions {props.year}</Link>
    </div>
  )
}

export default YearLinkGenerator
