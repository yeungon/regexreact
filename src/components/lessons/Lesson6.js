// This component is written by Vuong
// Redux structure: https://medium.com/front-end-weekly/the-three-pigs-how-to-structure-react-redux-application-67f5e3c68392
//https://medium.com/better-programming/my-awesome-react-redux-structure-6044e5007e22
import React, { Component } from "react";
import { connect } from "react-redux";

class Lesson6 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div>
                    {/* LESSON TITLE & BODY */}
                    <div className="lesson">
                        <div className="title">
                            Lesson 5: Character ranges {this.props.name}
                        </div>
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
                                    <td className="text">Ana</td>
                                    <td className="result">
                                        <img
                                            src="/cs/images/task_default.png"
                                            alt="To be completed"
                                        />
                                    </td>
                                </tr>
                                <tr className="problem">
                                    <td className="task">match</td>
                                    <td className="text">Bob</td>
                                    <td className="result">
                                        <img
                                            src="/cs/images/task_default.png"
                                            alt="To be completed"
                                        />
                                    </td>
                                </tr>
                                <tr className="problem">
                                    <td className="task">match</td>
                                    <td className="text">Cpc</td>
                                    <td className="result">
                                        <img
                                            src="/cs/images/task_default.png"
                                            alt="To be completed"
                                        />
                                    </td>
                                </tr>
                                <tr className="problem">
                                    <td className="task">skip</td>
                                    <td className="text">aax</td>
                                    <td className="result">
                                        <img
                                            src="/cs/images/task_default.png"
                                            alt="To be completed"
                                        />
                                    </td>
                                </tr>
                                <tr className="problem">
                                    <td className="task">skip</td>
                                    <td className="text">bby</td>
                                    <td className="result">
                                        <img
                                            src="/cs/images/task_default.png"
                                            alt="To be completed"
                                        />
                                    </td>
                                </tr>
                                <tr className="problem">
                                    <td className="task">skip</td>
                                    <td className="text">ccz</td>
                                    <td className="result">
                                        <img
                                            src="/cs/images/task_default.png"
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
                                />
                                <input
                                    className="continue disabled col-xs-12 col-sm-3 col-md-3"
                                    disabled
                                    type="submit"
                                    defaultValue="Continue ›"
                                />
                            </form>
                        </div>
                        <div className="row" style={{ margin: 0 }}>
                            <div className="solution col-xs-12">
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
                            <a className="show_solution_button" href="#">
                                Solution
                            </a>
                            .
                        </div>
                    </div>
                    {/* FOOTER */}
                    <div className="footer col-xs-12 col-sm-12 col-md-6">
                        Next –{" "}
                        <a
                            href="/lesson/repeating_characters"
                            title="Lesson 6: Catching some zzz's"
                        >
                            Lesson 6: Catching some zzz's
                        </a>
                        <br />
                        Previous –{" "}
                        <a
                            href="/lesson/excluding_characters"
                            title="Lesson 4: Excluding specific characters"
                        >
                            Lesson 4: Excluding specific characters
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state, ownProps) => {
    return {
        // name will be called using props.name of this app.js
        name: state.name
    };
};

export default connect(mapStatetoProps)(Lesson6);
