
import stateData from './stateData'
import stateJson from './stateJson'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const reducer = combineReducers({
  stateData,
  stateJson
});

const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store

export * from './stateData'
export * from './stateJson'
