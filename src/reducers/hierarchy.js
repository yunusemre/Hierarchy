import * as types from '../constants'
import { findAndDel } from '../utils/recursionFormatter'

const init = {
  data: [],
  errorMessage: null
}

export function hierarchy(state = init, action) {
  switch (action.type) {
    case types.GET_DATA:
      return { ...state, data: action.payload }
    case types.REMOVE_FILTER:
      const newArray = findAndDel(state.data, action.id)
      console.log('newArray', newArray)
      return { ...state, data: newArray }
    case types.ERROR:
      return { ...state, errorMessage: action.message }
    default:
      return state
  }
}
