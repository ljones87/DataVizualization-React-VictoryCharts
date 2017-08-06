
/* -----------------    IMPORTS     ------------------ */

import axios from 'axios'
import {apiKey} from '../../secrets'

/*------------------- ACCESSORY FUNCTIONS ------------- */
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
const linkGenerator = (api, state) => {
  return `http://api.eia.gov/series/?api_key=${api}&series_id=EMISS.CO2-TOTV-TT-TO-${state}.A`;
};

/* -----------------    ACTION TYPES     ------------------ */

const GET_STATE_DATA = 'GET_STATE_DATA'



/* ------------   ACTION CREATORS     ------------------ */

const getStateData = (usState) => {
  return { type: GET_STATE_DATA, usState }
}


/* ------------       THUNK CREATORS     ------------------ */

const apiStates = ['CO', 'CA', 'NY', 'MT', 'OR', 'WY', 'TX']

export const fetchStateData = () => {
  return dispatch => {
    axios.all(apiStates.map(state => axios.get(linkGenerator(apiKey, state))))
      .then(axios.spread((CO, CA, NY, MT, OR, WY, TX) => {
        const states = [CO, CA, NY, MT, OR, WY, TX]
        states.forEach(state => dispatch(getStateData(info(state))))
      }))
      .catch(err => console.log(err))
  }
}

/* ------------       REDUCERS     ------------------ */

export default function (stateData = [], action) {
  switch (action.type) {
    case GET_STATE_DATA:
      return  [...stateData, action.usState]
    default:
      return stateData
  }
}

