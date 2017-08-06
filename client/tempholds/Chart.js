import React from 'react';
import {VictoryChart, VictoryGroup, VictoryStack, VictoryBar} from 'victory';

class App extends React.Component {


  render() {
    if (this.props.states.length === 7) {
      const states = this.props.states

      const getBarData = () => {
        return [1, 2, 3].map(() => {
          return [
            { x: new Date(1984, 1, 1), y: Math.random() },
            { x: new Date(1994, 1, 1), y: Math.random() },
            { x: new Date(2004, 1, 1), y: Math.random() }

          ]
        })
      }

      return (
        <div className="container">
          <VictoryChart domainPadding={{ x: 50 }} width={400} height={400} scale={{x: "linear"}}>
              <VictoryGroup offset={20} style={{ data: { width: 15 } }}>
                <VictoryStack colorScale={"red"}>
                    <VictoryBar  data={[{x: new Date(1984, 1, 1), y: 2},]}/>;
                </VictoryStack>
                <VictoryStack colorScale={"green"}>
                  {getBarData().map((data, index) => {
                    return <VictoryBar key={index} data={data}/>;
                  })}
                </VictoryStack>
                <VictoryStack colorScale={"blue"}>
                  {getBarData().map((data, index) => {
                    return <VictoryBar key={index} data={data}/>;
                  })}
                </VictoryStack>
              </VictoryGroup>
            </VictoryChart>
        </div>
      );
    } else {return <h1>Loading</h1>}
  }
}
export default App
/*
      { x: states['84'][0], y: Math.random() },
          { x: states['94'][0], y: Math.random() },
          { x: states['04'][0], y: Math.random() }
          */

            // { x: 1, y: Math.random() },
            // { x: 2, y: Math.random() },
            // { x: 3, y: Math.random() }



             // return  (
  //             <VictoryStack colorScale={"red"}>
  //               <VictoryBar
  //               categories={{ x: [coord.x]}}
  //               style={{ data: { fill: "#649FE2" } }}
  //               data={[coord]}>
  //               </VictoryBar>
  //             </VictoryStack>)
