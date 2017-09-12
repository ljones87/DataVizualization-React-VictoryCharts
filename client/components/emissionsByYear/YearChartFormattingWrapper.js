import React from 'react';
import BarComponent from './BarComponent'

const YearChartFormattingWrapper = (props) => {
    if (props.states.length >= 7) {
      const { states, year} = props

      //adds state and co emissions to x/y coordinates
      const coords = states.map(state => ({
        x: state.location, y: Math.ceil(state[year])
      }))
      const categories = states.map(state => state.location)

      return (
        <div>
          <h2 className="title">{`Emissions Data by year`}</h2>
          <BarComponent
            categories={categories}
            coords={coords}
            year={year} />
        </div>
      );
  } else {
    return <h1>Loading</h1>
  }
}

export default YearChartFormattingWrapper
