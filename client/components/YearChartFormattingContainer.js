import React from 'react';
import BarComponent from './BarComponent'

const YearChartFormattingContainer  = (props) => {
    if (props.states.length >= 7) {
      const { states, year } = props

      //maps over states returning array of x coords being states and y cords being emissions data rounded up
      const coords = states.map(state => ({
        x: state.location, y: Math.ceil(state[year])
      }))
      const categories = states.map(state => state.location)

      return (
        <div className="chartArea">
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

export default YearChartFormattingContainer
