const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const PORT = 2000;
const axios = require('axios');
//const secrets = require('../secrets');
const apiKey = process.env.API_KEY

//formats api cal
const linkGenerator = (api, state) => {
  return `http://api.eia.gov/series/?api_key=${api}&series_id=EMISS.CO2-TOTV-TT-TO-${state}.A`;
}

//formats data from api call JSON
const info = (state) => {
  return {
    name: state.data.series[0].name,
    '2014': state.data.series[0].data[0][1],
    '2004': state.data.series[0].data[10][1],
    '1994': state.data.series[0].data[20][1],
    '1984': state.data.series[0].data[30][1],
    location: state.data.series[0].geography.slice(-2),
    units: state.data.series[0].units,
  }
}
// Logging middleware
app.use(morgan('dev'));


// Body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// If you want to add routes, they should go here!

//fill in values for API call
const apiStates = ['CO', 'CA', 'NY', 'MT', 'OR', 'WY', 'TX']


app.get('/data', (req, res, next) => {
  axios.all(apiStates.map(state => axios.get(linkGenerator(apiKey, state))) )
    .then(axios.spread((CO, CA, NY, MT, OR, WY, TX) => {
      const states = [CO, CA, NY, MT, OR, WY, TX]
      return states.map(state => info(state))
    }))
    .then(formattedStates => res.json(formattedStates))
    .catch(err => console.log(err));
});


// For all GET requests that aren't to an API route,
// we will send the index.html!
app.get('/*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', '/public/index.html'));
});

// Handle 404s
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handling endware
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message || 'Internal server error');
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


