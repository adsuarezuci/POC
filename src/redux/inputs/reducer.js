import { initialState, SET_BOOL_VALUE, SET_SELECT_VALUE, SET_VALUE } from "./constants"

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_VALUE:
        return {
          ...state,
          value: action.payload
        }
      case SET_SELECT_VALUE:
        return {
            ...state,
            select: action.payload
          }
      case SET_BOOL_VALUE:
        return {
            ...state,
            boolValue: action.payload
          }
      default:
        return state
    }
  }