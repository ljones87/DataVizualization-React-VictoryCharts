import React from 'react';
import ChartComponent from './ChartComponent';
import  { coordGenerator } from '../graphFunctions';

const StateChartFormattingContainer = (props) => {
  if (props.states.length >= 7) {
    const { states, targetState } = props;
    const targetData = states.filter(state =>  state.location === targetState)[0];
    const yearCategories = Object.keys(targetData).slice(0, 4);
    const coords = coordGenerator(targetData, yearCategories);

      return (
        <div className="chartArea">

          <h2 className="title">{`${targetState} Emissions Data per Decade`}</h2>

          <ChartComponent categories={yearCategories} coords={coords} state={targetState} />
        </div>
      );
    } else  { return <h1>Loading</h1>; }
  };


export default StateChartFormattingContainer;
