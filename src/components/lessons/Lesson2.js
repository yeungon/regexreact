import React from 'react';
import {Link} from "react-router-dom";

export default function Lesson2(){

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
						<input className="exercise_input_field col-xs-12 col-sm-9 col-md-9" type="text" autoCapitalize="off" autoComplete="off" autoCorrect="off" spellCheck="false" placeholder="Type your pattern" />
						<input className="continue disabled col-xs-12 col-sm-3 col-md-3" disabled type="submit" defaultValue="Continue ›" />
					</form>
					</div>
					<div className="row" style={{margin: 0}}>
					<div className="solution col-xs-12">
						<table>
						<tbody><tr>
							<td className="title">Solution</td>
							<td><p>Try typing the common numbers <a className="editor_val" href="#">123</a> from all the lines to see 
								them match.</p></td>
							</tr>
						</tbody></table>
					</div>
					</div>
					<div className="solution_hint">
					Solve the above task to continue on to the next problem, or read the <a className="show_solution_button" href="#">Solution</a>.
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