const PREFIX = 'INPUTS' // eslint-disable-line no-unused-vars

export const SET_VALUE  = `${PREFIX}/SET_VALUE`
export const SET_SELECT_VALUE = `${PREFIX}/SET_SELECT_VALUE`
export const SET_BOOL_VALUE  = `${PREFIX}/SET_BOOL_VALUE`
export const SET_SLIDE_VALUE  = `${PREFIX}/SET_SLIDE_VALUE`

export const initialState = {
    value: '',
    select: '',
    boolValue: false,
    slideValue: 0
}