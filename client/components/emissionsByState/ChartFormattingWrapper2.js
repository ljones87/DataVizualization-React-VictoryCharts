import React from 'react';
import BarComponent2 from './BarComponent2'

class ChartFormattingWrapper2 extends React.Component {

  render() {
    if (this.props.states.length) {

      const { states } = this.props
      const targetState = this.props.targetState
      const targetData = states.filter(state => state.location === targetState)[0]
      const yearCategories = Object.keys(targetData).slice(0, 4)

      const coordGenerator = (state) => {
        const xy = []
        for (let key of yearCategories) {
          const xcoord = key
          const ycoord = Math.ceil(state[key])
          xy.push({ x: xcoord, y: ycoord })
        }
        return xy
      }
      const coords = coordGenerator(targetData)

      return (
        <div>
        <div>
          <h1>{`${targetState} Emissions Data per Decade`}</h1>
        </div>
          <BarComponent2 categories={yearCategories} coords={coords} state={targetState}/>
        </div>
      )
    } else {
      return <h1>Loading</h1>
    }
  }
}

export default ChartFormattingWrapper2
