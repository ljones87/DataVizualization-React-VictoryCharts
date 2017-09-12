import React from 'react'
import { Link } from 'react-router-dom'


const StateLinkGenerator = (props) => {
  return (
    <div className="link">
      <Link to={`/${props.state}`}>{props.state} Emissions History</Link>
    </div>
  )
}

export default StateLinkGenerator
