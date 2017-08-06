import React from 'react';
import {VictoryChart, VictoryBar} from 'victory';


const Bars =(props) => {
     return (
       <div>
        <VictoryChart height={400} width={400}
          domainPadding={{x: 50, y: [0, 20]}}
          scale={{ y:"linear"}}
        >
          <VictoryBar
          categories={{ x: props.categories}}
            style={{ data: { fill: "#c43a31" } }}
            data={props.coords}
          />
        </VictoryChart>
      </div>
    )
}
