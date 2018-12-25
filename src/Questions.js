import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Data from './data'

class Questions extends Component {
	constructor(props){
		super(props)
	}
	displayQuestions = () => {
	  const filtered = Data.filter(data => data.id === this.props.value)
	  const displayQuestions = filtered.map((questions,index) => (
					<div key={questions.id}>
						<h3> {questions.question}</h3>
					</div>
					))
		return displayQuestions;
	}

	render () {
		return (
				<React.Fragment>
				<h1> {this.displayQuestions()} </h1>
				</React.Fragment>
			)
	}
}

export default Questions;