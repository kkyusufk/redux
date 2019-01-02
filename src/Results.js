import React, { Component } from 'react'
import Data from './data';

class Results extends Component {
	constructor(props){
		super(props)
		this.state = {
			options: [],
			selectedOptions: this.props.selectedOptions,
			score: 0
		}
	}

	componentDidMount() {
		const filtered = Data.map(data => data.correct)
		
		this.setState({
			options: filtered
		})
		
}


displayResults = () => {
	let score1 = 0
	for(let i=0; i<Data.length; i++){
			if(this.state.options[i] === this.state.selectedOptions[i]){
				++score1
			}
		
	}
	if (this.props.value <= Data.length + 1){
			const score = <p> Your Score is {score1}  </p>
			return score	
		}
	}


render () {
		return (
			<div>
				{this.displayResults()}
			</div>
			)
	}
}

export default Results;