import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Data from './data';

class Buttons extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: this.props.value
		}
	}

	displayButtons = () => {
		console.log(this.state.value)
		const displayButtons = <button onClick={() => {this.setState({value: this.state.value + 1})}}>Next</button>
			return displayButtons;
	}

	render () {
		return (
				<p>{this.displayButtons()}</p>
			)
	}
}

export default Buttons;