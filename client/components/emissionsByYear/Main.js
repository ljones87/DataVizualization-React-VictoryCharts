
import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {

  return (
    <div>
      <div  >
        <h1>Co2 emissions by year</h1>
      </div>
      <div className='link'>
        <Link to="/1984">1984</Link>
      </div>
      <div className='link'>
        <Link to="/1994">1994</Link>
      </div>
      <div className='link'>
        <Link to="/2004">2004</Link>
      </div>
      <div className='link'>
        <Link to="/2014">2014</Link>
      </div>
    </div>
  )
}


export default Main

