import { CHANGE_AUTH } from '../constants/actionTypes'

// Super simple login method
// Just toggles a boolean value for login state
export const authenticate = isLoggedIn => ({
  type: CHANGE_AUTH,
  payload: isLoggedIn
})