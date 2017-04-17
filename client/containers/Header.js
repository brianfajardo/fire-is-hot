import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap'

import * as actions from '../actions'

class Header extends Component {
	authButton() {
		if (this.props.authenticated) {
			return (
				<Button
					bsSize="xs"
					bsStyle="danger"
					onClick={() => this.props.authenticate(false)}
				>
					Logout
				</Button>
			)
		}

		return (
			<Button
				bsSize="xs"
				bsStyle="success"
				onClick={() => this.props.authenticate(true)}
			>
				Login
				</Button>
		)
	}

	render() {
		return (
			<Navbar>
				<Nav bsStyle="tabs">
					<NavItem>
						<Link to="/">Home</Link>
					</NavItem>
					<NavItem>
						<Link to="/resources">Resources</Link>
					</NavItem>
					<NavItem>
						{this.authButton()}
					</NavItem>
				</Nav>
			</Navbar>
		)
	}
}

const mapStateToProps = state => ({
	authenticated: state.authenticated
})

export default connect(mapStateToProps, actions)(Header)