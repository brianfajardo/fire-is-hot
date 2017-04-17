import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Higher order component scaffold
export default (ComposedComponent) => {
	class Authentication extends Component {
		// If the user is not authenticated, navigate
		// back to home route
		componentWillMount() {
			if (!this.props.authenticated) {
				this.context.router.history.push('/')
			}
		}

		// Handling when the user is viewing the protected
		// Resources path and logs out --> Will kick user from page
		componentWillUpdate(nextProps) {
			if (!nextProps.authenticated) {
				this.context.router.history.push('/')
			}
		}

		render() {
			return <ComposedComponent {...this.props} />
		}
	}

	// Need to declare context types using PropTypes
	Authentication.contextTypes = {
		router: PropTypes.object
	}

	const mapStateToProps = state => ({
		authenticated: state.authenticated
	})

	return connect(mapStateToProps)(Authentication)
}