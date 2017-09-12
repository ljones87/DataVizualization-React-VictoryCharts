import React from 'react'
import StateLinkGenerator from './StateLinkGenerator'
import YearLinkGenerator from './YearLinkGenerator'

const Sidebar = () => {
  const states = ['CO', 'CA', 'NY', 'MT', 'OR', 'WY', 'TX']
  const years = ['1984', '1994', '2004', '2014']
  return (
    <div className="col-3">
      <h2>Co2 emissions by State</h2>
       {states.map(state => <StateLinkGenerator key={state} state={state} />)}
      <div >
      <hr />
        <h2>Co2 emissions by year</h2>
      </div>
       {years.map(year => <YearLinkGenerator key={year} year={year} />)}
    </div>
  )
}


export default Sidebar

