import React, {Component} from 'react';

import {Link} from "react-router-dom";

import Parser from 'html-react-parser';

export default class Lesson2 extends Component{

	constructor(props) {
		super(props);
		this.state = {
			inputData: "",
			isDisplay: false,
			continueButton : "disabled",
			isDisabled: true,
			matchData1: "abc123xyz",                
			matchData2: 'define "123"', 
			matchData3: "var g = 123", 
			matchDataDisplay1: "abc123xyz",
			matchDataDisplay2: 'define "123"',
			matchDataDisplay3: "var g = 123",
			taskImageDefault: "/cs/images/task_default.png",
			taskImageShow1: "/cs/images/task_default.png",
			taskImageShow2: "/cs/images/task_default.png",
			taskImageShow3: "/cs/images/task_default.png",
			taskIncompleted: "/cs/images/task_incomplete.png",
			taskComplete: "/cs/images/task_complete.png",			
		};

		// Bind or not bind, it is optional
		this.handleShowSolution = this.handleShowSolution.bind(this);		
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleMatchDataAll = this.handleMatchDataAll.bind(this);
		this.handleMatchDataCheck = this.handleMatchDataCheck.bind(this);
	}
	
	handleShowSolution(e){

		e.preventDefault();

		this.setState({
			isDisplay: true,

		});

	}

	// No need to bind when using arrow
	handleAddSolution = async (e)=>{

		e.preventDefault();

		let inputUpdate = 123;		
		await this.setState({
			inputData: inputUpdate,
			continueButton: 'enabled',
			isDisabled: false,
		});

		this.handleInputRun();        
		
	}
	
	handleInputChange = async function(e) {
		// https://stackoverflow.com/questions/33088482/onchange-in-react-doesnt-capture-the-last-character-of-text
		// setState is async --> need use async/promise
		let inputByUser = e.target.value;

		await this.setState({
			inputData: inputByUser
		});

		// Reset when the input is empty
		if (0 === inputByUser.length) {
			await this.setState({
				taskImageShow1: this.state.taskImageDefault,
				taskImageShow2: this.state.taskImageDefault,
				taskImageShow3: this.state.taskImageDefault,
				continueButton: 'disabled',
				isDisabled: true,
				matchDataDisplay1: this.state.matchData1,
				matchDataDisplay2: this.state.matchData2,				
				matchDataDisplay3: this.state. matchData3,
			});

			return;
		}		
		
		this.handleInputRun();			
		
	}

	handleInputRun = ()=>{

		try {
			this.handleMatchDataCheck();
		}
		catch(e) {

			console.log(e.message);
		}	

	}

	handleMatchDataCheck(){

		const a = this.handleMatchDataAll(this.state.matchData1, '1', this.state.taskIncompleted)

		const b = this.handleMatchDataAll(this.state.matchData2, '2',  this.state.taskIncompleted)

		const c = this.handleMatchDataAll(this.state.matchData3, '3', this.state.taskIncompleted)

		if(a && b &&c){
			this.setState({				
				continueButton: 'enabled',
				isDisabled: false,
			});
		}else{
			this.setState({				
				continueButton: 'disabled',
				isDisabled: true,
			});
		}

	}
	
	handleMatchDataAll(matchData, number, taskIncompleted){
		
		let matchDataDisplay= 'matchDataDisplay' + number;

		let taskImageShow = 'taskImageShow' + number;

		const regex = new RegExp(this.state.inputData);

		let result = regex.test(matchData);                              

		if (result === true) {
			
			this.setState({

				[taskImageShow]: this.state.taskComplete,
				
			});

			let matchString = matchData.match(regex);            
			
			if (matchString !== null) {
				
				this.setState({
                	// pass state as a string in a []: `matchDataDisplay` is a string
                	[matchDataDisplay]: matchData.replace(regex, `<span class="match_succeeded">${matchString[0]}</span>`),
                });

				console.log(matchString[0]);

			} else {

				console.log("Don't match");

			}

			return result;

		} else {

			this.setState({

				[taskImageShow]: taskIncompleted,

				[matchDataDisplay]: matchData,
			});
		}
	};

