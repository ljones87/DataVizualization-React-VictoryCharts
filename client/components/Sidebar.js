import React from 'react';
import StateLinkGenerator from './StateLinkGenerator';
import YearLinkGenerator from './YearLinkGenerator';
import { states, years } from '../displayData';

const Sidebar = () => {
  return (
    <div className="col-3">
      <h2>Co2 emissions by state</h2>
       {states.map(state => <StateLinkGenerator key={state} state={state} />)}
      <div >
      <hr />
        <h2>Co2 emissions by year</h2>
      </div>
       {years.map(year => <YearLinkGenerator key={year} year={year} />)}
    </div>
  );
};


export default Sidebar;

