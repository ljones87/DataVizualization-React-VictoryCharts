import React from 'react';
import {VictoryChart, VictoryBar, VictoryLabel} from 'victory';


const BarComponent =(props) => {
     return (
       <div className='chart'>
        <VictoryChart height={200} width={200}
          domainPadding={{x: 30, y: [0, 10]}}
          scale={{ y:"linear"}}
        >
          <VictoryBar
          categories={{ x: props.categories}}
          labels={(d) => d.y}
          style={{ data: { fill: "#c43a31" } }}
          labelComponent={<VictoryLabel dy={10} />}
            data={props.coords}
          />
        </VictoryChart>
      </div>
    )
}

export default BarComponent