	render(){
		
		return (
			<div>
			<div>
		{/* LESSON TITLE & BODY */}
		<div className="lesson">
		<div className="title">
		Lesson 1½: The 123s
		</div>
		<div className="body">
		<p>Characters include normal letters, but digits as well.  In fact, numbers 0-9 are also just 
		characters and if you look at an <a href="http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters" title="ascii table">ASCII table</a>, 
		they are listed sequentially.</p>
		<p>Over the various lessons, you will be introduced to a number of special metacharacters used in 
		regular expressions that can be used to match a specific type of character.  In this case, the 
		character <em>\d</em> can be used in place of <em>any digit from 0 to 9</em>.  The preceding slash 
		distinguishes it from the simple <em>d</em> character and indicates that it is a metacharacter.</p>
		<p>Below are a few more lines of text containing digits.  Try writing a pattern that matches 
		all the digits in the strings below, and notice how your pattern matches <em>anywhere within the 
		string</em>, not just starting at the first character.  We will learn how to control this in a later 
		lesson.</p>
		</div>
		</div>
	{/* PROBLEMS */}
	<div className="exercise">
	<div className="title">
	Exercise 1½: Matching digits
	</div>
	<table className="tasks_table">
	<tbody><tr className="problem_header">
	<td className="task">Task</td>
	<td className="text">Text</td>
	<td style={{width: '2.3125em'}}>&nbsp;</td>
	</tr>
	<tr className="problem">
	<td className="task">match</td>
	<td className='text'>{Parser(this.state.matchDataDisplay1)}</td>
	<td className="result succeeded"><img src={this.state.taskImageShow1} alt='To be completed'/></td>
	</tr>
	<tr className="problem">
	<td className="task">match</td>
	<td className='text'>{Parser(this.state.matchDataDisplay2)}</td>
	<td className="result succeeded"><img src={this.state.taskImageShow2} alt='To be completed'/></td>
	</tr>
	<tr className="problem">
	<td className="task">match</td>						
	<td className='text'>{Parser(this.state.matchDataDisplay3)}</td>
	<td className="result succeeded"><img src={this.state.taskImageShow3} alt='To be completed'/></td>
	</tr>
	</tbody></table>
	<div className="input_and_continue row" style={{margin: 0}}>
	<form action="/lesson/wildcards_dot" method="get">
	<input 
	className="exercise_input_field col-xs-12 col-sm-9 col-md-9" 
	type="text" 
	autoCapitalize="off" 
	autoComplete="off" 
	autoCorrect="off" 
	spellCheck="false" 
	placeholder="Type your pattern" 
	value={this.state.inputData}
	onChange={this.handleInputChange}
	/>
	
	<Link to="/lesson/wildcards_dot" >
	<input 
	className={`continue col-xs-12 col-sm-3 col-md-3 ${this.state.continueButton}`} 
	disabled={this.state.isDisabled}
	type="submit" 
	value="Continue ›" />               
	</Link>

	</form>
	</div>
	<div className="row" style={{margin: 0}}>					
	<div className='solution col-xs-12' style={{display: this.state.isDisplay ? 'block' : 'none'}}>
	<table>
	<tbody><tr>
	<td className="title">Solution</td>
	<td><p>Try typing the common numbers <a onClick = {this.handleAddSolution} className="editor_val" href="#">123</a> from all the lines to see 
	them match.</p></td>
	</tr>
	</tbody></table>
	</div>
	</div>
	<div className="solution_hint">
	Solve the above task to continue on to the next problem, or read the <a onClick = {this.handleShowSolution} className="show_solution_button" href="#">Solution</a>.
	</div>
	</div>
	</div>

{/* FOOTER */}
<div className="footer col-xs-12 col-sm-12 col-md-6">
Next – <Link to="/lesson/wildcards_dot" title="Lesson 1: An Introduction, and the ABCs">
Lesson 2: The Dot               
</Link><br />

Previous –    <Link to="/lesson/introduction_abcs" title="Lesson 1: An Introduction, and the ABCs">
Lesson 1: An Introduction, and the ABCs                
</Link>
</div>

</div>
);

}
}