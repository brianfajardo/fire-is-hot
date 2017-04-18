import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route } from 'react-router-dom'

import requireAuth from './components/Require_Auth'
import App from './components/App'
import Resources from './components/Resources'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<App>
				<Route path="/resources" component={requireAuth(Resources)} />
			</App>
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'))