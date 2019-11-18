import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Parser from 'html-react-parser';

export default class Lesson1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputData: '',
            isDisplay: false,
            continueButton: 'disabled',
            isDisabled: true,
            matchData1: 'abc',
            matchData2: 'abcde',
            matchData3: 'abcdefg',
            matchDataDisplay1: 'abc',
            matchDataDisplay2: 'abcde',
            matchDataDisplay3: 'abcefg',
            taskImageDefault: 'https://regexone.com/cs/images/task_default.png',
            taskImageShow1: 'https://regexone.com/cs/images/task_default.png',
            taskImageShow2: 'https://regexone.com/cs/images/task_default.png',
            taskImageShow3: 'https://regexone.com/cs/images/task_default.png',
            taskIncompleted: 'https://regexone.com/cs/images/task_incomplete.png',
            taskComplete: 'https://regexone.com/cs/images/task_complete.png'
        };
    }

    handleMatchData1 = (inputValue, state = this.state) => {
        const {matchData1, taskComplete, taskIncompleted} = state;
        const regex = new RegExp(inputValue);

        let result = regex.test(matchData1);
        if (result === true) {
            this.setState({
                taskImageShow1: taskComplete,
            });

            let matchString = matchData1.match(regex);

            if (matchString !== null) {
                this.setState({
                    matchDataDisplay1: matchData1.replace(regex, `<span class="match_succeeded">${matchString[0]}</span>`),
                });

                console.log(matchString[0]);
            } else {
                console.log("Don't match");
            }

            return result;
        } else {
            this.setState({
                taskImageShow1: taskIncompleted,
                matchDataDisplay1: matchData1,
            });
        }
    };

    handleMatchData2 = (inputValue, state = this.state) => {
        const {matchData2, taskComplete, taskIncompleted} = state;
        const regex = new RegExp(inputValue);

        let result = regex.test(matchData2);
        if (result === true) {
            this.setState({
                taskImageShow2: taskComplete,
            });

            let matchString = matchData2.match(regex);

            if (matchString !== null) {
                this.setState({
                    matchDataDisplay2: matchData2.replace(regex, `<span class="match_succeeded">${matchString[0]}</span>`),
                });

                console.log(matchString[0]);
            } else {
                console.log("Don't match");
            }

            return result;
        } else {
            this.setState({
                taskImageShow2: taskIncompleted,
                matchDataDisplay2: matchData2,
            });
        }
    };

    handleMatchData3 = (inputValue, state = this.state) => {
        const {matchData3, taskComplete, taskIncompleted} = state;
        const regex = new RegExp(inputValue);

        let result = regex.test(matchData3);
        if (result === true) {
            this.setState({
                taskImageShow3: taskComplete,
            });

            let matchString = matchData3.match(regex);

            if (matchString !== null) {
                this.setState({
                    matchDataDisplay3: matchData3.replace(regex, `<span class="match_succeeded">${matchString[0]}</span>`),
                });

                console.log(matchString[0]);
            } else {
                console.log("Don't match");
            }

            return result;
        } else {
            this.setState({
                taskImageShow3: taskIncompleted,
                matchDataDisplay3: matchData3,
            });
        }
    };

    handleShowSolution = (e) => {
        e.preventDefault();

        this.setState({
            isDisplay: true,
        });
    };

    enableContinueButton = () => {
        this.setState({
            continueButton: 'enabled',
            isDisabled: false,
        });
    };

    disableContinueButton = () => {
        this.setState({
            continueButton: 'disabled',
            isDisabled: true,
        });
    };

    handleAddSolution = (e) => {
        e.preventDefault();

        this.setState({
            inputData: 'abc',
            continueButton: 'enabled',
            isDisabled: false,
        });

        this.handleMatchData(this.state.inputData);
    };

    handleMatchData = (inputValue) => {
        let result1 = this.handleMatchData1(inputValue);
        let result2 = this.handleMatchData2(inputValue);
        let result3 = this.handleMatchData3(inputValue);

        if (result1 && result2 && result3) {
            this.enableContinueButton();
        } else {
            this.disableContinueButton();
        }
    };

    handleInputData = (e) => {
        const {taskImageDefault, matchData1, matchData2, matchData3} = this.state;
        const target = e.target;
        const inputValue = target.value;

        this.setState({
            inputData: inputValue,
        });

        if (0 === inputValue.length) {
            this.setState({
                taskImageShow1: taskImageDefault,
                taskImageShow2: taskImageDefault,
                taskImageShow3: taskImageDefault,
                continueButton: 'disabled',
                isDisabled: true,
                matchDataDisplay1: matchData1,
                matchDataDisplay2: matchData2,
                matchDataDisplay3: matchData3,
            });

            return;
        }

        this.handleMatchData(inputValue);
    };

    render() {
        const {
            taskImageShow1,
            taskImageShow2,
            taskImageShow3,
            matchDataDisplay1,
            matchDataDisplay2,
            matchDataDisplay3,
            isDisplay,
            continueButton,
            isDisabled,
            inputData,
        } = this.state;

        return (
            <div>
                {/* LESSON TITLE & BODY */}
                <div className='lesson'>
                    <div className='title'>
                        Lesson 1: An Introduction, and the ABCs
                    </div>

                    <div className='body'>
                        <p><em>Regular expressions</em> are extremely useful in extracting information from text such as
                            code, log
                            files, spreadsheets, or even documents. And while there is a lot of theory behind formal
                            languages,
                            the following lessons and examples will explore the more practical uses of regular
                            expressions
                            so
                            that you can use them as quickly as possible.
                        </p>
                        <p>The first thing to recognize when using regular expressions is that <em>everything is
                            essentially
                            a
                            character</em>, and we are writing patterns to match a specific sequence of characters (also
                            known
                            as a string). Most patterns use normal ASCII, which includes letters, digits, punctuation
                            and
                            other
                            symbols on your keyboard like %#$@!, but unicode characters can also be used to match any
                            type
                            of
                            international text.
                        </p>
                        <p>Below are a couple lines of text, notice how the text changes to highlight the matching
                            characters
                            on each line as you type in the input field below. To continue to the next lesson, you will
                            need
                            to use the new syntax and concept introduced in each lesson to write a pattern that matches
                            all
                            the
                            lines provided.
                        </p>
                        <p>Go ahead and try writing a pattern that matches all three rows, <em>it may be as simple as
                            the
                            common
                            letters on each line</em>.
                        </p>
                    </div>
                </div>
                {/* PROBLEMS */}
                <div className='exercise'>
                    <div className='title'>
                        Exercise 1: Matching characters
                    </div>

                    <table className='tasks_table'>
                        <tbody>
                        <tr className='problem_header'>
                            <td className='task'>Task</td>
                            <td className='text'>Text</td>
                            <td style={{width: '2.3125em'}}>&nbsp;</td>
                        </tr>

                        <tr className='problem'>
                            <td className='task'>match</td>
                            <td className='text'>{Parser(matchDataDisplay3)}</td>
                            <td className="result succeeded"><img src={taskImageShow3} alt='To be completed'/></td>
                        </tr>

                        <tr className='problem'>
                            <td className='task'>match</td>
                            <td className='text'>{Parser(matchDataDisplay2)}</td>
                            <td className="result succeeded"><img src={taskImageShow2} alt='To be completed'/></td>
                        </tr>

                        <tr className='problem'>
                            <td className='task'>match</td>
                            <td className='text'>{Parser(matchDataDisplay1)}</td>
                            <td className="result succeeded"><img src={taskImageShow1} alt='To be completed'/></td>
                        </tr>
                        </tbody>
                    </table>

                    <div className='input_and_continue row' style={{margin: 0}}>
                        <input className='exercise_input_field col-xs-12 col-sm-9 col-md-9' type='text'
                               autoCapitalize='off' autoComplete='off' autoCorrect='off' spellCheck='false'
                               placeholder='Type your pattern'
                               defaultValue={inputData}
                               onKeyUp={this.handleInputData}
                        />

                        <Link to="/lesson/letters_and_digits">
                            <input className={`continue col-xs-12 col-sm-3 col-md-3 ${continueButton}`} type='submit'
                                   value="Continue ›"
                                   disabled={isDisabled}
                            />
                        </Link>
                    </div>

                    <div className='row' style={{margin: 0}}>
                        <div className='solution col-xs-12' style={{display: isDisplay ? 'block' : 'none'}}>
                            <table>
                                <tbody>
                                <tr>
                                    <td className='title'>Solution</td>
                                    <td>
                                        <p>
                                            Try typing the first three characters <a className='editor_val' href='#'
                                                                                     onClick={this.handleAddSolution}>abc</a> to
                                            see them match all the lines.
                                        </p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='solution_hint'>
                        Solve the above task to continue on to the next problem, or read the
                        <a className='show_solution_button' href="#" onClick={this.handleShowSolution}> Solution</a>.
                    </div>
                </div>
                {/* FOOTER */}
                <div className='footer col-xs-12 col-sm-12 col-md-6'>
                    Next – <Link to='/lesson/letters_and_digits' title='Lesson 1½: The 123s'>Lesson 1½: The
                    123s</Link><br/>
                </div>

                <div className='footer ralign col-xs-12 col-md-6'>
                    Find RegexOne useful? Please consider <br/>
                    <a className='paypal_donation_button' href='#' title='Paypal donation'>Donating ($4) via
                        Paypal</a> to
                    support our site.
                </div>
            </div>
        );
    }
}