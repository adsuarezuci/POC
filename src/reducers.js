import { combineReducers } from 'redux'

export const globalReducer = (injectReducer) => combineReducers({
  inputs: require('./redux/inputs/reducer').reducer,
  default: require('./redux/default/reducer').reducer,
  ...injectReducer
}) 