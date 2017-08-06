
import React from 'react'
import { connect } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import {Route} from 'react-router-dom'
import { fetchStateData } from '../store'
import App from './Chart'
import BarGraph14 from './BarGraph14'
import BarGraph04 from './BarGraph04'
import BarGraph94 from './BarGraph94'
import BarGraph84 from './BarGraph84'

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

       <span className="2014">
        <BarGraph14 states ={states} />
        </span>
         <span className="2004">
        <BarGraph04 states ={states} />
        </span>
         <span className="1994">
        <BarGraph94 states ={states} />
        </span>
         <span className="1984">
        <BarGraph84 states ={states} />
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
