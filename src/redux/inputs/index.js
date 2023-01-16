import { 
    SET_BOOL_VALUE, 
    SET_SELECT_VALUE, 
    SET_VALUE 
} from "./constants"


export const changeValueInput = (value) => ({
  type: SET_VALUE,
  payload: value
})

export const changeSelectInput = (value) => ({
  type: SET_SELECT_VALUE,
  payload: value
})

export const changeBoolInput = (value) => ({
  type: SET_BOOL_VALUE,
  payload: value
})