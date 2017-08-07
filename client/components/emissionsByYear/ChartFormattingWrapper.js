import React from 'react';
import BarComponent from './BarComponent'

class ChartFormattingWrapper extends React.Component {


  render() {
    if (this.props.states.length) {

      const {states} = this.props
      const year = this.props.year
      const coords = states.map(state => ({
        x: state.location, y: Math.ceil(state[year])
      }))
      const categories = states.map(state => state.location)

      return (
        <BarComponent categories={categories} coords={coords} year={year}/>
      );
  }  else {
       return <h1>Loading</h1>
  }
  }
}

export default ChartFormattingWrapper
