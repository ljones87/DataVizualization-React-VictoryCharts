import React from 'react'
import { connect } from 'react-redux'
import { fetchStateData } from '../../store'
import ChartFormattingWrapper2 from './ChartFormattingWrapper2'


class PropsWrapper2 extends React.Component {
  componentDidMount() {
    this.props.fetchDataThunk()
  }

    render() {
      if (!this.props.stateData.length === 7) {
        return <h2>Loading</h2>
      } else {
        const states = this.props.stateData
        const targetState = this.props.match.path.slice(1)
        return (
          <ChartFormattingWrapper2 states={states} targetState={targetState} />
        )
      }
  }
}

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps
)(PropsWrapper2)


