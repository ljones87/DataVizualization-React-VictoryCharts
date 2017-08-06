import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import {Route} from 'react-router-dom'
import { fetchStateData, fetchStateJson } from '../store'
import * as d3 from 'd3';
import { MapBubble } from 'react-d3-map-bubble'
var topojson = require('topojson');


const info = (state) => {
  return {
    name: state.data.series[0].name,
    '2014': state.data.series[0].data[0][1],
    '2004': state.data.series[0].data[10][1],
    '1994': state.data.series[0].data[20][1],
    '1984': state.data.series[0].data[30][1],
    location: state.data.series[0].geography,
    units: state.data.series[0].unitsshort,
  }
}

  var width = 960,
  height = 600;

  var us = require('../data/us.json');

  // data should be a MultiLineString
  var dataStates = topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; });
  /// data should be polygon
  var dataCounties = topojson.feature(us, us.objects.nation);

  // class
  var meshClass = 'border';
  var polygonClass = 'land';

  // domain
  var domain = {
    scale: 'sqrt',
    domain: [0, 1e6],
    range: [0, 15]
  };

  var circles = topojson.feature(us, us.objects.counties).features
      .sort(function(a, b) { return b.properties.population - a.properties.population; })
  var circleValue = function(d) { return +d.properties.population; };
  var projection = 'null';

  var tooltipContent = function(d) {return d.properties;}

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      stateData: []
    }
  }


  render () {
      const states = this.state.stateData
      console.log(states)

    return (
      <div className="container">
          <div>
           <MapBubble
              width= {width}
              height= {height}
              dataPolygon= {dataCounties}
              polygonClass= {polygonClass}
              dataMesh= {dataStates}
              meshClass = {meshClass}
              domain= {domain}
              dataCircle= {circles}
              circleValue= {circleValue}
              circleClass= {'bubble'}
              projection= {projection}
              tooltipContent= {tooltipContent}
              showGraticule= {false}
              showTooltip= {true}
              showLegend= {true}
          />
          </div>
      <div id="chart" className="col-6" >


      </div>

      </div>
    )
  }
}

export default Main
