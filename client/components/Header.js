import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem, Button } from 'react-bootstrap'

export default class Header extends Component {
	authButton() {
		return (
			<Button
				bsSize="xs"
				bsStyle="success"
			>
				Sign in
			</Button>
		)
	}

	render() {
		return (
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
		)
	}
}