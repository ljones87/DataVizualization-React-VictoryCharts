
/* -----------------    IMPORTS     ------------------ */

import axios from 'axios'

/* -----------------    ACTION TYPES     ------------------ */

const GET_STATE_JSON = 'GET_STATE_JSON'


/* ------------   ACTION CREATORS     ------------------ */

const getStateJson = (nation) => {
  return { type: GET_STATE_JSON, nation }
}

/* ------------       THUNK CREATORS     ------------------ */

export const fetchStateJson = () => {
   return dispatch => {
    axios.get('https://unpkg.com/us-atlas@1.0.2/us/10m.json')
      .then(res => dispatch(getStateJson(res.data.objects)))
      .catch(err => console.log(err))
   }
}

/* ------------       REDUCERS     ------------------ */

export default function (stateJson = {}, action) {
  switch (action.type) {
    case GET_STATE_JSON:
      return  action.nation
    default:
      return stateJson
  }
}
