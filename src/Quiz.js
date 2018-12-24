import React, { Component } from 'react'
import Data from './data'

class Quiz extends Component {

	constructor(props) {
		super(props);
		this.state = {
			options : [],
			selectedOptions: [],
			score: 0
	}
	this.onClick = this.onClick.bind(this)
	this.onSubmit = this.onSubmit.bind(this)
}



result() {
	for (var i=0; i<Data.length; i++){

		if(this.state.options[i] === this.state.selectedOptions[i]) {
				this.setState({
					score: this.state.score + 1 
				});
			} 	
	}

	
}

onSubmit(e) {
	const selectedOptions = this.state.selectedOptions;
	let count = 0;
	e.preventDefault()
	for (var i=0; i<Data.length; i++){
		if( count <= 1 ){
			selectedOptions.push(Data[i].correct);
			count++;	
		}
		
	}
	this.result()
	 

}

onClick(e) {
	const options = this.state.options
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
    
  }


 postItem = () => {
	  const postItems = Data.map(post => (
					<div key={post.id} >
					<h3> {post.question} </h3>
					{post.options.map(j => (
							<p><input type="checkbox" name="answers" onClick={this.onClick} value={j} /> {j}  </p>
						))}
					
				</div>
			
				))
	  				
	  		return postItems
	 }

    render() {

		return (
			<React.Fragment>
			<div>
				<h1>QUIZ</h1>
				<form onSubmit = {this.onSubmit}>
				{this.postItem()}
				<input type="submit"  />
				</form>  
			</div>
			<h1>Your score is {this.state.score}</h1>
			</React.Fragment>
			
			)
		}

}


export default Quiz;