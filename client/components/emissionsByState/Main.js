
import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div >
      <h2 >Co2 emissions by State</h2>
      <div className="link">
        <Link to='/CO'>Colorado Emissions History</Link>
      </div>
      <div className="link">
        <Link to='/WY'>Wyoming Emissions History</Link>
      </div>
      <div className="link">
        <Link to='/MT'>Montana Emissions History</Link>
      </div>
      <div className="link">
        <Link to='/OR'>Oregon Emissions History</Link>
      </div>
      <div className="link">
        <Link to='/CA'>California Emissions History</Link>
      </div>
      <div className="link">
        <Link to='/NY'>New York Emissions History</Link>
      </div>
      <div className="link">
        <Link to='/TX'>Texas Emissions History</Link>
      </div>
    </div>
  )
}


export default Main

