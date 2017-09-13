import React from 'react'
import { connect } from 'react-redux'
import { fetchStateData } from '../store'
import YearPropsWrapper from './emissionsByYear/YearPropsWrapper'
import StatePropsWrapper from './emissionsByState/StatePropsWrapper'

class PropsRetreiver extends React.Component {

  componentWillMount() {
    this.props.fetchDataThunk()
  }

    render () {
      const states = this.props.stateData
      const pathInfo = this.props.match.path.slice(1)

      if (states.length) {
        return pathInfo.length > 2 ?
          (<YearPropsWrapper states={states} year={pathInfo} />)
        : (<StatePropsWrapper states ={states} targetState={pathInfo} />)
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
