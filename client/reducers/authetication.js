import { CHANGE_AUTH } from '../constants/actionTypes'

const INITIAL_STATE = false

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload
    default:
      return state
  }
}