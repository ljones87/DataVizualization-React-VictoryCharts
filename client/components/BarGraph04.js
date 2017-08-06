import React from 'react';
import BarComponent from './BarComponent'

class BarGraph04 extends React.Component {


  render() {
    if (this.props.states.length === 7) {

      const {states} = this.props
      const year = "2004"
      const coords = states.map(state => ({
        x:[state.location.slice(-2)][0], y: Math.ceil(state[year])
      }))
      const categories = states.map(state => state.location.slice(-2))

      return (
        <BarComponent categories={categories} coords={coords} />
      );
  }  else {
       return <h1>Loading</h1>
  }
  }
}

export default BarGraph04
