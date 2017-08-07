
import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div >
      <h1 >Co2 emissions by State</h1>
      <div className="link">
        <Link to='/CO'>Colorado CO emissions</Link>
      </div>
      <div className="link">
        <Link to='/WY'>Colorado WY emissions</Link>
      </div>
      <div className="link">
        <Link to='/MT'>Colorado MT emissions</Link>
      </div>
      <div className="link">
        <Link to='/OR'>Colorado OR emissions</Link>
      </div>
      <div className="link">
        <Link to='/CA'>Colorado CA emissions</Link>
      </div>
      <div className="link">
        <Link to='/NY'>Colorado NY emissions</Link>
      </div>
      <div className="link">
        <Link to='/TX'>Colorado TX emissions</Link>
      </div>
    </div>
  )
}


export default Main

