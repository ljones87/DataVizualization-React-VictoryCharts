import React from 'react'
import { connect } from 'react-redux'
import { fetchStateData } from '../../store'
import YearPropsWrapper from './YearPropsWrapper'


class PropsRetreiver extends React.Component {

  componentWillMount() {
    this.props.fetchDataThunk()
  }

    render () {
      const states = this.props.stateData
      const year = this.props.match.path.slice(1)
      console.log("+++++", year)
      if (states.length) {
      return (
        <div className="chartArea">
          <YearPropsWrapper states={states} year={year} />
        </div>
      )
    } else {
      return <h1>Loading</h1>
    }
    }
  }

  const mapState = (state) => {
    return {
     stateData: state.stateData
    }
  }

  const mapDispatch = (dispatch) => {
    return {
      fetchDataThunk() {
        dispatch(fetchStateData())
      }
    }
  }


  export default connect(mapState, mapDispatch)(PropsRetreiver)
