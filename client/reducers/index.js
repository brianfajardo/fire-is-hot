import { combineReducers } from 'redux'

import authenticationReducer from './authetication'

const rootReducers = combineReducers({
	authenticated: authenticationReducer
})

export default rootReducers