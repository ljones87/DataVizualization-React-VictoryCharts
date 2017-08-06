import React from 'react';
import {VictoryChart, VictoryGroup, VictoryStack, VictoryBar} from 'victory';

class BarGraph extends React.Component {


  render() {
    if (this.props.states.length === 7) {

    const {states} = this.props
    const year = "2014"
    const coords = states.map(state => ({
      x:[state.location.slice(-2)][0], y: Math.ceil(state[year])
    }))
    const categories = states.map(state => state.location.slice(-2))
    console.log(coords)



    return (
       <div>
        <VictoryChart height={400} width={400}
          domainPadding={{x: 50, y: [0, 20]}}
          scale={{ y:"linear"}}
        >
          <VictoryBar
          categories={{ x: categories}}
            style={{ data: { fill: "#c43a31" } }}
            data={coords}
          />
        </VictoryChart>
      </div>
    );
  }  else {
       return <h1>Loading</h1>
  }
  }
}

export default BarGraph
