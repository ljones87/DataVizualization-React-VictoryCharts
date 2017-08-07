import React from 'react';
import {VictoryChart, VictoryBar, VictoryLabel, VictoryAxis, VictoryContainer} from 'victory';


const BarComponent2 =(props) => {
     return (
       <div className='chart col-8'>
        <VictoryChart height={400} width={400}
          domainPadding={{x: 40, y: 40}}
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
          containerComponent={<VictoryContainer responsive={true}/>}
          />
          <VictoryAxis
            label={ props.state + " emissions over 40 years"}
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

export default BarComponent2
