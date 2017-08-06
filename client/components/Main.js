
import React from 'react'
import { connect } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import {Route} from 'react-router-dom'
import { fetchStateData, fetchStateJson } from '../store'
import App from './Chart'
import BarGraph from  './BarGraph'


class Main extends React.Component {

componentWillMount() {
  this.props.fetchDataThunk()
  //this.props.fetchJsonThunk()
}


  render () {
    if (!this.props.stateData.length === 7) {
      return <h1>Loading</h1>
    } else {
    const states = this.props.stateData

    return (
      <div className="container">

       <span className="stateData">
        <BarGraph states ={states} />
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
    // fetchJsonThunk() {
    //   dispatch(fetchStateJson())
    // }

  }
}

export default connect(mapState, mapDispatchToProps)(Main)



    //  {
    //     states && states.map(state => {
    //       return (
    //         <span className="headr" key={state.location}>
    //           <div >
    //             {state.name.split(' ').slice(-1)}
    //           </div>
    //           <span className="CO2">
    //             {state['2014']}   {state.units}
    //           </span>
    //         </span>)}).sort()
    //   }
