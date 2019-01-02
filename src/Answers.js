import React, { Component } from 'react'
import Results from './Results'
import Data from './data';

class Answers extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedOptions: [],
			chk: [null,null,null,null]
		}
		//this.handleChange = this.handleChange.bind(this)
	}
	
	componentWillUpdate() {
		if(this.state.chk.includes('checked')){
			this.setState({ chk: [null,null,null,null] })
		}
	}
	
	

    handleChange = (e,index) => {
    	const selectedOptions = this.state.selectedOptions
   		let position
   		let newChk = []
		// check if the check box is checked or unchecked
    	if (e.target.checked) {
      	// add the numerical value of the checkbox to options array
      		selectedOptions.push(e.target.value)
      		newChk[index] = 'checked'
      		console.log(newChk)
    	} else {
      		// or remove the value from the unchecked checkbox from the array
      		position = selectedOptions.indexOf(e.target.value)
      		selectedOptions.splice(position, 1)
    	}

    	// update the state with the new array of options
    	this.setState({ 
    		selectedOptions: selectedOptions,
    		chk: newChk 
    	})
		console.log(this.state.selectedOptions)    
    	}

	displayAnswers = () => {
		const filtered = Data.filter(data => data.id === this.props.value)
		const displayAnswers = filtered.map(quiz => quiz.options.map((answers,index) => 
				<div key={index+1}>
				<input type ="checkbox" 
					   value={answers} 
					   onChange={(e) => this.handleChange(e,index)} 
					   checked={this.state.chk[index]}
					   />{answers}
				</div>
			))
			return displayAnswers;
	}

	displayResult = () => {
		if (this.props.value === 5) {
			const displayResult = <Results value={this.props.value} 
						 				   selectedOptions={this.state.selectedOptions}
								   />
				return displayResult
		}
	}

	render () {
		return (
				<React.Fragment>
				{this.displayAnswers()}
				{this.displayResult()}
				</React.Fragment>
			)
	}
}

	

export default Answers;