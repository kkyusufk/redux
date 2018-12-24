import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Data from './data'

class Quiz extends Component {

	constructor(props) {
		super(props);
		this.state = {
			options : [], // State for options stored 
			selectedOptions: [], // State for the checked options by user
			score: 0, // State for keeping track of scores
			value: 1, // State for displaying the question
			isEnabledSubmit: false, // State for toggling enable/disable on submit button
			isEnabledNext: false
	}
	this.onClick = this.onClick.bind(this)
	this.onSubmit = this.onSubmit.bind(this)
}


// Calculate the score of the Quiz
result() {
	for (var i=0; i<Data.length; i++){
		if(this.state.options[i] === this.state.selectedOptions[i]) {
				let newScore = ++this.state.score
				this.setState({
					score: newScore,
					isEnabledSubmit: false
				});
			} 	
			const result = (
				<div>
					<h1> Your Score is {this.state.score} </h1> 
				</div>
				)
	ReactDOM.render(result, document.getElementById('App'));
	}

	
}

onSubmit(e) {
	// Store the selected Options in the selectedOptions State.
	const selectedOptions = this.state.selectedOptions;
	let count = 0;
	e.preventDefault()
	for (var i=0; i<Data.length; i++){
		if( count <= Data.length ){
			selectedOptions.push(Data[i].correct);
			count++;	
		}
	}
	 this.result();

}

onClick(e) {
	const options = this.state.options
	const isEnabled = this.state.isEnabled;
    let index

    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      options.push(e.target.value)
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = options.indexOf(e.target.value)
      options.splice(index, 1)
    }

    // update the state with the new array of options
    this.setState({ options: options })
    console.log(this.state.options);
    if (this.state.options.length === Data.length){
    	this.setState({ isEnabledSubmit: true })
    }

    
  }


 displayQuiz = () => {
 			const filtered = Data.filter(data => data.id<=this.state.value)
 				
	  const displayQuiz = filtered.map((quiz,index) => (
					<div key={quiz.id} >
					<h3> {quiz.question}</h3>
					{quiz.options.map(j => (
							<p><input  type="checkbox" name="answers" onClick={this.onClick} value={j} /> {j} </p>
						))}
					
				</div>
			
				))
	  				
	  		return displayQuiz;
	 }

  nextButton = () => {
  		this.setState({ value: this.state.value + 1 });
  }

    render() {

		return (
			<React.Fragment>
			<div>
				<h1>QUIZ</h1>
				<form onSubmit = {this.onSubmit}>
				{this.displayQuiz()}
				{this.state.isEnabledSubmit ? <input type="submit" id="isEnabled" /> : null}
				</form>  
				<input type="button" onClick={this.nextButton} value="Next" />
			</div>
			</React.Fragment>
			
			)
		}

}


export default Quiz;