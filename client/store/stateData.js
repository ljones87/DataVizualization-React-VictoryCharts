
/* -----------------    IMPORTS     ------------------ */

import axios from 'axios'


/* -----------------    ACTION TYPES     ------------------ */

const GET_STATE_DATA = 'GET_STATE_DATA'



/* ------------   ACTION CREATORS     ------------------ */

const getStateData = (usState) => {
  return { type: GET_STATE_DATA, usState }
}


/* ------------       THUNK CREATORS     ------------------ */


export const fetchStateData = () => {
  return dispatch => {
    axios.get('/data')
      .then(res => res.data.forEach(state => dispatch(getStateData(state))))
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
