const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();
const PORT = 2000;
const axios = require('axios');
const secrets = require('../secrets');
const apiKey = secrets.apiKey;

const linkGenerator = (api, state) => {
  return `http://api.eia.gov/series/?api_key=${api}&series_id=EMISS.CO2-TOTV-TT-TO-${state}.A`;
};
// Logging middleware
app.use(morgan('dev'));


// Body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// If you want to add routes, they should go here!
const apiStates = ['CO', 'CA', 'NY', 'MT', 'OR', 'WY', 'TX']

app.get('/data', (req, res, next) => {
  axios.all( apiStates.map(state => axios.get(linkGenerator(apiKey, state))) )
    .then(axios.spread((CO, CA, NY, MT, OR, WY, TX) => {
      const states = [CO, CA, NY, MT, OR, WY, TX]
      return states
    }))
    .then(res1 => res.json(res1.states))
    .catch(err => console.log(err));
});


// For all GET requests that aren't to an API route,
// we will send the index.html!
app.get('/*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
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

db.sync().then(() => console.log('The database is synced'));
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


  // axios.get(linkGenerator(apiKey, states[0])),
  //   axios.get(linkGenerator(apiKey, states[1])),
  //   axios.get(linkGenerator(apiKey, states[2])),
  //   axios.get(linkGenerator(apiKey, states[3])),
  //   axios.get(linkGenerator(apiKey, states[4])),
  //   axios.get(linkGenerator(apiKey, states[5])),
  //   axios.get(linkGenerator(apiKey, states[6]))
//
