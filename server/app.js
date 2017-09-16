const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
if (process.env.NODE_ENV !== 'production') require('../secrets')
const apiKey = process.env.API_KEY
const PORT = process.env.PORT || 2000

//formats api cal
const linkGenerator = (api, state) => {
  return `http://api.eia.gov/series/?api_key=${api}&series_id=EMISS.CO2-TOTV-TT-TO-${state}.A`;
}

const yearData = (state, index) => state.data.series[0].data[index][1]

//formats data from api call JSON
const info = (state) => {
  return {
    name: state.data.series[0].name,
    '2014': yearData(state, 0),
    '2004': yearData(state, 10),
    '1994': yearData(state, 20),
    '1984': yearData(state, 30),
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


