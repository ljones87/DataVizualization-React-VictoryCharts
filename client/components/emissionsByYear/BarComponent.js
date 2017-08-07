import React from 'react';
import {VictoryChart, VictoryBar, VictoryLabel, VictoryAxis} from 'victory';


const BarComponent =(props) => {
     return (
       <div className='chart col-8'>
        <VictoryChart height={400} width={400}
          domainPadding={{x: 30, y: [0, 10]}}
          scale={{ y:"linear"}}
          style={{ height: 50, width: 50}}
          size={10}
        >
          <VictoryBar
          categories={{ x: props.categories}}
          labels={(d) => d.y}
          style={{ data: { fill: "#c43a31" } }}
          labelComponent={<VictoryLabel dy={10} />}
          data={props.coords}
          />
          <VictoryAxis
            label={"state emissions " + props.year}
            style={{
              axisLabel: { padding: 30 }
            }}
          />
           <VictoryAxis dependentAxis
            label="million metric tons CO2"
            style={{
              axisLabel: { padding: 40 }
            }}
          />
        </VictoryChart>
      </div>
    )
}

export default BarComponent
