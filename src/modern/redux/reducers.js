import { combineReducers } from 'redux'

export const globalReducer = (injectReducer) => combineReducers({
  inputs: require('./inputs/reducer').reducer,
  default: require('./default/reducer').reducer,
  ...injectReducer
}) 