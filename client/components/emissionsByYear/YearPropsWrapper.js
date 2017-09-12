import React from 'react'
import { connect } from 'react-redux'
import { fetchStateData } from '../../store'
import YearChartFormattingWrapper from './YearChartFormattingWrapper'


const YearPropsWrapper = (props) => {
    const { states, year} = props
    if (states.length === 7) {
    return (
      <div className="chartArea">
        <YearChartFormattingWrapper states={states} year={year} />
      </div>
    )
  } else {
    return <h1> Loading </h1>
  }
  }



 export default YearPropsWrapper
