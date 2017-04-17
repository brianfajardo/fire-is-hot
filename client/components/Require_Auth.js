import React, { Component } from 'react'
import { connect } from 'react-redux'

// Higher order component scaffold
export default (ComposedComponent) => {
	class Authentication extends Component {
		render() {
			console.log(`isLoggedIn: ${this.props.authenticated}`)
			return <ComposedComponent {...this.props} />
		}
	}

	const mapStateToProps = state => ({
		authenticated: state.authenticated
	})

	return connect(mapStateToProps)(Authentication)
}