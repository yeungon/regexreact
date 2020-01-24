// This component is written by Vuong
// Redux structure: https://medium.com/front-end-weekly/the-three-pigs-how-to-structure-react-redux-application-67f5e3c68392
//https://medium.com/better-programming/my-awesome-react-redux-structure-6044e5007e22
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Parser from "html-react-parser";

class Lesson6 extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* LESSON TITLE & BODY */}
                    <div className="lesson">
                        <div className="title">Lesson 5: Character ranges</div>
                        <div className="body">
                            <p>
                                We just learned how to create a pattern that
                                matches or excludes specific characters -- but
                                what if we want to match a character that can be
                                in a sequential range characters? Do we have no
                                choice but to list them all out?
                            </p>
                            <p>
                                Luckily, when using the square bracket notation,
                                there is a shorthand for matching a character in
                                list of <em>sequential characters</em> by using
                                the <em>dash</em> to indicate a character range.
                                For example, the pattern <em>[0-6]</em> will
                                only match any single digit character from zero
                                to six, and nothing else. And likewise,{" "}
                                <em>[^n-p]</em> will only match any single
                                character <em>except</em> for letters n to p.
                            </p>
                            <p>
                                Multiple character ranges can also be used in
                                the same set of brackets, along with individual
                                characters. An example of this is the
                                alphanumeric <em>\w</em> metacharacter which is
                                equivalent to the character range{" "}
                                <em>[A-Za-z0-9_]</em> and often used to match
                                characters in English text.
                            </p>
                            <p>
                                In the exercise below, notice how all the match
                                and skip lines have a pattern, and use the
                                bracket notation to match or skip each character
                                from each line. Be aware that patterns are{" "}
                                <em>case sensitive</em>
                                and <em>a-z differs</em> from <em>A-Z</em> in
                                terms of the characters it matches (lower vs
                                upper case).
                            </p>
                        </div>
                    </div>
                    {/* PROBLEMS */}
                    <div className="exercise">
                        <div className="title">
                            Exercise 5: Matching character ranges
                        </div>
                        <table className="tasks_table">
                            <tbody>
                                <tr className="problem_header">
                                    <td className="task">Task</td>
                                    <td className="text">Text</td>
                                    <td style={{ width: "2.3125em" }}>
                                        &nbsp;
                                    </td>
                                </tr>
                                <tr className="problem">
                                    <td className="task">match</td>
                                    <td className="text">
                                        {Parser(
                                            this.props.l6.matchDataDisplay1
                                        )}
                                    </td>
                                    <td className="result succeeded">
                                        <img
                                            src={this.props.l6.taskImageShow1}
                                            alt="To be completed"
                                        />
                                    </td>
                                </tr>
                                <tr className="problem">
                                    <td className="task">match</td>
                                    <td className="text">
                                        {Parser(
                                            this.props.l6.matchDataDisplay2
                                        )}
                                    </td>
                                    <td className="result succeeded">
                                        <img
                                            src={this.props.l6.taskImageShow2}
                                            alt="To be completed"
                                        />
                                    </td>
                                </tr>
                                <tr className="problem">
                                    <td className="task">match</td>
                                    <td className="text">
                                        {Parser(
                                            this.props.l6.matchDataDisplay3
                                        )}
                                    </td>
                                    <td className="result succeeded">
                                        <img
                                            src={this.props.l6.taskImageShow3}
                                            alt="To be completed"
                                        />
                                    </td>
                                </tr>
                                <tr className="problem">
                                    <td className="task">skip</td>
                                    <td className="text">
                                        {Parser(this.props.l6.skipDataDisplay1)}
                                    </td>
                                    <td className="result">
                                        <img
                                            src={
                                                this.props.l6.taskImageShowSkip1
                                            }
                                            alt="To be completed"
                                        />
                                    </td>
                                </tr>
                                <tr className="problem">
                                    <td className="task">skip</td>
                                    <td className="text">
                                        {Parser(this.props.l6.skipDataDisplay2)}
                                    </td>
                                    <td className="result">
                                        <img
                                            src={
                                                this.props.l6.taskImageShowSkip2
                                            }
                                            alt="To be completed"
                                        />
                                    </td>
                                </tr>
                                <tr className="problem">
                                    <td className="task">skip</td>
                                    <td className="text">
                                        {Parser(this.props.l6.skipDataDisplay3)}
                                    </td>
                                    <td className="result">
                                        <img
                                            src={
                                                this.props.l6.taskImageShowSkip3
                                            }
                                            alt="To be completed"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div
                            className="input_and_continue row"
                            style={{ margin: 0 }}
                        >
                            <form
                                action="/lesson/repeating_characters"
                                method="get"
                            >
                                <input
                                    className="exercise_input_field col-xs-12 col-sm-9 col-md-9"
                                    type="text"
                                    autoCapitalize="off"
                                    autoComplete="off"
                                    autoCorrect="off"
                                    spellCheck="false"
                                    placeholder="Type your pattern"
                                    value={this.props.l6.inputData}
                                    onChange={this.props.handleInputChange}
                                />
                                <Link
                                    to="/lesson/repeating_characters"
                                    title="Lesson 6: Catching some zzz's"
                                >
                                    <input
                                        className={`continue col-xs-12 col-sm-3 col-md-3 ${this.props.l6.continueButton}`}
                                        disabled={this.props.l6.isDisabled}
                                        type="submit"
                                        defaultValue="Continue ›"
                                    />
                                </Link>
                            </form>
                        </div>
                        <div className="row" style={{ margin: 0 }}>
                            <div
                                className="solution col-xs-12"
                                style={{
                                    display: this.props.l6.isDisplay
                                        ? "block"
                                        : "none"
                                }}
                            >
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="title">Solution</td>
                                            <td>
                                                <p>
                                                    All the characters are
                                                    sequential, so you can use
                                                    the different ranges in the
                                                    expression
                                                    <a
                                                        className="editor_val"
                                                        href="#"
                                                        onClick={
                                                            this.props
                                                                .showSolution
                                                        }
                                                    >
                                                        [A-C][n-p][a-c]
                                                    </a>{" "}
                                                    to match only the first
                                                    three lines.
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="solution_hint">
                            Solve the above task to continue on to the next
                            problem, or read the{" "}
                            <a
                                onClick={this.props.show}
                                className="show_solution_button"
                                href="#"
                            >
                                Solution
                            </a>
                            .
                        </div>
                    </div>
                    {/* FOOTER */}
                    <div className="footer col-xs-12 col-sm-12 col-md-6">
                        Next –{" "}
                        <Link
                            to="/lesson/repeating_characters"
                            title="Lesson 6: Catching some zzz's"
                        >
                            Lesson 6: Catching some zzz's
                        </Link>
                        <br />
                        Previous –{" "}
                        <Link
                            to="/lesson/excluding_characters"
                            title="Lesson 4: Excluding specific characters"
                        >
                            Lesson 4: Excluding specific characters
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state, ownProps) => {
    return {
        l6: state.l6
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        show: e => {
            e.preventDefault();
            dispatch({ type: "SHOW_SOLUTION" });
        },

        showSolution: e => {
            e.preventDefault();
            dispatch({ type: "SHOW_SOLUTION_ONE" });
        },
        handleInputChange: e => {
            e.preventDefault();

            let inputByUser = e.target.value;

            dispatch({ type: "HANDLE_INPUT_CHANGE", inputByUser: inputByUser });
        }
    };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Lesson6);
