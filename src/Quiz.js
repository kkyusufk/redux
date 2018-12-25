import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Questions from './Questions';
import Answers from './Answers';
//import Buttons from './Buttons';
import Data from './data';

class Quiz extends Component {
	

      
	constructor(props){
		super(props)
		this.state = {
			value: 1,
			chk: null
		}

	}

	
	

	displayButtons = () => {
		const displayButtons = <button onClick={() => {
			this.setState({
				value: this.state.value + 1,
			 }) 
		}}> Next</button>
			return displayButtons;
		
	}


    render() {
    	
		return (
			<React.Fragment>
			<h1>Quiz</h1>
			<Questions value={this.state.value} />
			<Answers value={this.state.value} 
			/>
			{this.displayButtons()}
			</React.Fragment>
			)
		}

}


export default Quiz;