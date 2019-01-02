import React, { Component } from 'react'
import Questions from './Questions';
import Answers from './Answers';
//import Buttons from './Buttons';
import Data from './data';

class Quiz extends Component {
	

      
	constructor(props){
		super(props)
		this.state = {
			value: 1
		}

	}

	displayButtons = () => {
		if (this.state.value < Data.length) {
		const displayButtons = <button onClick={() => {
			this.setState({
				value: this.state.value + 1,
			 }) 
		}}> Next</button>
		return displayButtons;
	} else if(this.state.value === Data.length) {
		const displayButtons = <button onClick={() => {
			this.setState({
				value: this.state.value + 1
			})
		}}>Submit</button>
		return displayButtons;
	}
			
	}	
	


    render() {
    	
		return (
			<React.Fragment>
			<h1>Quiz</h1>
			<Questions value={this.state.value} />
			<Answers value={this.state.value}/>
			{this.displayButtons()}
			</React.Fragment>
			)
		}

}


export default Quiz;