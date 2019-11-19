import React, {Component} from 'react';

import {Link} from "react-router-dom";

export default class Lesson2 extends Component{

	constructor(props) {
        super(props);

        this.state = {
            inputData: "",
			isDisplay: false,
			continueButton : "disabled",
			isDisabled: true,
			matchData1: "abc",                
			matchData2: "abcde", 
			matchData3: "abcdefg", 
			matchDataDisplay1: "abc",
			matchDataDisplay2: "abcde",
			matchDataDisplay3: "abcefg",
			taskImageDefault: "/cs/images/task_default.png",
			taskImageShow1: "/cs/images/task_default.png",
			taskImageShow2: "/cs/images/task_default.png",
			taskImageShow3: "/cs/images/task_default.png",
			taskIncompleted: "/cs/images/task_incomplete.png",
			taskComplete: "/cs/images/task_complete.png"
		};

		this.handleShowSolution = this.handleShowSolution.bind(this);
		this.handleAddSolution = this.handleAddSolution.bind(this);
		this.handleChange = this.handleChange.bind(this);
    }
    
	handleShowSolution(e){

		e.preventDefault();

		this.setState({
			isDisplay: true,
        });

	}

	// https://stackoverflow.com/questions/30146105/react-input-defaultvalue-doesnt-update-with-state
	handleChange(event) {

		this.setState({inputData: event.target.value});
	}

	handleAddSolution(e){
		e.preventDefault();

		let inputUpdate = this.state.inputData;

		console.log(inputUpdate);

		if(inputUpdate !== null){
			inputUpdate = 123;
		}
		
		console.log("cập nhật", inputUpdate);

		this.setState({
			inputData: inputUpdate,
        });
		
	}

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
						<td className="text">abc123xyz</td>
						<td className="result"><img src="/cs/images/task_default.png" alt="To be completed" /></td>
						</tr>
						<tr className="problem">
						<td className="task">match</td>
						<td className="text">define "123"</td>
						<td className="result"><img src="/cs/images/task_default.png" alt="To be completed" /></td>
						</tr>
						<tr className="problem">
						<td className="task">match</td>
						<td className="text">var g = 123;</td>
						<td className="result"><img src="/cs/images/task_default.png" alt="To be completed" /></td>
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
							onChange={this.handleChange}
							/>
						<input className="continue disabled col-xs-12 col-sm-3 col-md-3" disabled type="submit" defaultValue="Continue ›" />
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
				Next – <a href="/lesson/wildcards_dot" title="Lesson 2: The Dot">Lesson 2: The Dot</a><br />
				Previous –    <Link to="/lesson/introduction_abcs" title="Lesson 1: An Introduction, and the ABCs">
								Lesson 1: An Introduction, and the ABCs                
                			  </Link>
				</div>

			</div>
		);

	}
}