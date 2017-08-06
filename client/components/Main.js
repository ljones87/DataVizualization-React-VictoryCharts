
import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { fetchStateData } from '../store'

import BarGraphCO from './BarGraphCO'
import BarGraphWY from './BarGraphWY'
import BarGraphMT from './BarGraphMT'
import BarGraphCA from './BarGraphCA'

class Main extends React.Component {

  componentWillMount() {
    this.props.fetchDataThunk()
    //this.props.fetchJsonThunk()
  }


  render() {
    if (!this.props.stateData.length === 7) {
      return <h1>Loading</h1>
    } else {
      const states = this.props.stateData

      return (
        <div className="container">

          <span>
            <BarGraphCO states={states} />
          </span>
          <span>
            <BarGraphMT states={states} />
          </span>
          <span>
            <BarGraphWY states={states} />
          </span>
          <span>
            <BarGraphCA states={states} />
          </span>
        </div>
      )
    }
  }
}

const mapState = (state) => {
  return {
    stateData: state.stateData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataThunk() {
      dispatch(fetchStateData())
    },


  }
}

export default connect(mapState, mapDispatchToProps)(Main)



