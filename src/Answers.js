import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Data from './data';

class Answers extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedOptions: [],
			chk: null
		}
	}
	componentWillUpdate() {
		if(this.state.chk === 'checked'){
			this.setState({ chk:null })
		}
	}
	
	

    handleChange = (e) => {
    const selectedOptions = this.state.selectedOptions
   	let index
	// check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      selectedOptions.push(e.target.value)
      console.log(selectedOptions)
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = selectedOptions.indexOf(e.target.value)
      selectedOptions.splice(index, 1)
      console.log(selectedOptions)
    }

    // update the state with the new array of options
    this.setState({ 
    	selectedOptions: selectedOptions, 
    })
    
    }

	displayAnswers = () => {
		const filtered = Data.filter(data => data.id === this.props.value)
		const displayAnswers = filtered.map(quiz => quiz.options.map((answers,index) => 
				<div key={index}>
				<input type ="checkbox" 
					   value={answers} 
					   onChange={this.handleChange} 
					   checked={this.state.chk}
					   />{answers}
				</div>
			))
			return displayAnswers;
	}

	render () {
		return (
				<p>{this.displayAnswers()}</p>
			)
	}
}

	

export default Answers;