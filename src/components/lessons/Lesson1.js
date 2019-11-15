import React from 'react';
import {Link} from "react-router-dom";

export default function Lesson1() {
    return (
        <div>
            {/* LESSON TITLE & BODY */}
            <div className="lesson">
                <div className="title">
                    Lesson 1: An Introduction, and the ABCs
                </div>

                <div className="body">
                    <p><em>Regular expressions</em> are extremely useful in extracting information from text such as
                        code, log
                        files, spreadsheets, or even documents. And while there is a lot of theory behind formal
                        languages,
                        the following lessons and examples will explore the more practical uses of regular expressions
                        so
                        that you can use them as quickly as possible.
                    </p>
                    <p>The first thing to recognize when using regular expressions is that <em>everything is essentially
                        a
                        character</em>, and we are writing patterns to match a specific sequence of characters (also
                        known
                        as a string). Most patterns use normal ASCII, which includes letters, digits, punctuation and
                        other
                        symbols on your keyboard like %#$@!, but unicode characters can also be used to match any type
                        of
                        international text.
                    </p>
                    <p>Below are a couple lines of text, notice how the text changes to highlight the matching
                        characters
                        on each line as you type in the input field below. To continue to the next lesson, you will need
                        to use the new syntax and concept introduced in each lesson to write a pattern that matches all
                        the
                        lines provided.
                    </p>
                    <p>Go ahead and try writing a pattern that matches all three rows, <em>it may be as simple as the
                        common
                        letters on each line</em>.
                    </p>
                </div>
            </div>
            {/* PROBLEMS */}
            <div className="exercise">
                <div className="title">
                    Exercise 1: Matching characters
                </div>
                <table className="tasks_table">
                    <tbody>
                    <tr className="problem_header">
                        <td className="task">Task</td>
                        <td className="text">Text</td>
                        <td style={{width: '2.3125em'}}>&nbsp;</td>
                    </tr>
                    <tr className="problem">
                        <td className="task">match</td>
                        <td className="text">abcdefg</td>
                        <td className="result"><img src="/cs/images/task_default.png" alt="To be completed"/></td>
                    </tr>
                    <tr className="problem">
                        <td className="task">match</td>
                        <td className="text">abcde</td>
                        <td className="result"><img src="/cs/images/task_default.png" alt="To be completed"/></td>
                    </tr>
                    <tr className="problem">
                        <td className="task">match</td>
                        <td className="text">abc</td>
                        <td className="result"><img src="/cs/images/task_default.png" alt="To be completed"/></td>
                    </tr>
                    </tbody>
                </table>

                <div className="input_and_continue row" style={{ margin: 0 }}>
                    <form action="/lesson/letters_and_digits" method="get">
                        <input className="exercise_input_field col-xs-12 col-sm-9 col-md-9" type="text"
                               autoCapitalize="off" autoComplete="off" autoCorrect="off" spellCheck="false"
                               placeholder="Type your pattern"/>
                        <input className="continue disabled col-xs-12 col-sm-3 col-md-3" disabled type="submit"
                               defaultValue="Continue ›"/>
                    </form>
                </div>

                <div className="row" style={{ margin: 0 }}>
                    <div className="solution col-xs-12">
                        <table>
                            <tbody>
                            <tr>
                                <td className="title">Solution</td>
                                <td>
                                    <p>Try typing the first three characters
                                        <a className="editor_val" href="#">abc</a> to see them match all the lines.
                                    </p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="solution_hint">
                    Solve the above task to continue on to the next problem, or read the
                    <a className="show_solution_button" href="#"> Solution</a>.
                </div>
            </div>
            {/* FOOTER */}
            <div className="footer col-xs-12 col-sm-12 col-md-6">
                Next – <Link to="/lesson/letters_and_digits" title="Lesson 1½: The 123s">Lesson 1½: The 123s</Link><br/>
            </div>

            <div className="footer ralign col-xs-12 col-md-6">
                Find RegexOne useful? Please consider <br/>
                <a className="paypal_donation_button" href="#" title="Paypal donation">Donating ($4) via Paypal</a> to
                support our site.
            </div>
        </div>
    );
}