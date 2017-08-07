import React from 'react'
import { connect } from 'react-redux'
import { fetchStateData } from '../../store'
import ChartFormattingWrapper from './ChartFormattingWrapper'


class PropsWrapper2 extends React.Component {


componentWillMount() {
  this.props.fetchDataThunk()
}


  render () {
    if (!this.props.stateData.length === 7) {
      return <h1>Loading</h1>
    } else {
    const states = this.props.stateData
    const year = this.props.match.url.slice(1)
    return (
      <ChartFormattingWrapper states={states} year={year} />
    )
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


export default connect(mapState, mapDispatch)(PropsWrapper2)


