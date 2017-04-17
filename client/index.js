import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './components/App'
import Resources from './components/Resources'
import reducers from './reducers'

const createStoreWidthMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
	<Provider store={createStoreWidthMiddleware(reducers)}>
		<BrowserRouter>
			<App>
				<Route path="/resources" component={Resources} />
			</App>
		</BrowserRouter>
	</Provider>
	, document.getElementById('root')
)