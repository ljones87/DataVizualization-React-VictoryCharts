 constructor() {
   super()
   this.projection = d3.geoAlbersUsa().scale(1280)
   this.quantize = d3.scaleQuantize()
   this.state = {
     CO: {},
     CA: {},
     NY: {},
     MT: {},
     OR: {},
     WY: {}
   }
 }

 componentDidMount() {
    axios.all([
      axios.get('http://api.eia.gov/series/?api_key=ab8ea2b9a02b487bbda3d6030af44167&series_id=EMISS.CO2-TOTV-TT-TO-CO.A'),
      axios.get('http://api.eia.gov/series/?api_key=ab8ea2b9a02b487bbda3d6030af44167&series_id=EMISS.CO2-TOTV-TT-TO-CA.A'),
      axios.get('http://api.eia.gov/series/?api_key=ab8ea2b9a02b487bbda3d6030af44167&series_id=EMISS.CO2-TOTV-TT-TO-NY.A'),
      axios.get('http://api.eia.gov/series/?api_key=ab8ea2b9a02b487bbda3d6030af44167&series_id=EMISS.CO2-TOTV-TT-TO-MT.A'),
      axios.get('http://api.eia.gov/series/?api_key=ab8ea2b9a02b487bbda3d6030af44167&series_id=EMISS.CO2-TOTV-TT-TO-OR.A'),
      axios.get('http://api.eia.gov/series/?api_key=ab8ea2b9a02b487bbda3d6030af44167&series_id=EMISS.CO2-TOTV-TT-TO-WY.A')
      ])
      .then(axios.spread((CO, CA, NY, MT, OR, WY) => {
        this.setState({
          //stateinfo: [info(CO), ]
          CO: info(CO),
          CA: info(CA),
          NY: info(NY),
          MT: info(MT),
          OR: info(OR),
          WY: info(WY)
        })
      }))
 }



 <div className="col-6">
      {
        states && states.map(state => {
          return (
            <div key={state.location}>
              <h3>
                {state.name}
              </h3>
              <ul>
                <li>{Object.keys(state)[0]}:  {state['1984']} {state.units}</li>
                <li>{Object.keys(state)[1]}:  {state['1994']} {state.units}</li>
                <li>{Object.keys(state)[2]}:  {state['2004']} {state.units}</li>
                <li>{Object.keys(state)[3]}:  {state['2014']} {state.units}</li>
              </ul>
            </div>)})
      }
      </div>


      import {MapBubble} from 'react-d3-map-bubble'
var topojson = require('topojson');

console.log(topojson)
console.log(MapBubble)

  var width = 960,
  height = 600;

  var us = require('./data/us.json');

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




   //  var legend = svg.append("g")
      //    .attr("class", "legend")
      //    .attr("transform", "translate(50, 30)")
      //    .style("font-size", "12px")
      //    .call(d3.legend)

      legend.append("circle")
        .attr("cy", function(d) { return -radius(d); })
        .attr("r", radius);

      legend.append("text")
        .attr("y", function(d) { return -2 * radius(d); })
        .attr("dy", "1.3em")
        .text(d3.format(".1s"));
