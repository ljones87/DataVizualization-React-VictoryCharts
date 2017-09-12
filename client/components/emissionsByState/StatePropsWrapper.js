import React from 'react'
import { connect } from 'react-redux'
import { fetchStateData } from '../../store'
import StateChartFormattingWrapper from './StateChartFormattingWrapper'


const StatePropsWrapper = (props) => {
  const { targetState, states } = props
  if (states.length === 7) {
    return (
      <div className="chartArea">
        <StateChartFormattingWrapper states={states} targetState={targetState} />
      </div>
    )
  } else {
    return <h1>Loading</h1>
  }
}


export default StatePropsWrapper


