// This component is written by Vuong
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Parser from "html-react-parser";

export default function Lesson4() {
  // Hook State does not merge as Class-based State --> Need to create seperated state and respective function to manipulate data,
  // otherwise the one-for-all state will be heavy when updating
  const [isDisplay, setStateDisply] = useState(false);
  const [isDisabled, setStateDisabled] = useState(true);
  const [inputData, setStateInputData] = useState("");

  const [continueButton, setStateContinueButton] = useState("disabled");
  const [currentSkipTextData] = useState({
    skipData1: "dan",
    skipData2: "ran",
    skipData3: "pan"
  });

  const [currentSkipTextDataSkipOne, setStateCurrentSkipTextDataOne] = useState(
    {
      skipDataDisplay1: "dan"
    }
  );

  const [currentSkipTextDataSkipTwo, setStateCurrentSkipTextDataTwo] = useState(
    {
      skipDataDisplay2: "ran"
    }
  );

  const [
    currentSkipTextDataSkipThree,
    setStateCurrentSkipTextDataThree
  ] = useState({
    skipDataDisplay3: "pan"
  });

  const [currentTextData] = useState({
    matchData1: "can",
    matchData2: "man",
    matchData3: "fan"
  });

  const [currentTextDataMatchOne, setStateCurrentTextDataMatchOne] = useState({
    matchDataDisplay1: "can"
  });

  const [currentTextDataMatchTwo, setStateCurrentTextDataMatchTwo] = useState({
    matchDataDisplay2: "man"
  });

  const [
    currentTextDataMatchThree,
    setStateCurrentTextDataMatchThree
  ] = useState({
    matchDataDisplay3: "fan"
  });

  const [currentImageOne, setStateCurrentImageOne] = useState({
    taskImageShow1: "/cs/images/task_default.png"
  });

  const [currentImageTwo, setStateCurrentImageTwo] = useState({
    taskImageShow2: "/cs/images/task_default.png"
  });

  const [currentImageThree, setStateCurrentImageThree] = useState({
    taskImageShow3: "/cs/images/task_default.png"
  });

  const [currentImageSkipOne, setStateCurrentImageSkipOne] = useState({
    taskImageShowSkip1: "/cs/images/task_default.png"
  });

  const [currentImageSkipTwo, setStateCurrentImageSkipTwo] = useState({
    taskImageShowSkip2: "/cs/images/task_default.png"
  });

  const [currentImageSkipThree, setStateCurrentImageSkipThree] = useState({
    taskImageShowSkip3: "/cs/images/task_default.png"
  });

  const [currentImageResult] = useState({
    taskImageDefault: "/cs/images/task_default.png",
    taskIncompleted: "/cs/images/task_incomplete.png",
    taskComplete: "/cs/images/task_complete.png"
  });
  //Arrow function
  const handleShowSolution = e => {
    e.preventDefault();
    setStateDisply({
      isDisplay: true
    });
  };
  //Normal function, using Hook --> no need to bind as class-based component
  function handleAddSolutionOne(e) {
    e.preventDefault();
    setStateInputData("[cmf]an");
    setStateContinueButton("enabled");
    handleInputRun("[cmf]an");
  }
  const handleAddSolutionTwo = e => {
    e.preventDefault();
    setStateInputData("[^drp]an");
    setStateContinueButton("enabled");
    handleInputRun("[^drp]an");
  };

  function handleInputChange(e) {
    let inputByUser = e.target.value;

    // async/await does not work with Hook setState as Class-based
    setStateInputData(inputByUser);

    if (0 === inputByUser.length) {
      setStateDisabled({
        isDisabled: true
      });

      setStateCurrentImageOne({
        taskImageShow1: currentImageResult.taskImageDefault
      });

      setStateCurrentTextDataMatchOne({
        matchDataDisplay1: currentTextData.matchData1
      });

      setStateCurrentImageTwo({
        taskImageShow2: currentImageResult.taskImageDefault
      });

      setStateCurrentTextDataMatchTwo({
        matchDataDisplay2: currentTextData.matchData2
      });

      setStateCurrentImageThree({
        taskImageShow3: currentImageResult.taskImageDefault
      });

      setStateCurrentTextDataMatchThree({
        matchDataDisplay3: currentTextData.matchData3
      });

      // Reset the Skip data

      setStateCurrentSkipTextDataOne({
        skipDataDisplay1: currentSkipTextData.skipData1
      });

      setStateCurrentImageSkipOne({
        taskImageShowSkip1: currentImageResult.taskImageDefault
      });

      setStateCurrentSkipTextDataTwo({
        skipDataDisplay2: currentSkipTextData.skipData2
      });

      setStateCurrentImageSkipTwo({
        taskImageShowSkip2: currentImageResult.taskImageDefault
      });

      setStateCurrentSkipTextDataThree({
        skipDataDisplay3: currentSkipTextData.skipData3
      });

      setStateCurrentImageSkipThree({
        taskImageShowSkip3: currentImageResult.taskImageDefault
      });

      setStateContinueButton("disabled");

      return;
    }

    handleInputRun(inputByUser);
  }

  function handleInputRun(input) {
    try {
      handleMatchDataCheck(input);
    } catch (e) {
      console.log(e.message);
    }
  }

  function handleMatchDataCheck(input) {
    const a = MatchOne(input);
    const b = MatchTwo(input);
    const c = MatchThree(input);

    const d = SkipOne(input);
    const e = SkipTwo(input);
    const f = SkipThree(input);

    if (a && b && c && !d && !e && !f) {
      setStateContinueButton("enabled");

      setStateDisabled(false);
    } else {
      setStateContinueButton("disabled");

      setStateDisabled(true);
    }
  }

  const MatchOne = input => {
    const regex = new RegExp(input);

    let result = regex.test(currentTextData.matchData1);

    if (result === true) {
      setStateCurrentImageOne({
        taskImageShow1: currentImageResult.taskComplete
      });

      let matchString = currentTextData.matchData1.match(regex);

      if (matchString !== null) {
        setStateCurrentTextDataMatchOne({
          matchDataDisplay1: currentTextData.matchData1.replace(
            regex,
            `<span class="match_succeeded">${matchString[0]}</span>`
          )
        });
      } else {
        console.log("Don't match");
      }

      return result;
    } else {
      setStateCurrentImageOne({
        taskImageShow1: currentImageResult.taskIncompleted
      });

      console.log(currentImageOne.taskImageShow1);

      setStateCurrentTextDataMatchOne({
        matchDataDisplay1: currentTextData.matchData1
      });
    }
  };

  const MatchTwo = input => {
    const regex = new RegExp(input);

    let result = regex.test(currentTextData.matchData2);

    if (result === true) {
      setStateCurrentImageTwo({
        taskImageShow2: currentImageResult.taskComplete
      });

      let matchString = currentTextData.matchData2.match(regex);

      if (matchString !== null) {
        setStateCurrentTextDataMatchTwo({
          matchDataDisplay2: currentTextData.matchData2.replace(
            regex,
            `<span class="match_succeeded">${matchString[0]}</span>`
          )
        });
      } else {
        console.log("Don't match");
      }
      return result;
    } else {
      setStateCurrentImageTwo({
        taskImageShow2: currentImageResult.taskIncompleted
      });

      setStateCurrentTextDataMatchTwo({
        matchDataDisplay2: currentTextData.matchData2
      });
    }
  };

  const MatchThree = input => {
    const regex = new RegExp(input);

    let result = regex.test(currentTextData.matchData3);

    if (result === true) {
      setStateCurrentImageThree({
        taskImageShow3: currentImageResult.taskComplete
      });

      let matchString = currentTextData.matchData3.match(regex);

      if (matchString !== null) {
        setStateCurrentTextDataMatchThree({
          matchDataDisplay3: currentTextData.matchData3.replace(
            regex,
            `<span class="match_succeeded">${matchString[0]}</span>`
          )
        });
      } else {
        console.log("Don't match");
      }
      return result;
    } else {
      setStateCurrentImageThree({
        taskImageShow3: currentImageResult.taskIncompleted
      });

      setStateCurrentTextDataMatchThree({
        matchDataDisplay3: currentTextData.matchData3
      });
    }
  };

  const SkipOne = input => {
    const regex = new RegExp(input);

    let result = regex.test(currentSkipTextData.skipData1);

    if (result === true) {
      // Keep other element in the object using spread operator ... as the new state will be WHOLY UPDATED with Hook
      setStateCurrentImageSkipOne({
        taskImageShowSkip1: currentImageResult.taskIncompleted
      });

      let matchString = currentSkipTextData.skipData1.match(regex);

      if (matchString !== null) {
        setStateCurrentSkipTextDataOne({
          skipDataDisplay1: currentSkipTextData.skipData1.replace(
            regex,
            `<span class="match_failed">${matchString[0]}</span>`
          )
        });
      } else {
        console.log("Don't match");
      }

      return result;
    } else {
      setStateCurrentImageSkipOne({
        taskImageShowSkip1: currentImageResult.taskImageDefault
      });

      setStateCurrentSkipTextDataOne({
        skipDataDisplay1: currentSkipTextData.skipData1
      });
    }
  };

  const SkipTwo = input => {
    const regex = new RegExp(input);

    let result = regex.test(currentSkipTextData.skipData2);

    if (result === true) {
      // Keep other element in the object using spread operator ... as the new state will be WHOLY UPDATED with Hook
      setStateCurrentImageSkipTwo({
        taskImageShowSkip2: currentImageResult.taskIncompleted
      });

      let matchString = currentSkipTextData.skipData2.match(regex);

      if (matchString !== null) {
        setStateCurrentSkipTextDataTwo({
          skipDataDisplay2: currentSkipTextData.skipData2.replace(
            regex,
            `<span class="match_failed">${matchString[0]}</span>`
          )
        });
      } else {
        console.log("Don't match");
      }

      return result;
    } else {
      setStateCurrentImageSkipTwo({
        taskImageShowSkip2: currentImageResult.taskImageDefault
      });

      setStateCurrentSkipTextDataTwo({
        skipDataDisplay2: currentSkipTextData.skipData2
      });
    }
  };

  const SkipThree = input => {
    const regex = new RegExp(input);

    let result = regex.test(currentSkipTextData.skipData3);

    if (result === true) {
      // Keep other element in the object using spread operator ... as the new state will be WHOLY UPDATED with Hook
      setStateCurrentImageSkipThree({
        taskImageShowSkip3: currentImageResult.taskIncompleted
      });

      let matchString = currentSkipTextData.skipData3.match(regex);

      if (matchString !== null) {
        setStateCurrentSkipTextDataThree({
          skipDataDisplay3: currentSkipTextData.skipData3.replace(
            regex,
            `<span class="match_failed">${matchString[0]}</span>`
          )
        });
      } else {
        console.log("Don't match");
      }

      return result;
    } else {
      setStateCurrentImageSkipThree({
        taskImageShowSkip3: currentImageResult.taskImageDefault
      });

      setStateCurrentSkipTextDataThree({
        skipDataDisplay3: currentSkipTextData.skipData3
      });
    }
  };

  return (
    <div>
      <div>
        {/* LESSON TITLE & BODY */}
        <div className="lesson">
          <div className="title">Lesson 3: Matching specific characters </div>
          <div className="body">
            <p>
              The dot metacharacter from the last lesson is pretty powerful, but
              sometimes <em>too</em> powerful. If we are matching phone numbers
              for example, we don't want to validate the letters "(abc)
              def-ghij" as being a valid number!
            </p>
            <p>
              There is a method for <em>matching specific characters</em> using
              regular expressions, by defining them inside{" "}
              <em>square brackets</em>. For example, the pattern <em>[abc]</em>{" "}
              will only match a <em>single</em> a, b, or c letter and nothing
              else.
            </p>
            <p>
              Below are a couple lines, where we only want to match the first
              three strings, but not the last three strings. Notice how we can't
              avoid matching the last three strings if we use the dot, but have
              to specifically define what letters to match using the notation
              above.
            </p>
          </div>
        </div>
        {/* PROBLEMS */}
        <div className="exercise">
          <div className="title">Exercise 3: Matching characters</div>
          <table className="tasks_table">
            <tbody>
              <tr className="problem_header">
                <td className="task">Task</td>
                <td className="text">Text</td>
                <td style={{ width: "2.3125em" }}>&nbsp;</td>
              </tr>
              <tr className="problem">
                <td className="task">match</td>
                <td className="text">
                  {Parser(currentTextDataMatchOne.matchDataDisplay1)}
                </td>
                <td className="result succeeded">
                  <img
                    src={currentImageOne.taskImageShow1}
                    alt="To be completed"
                  />
                </td>
              </tr>
              <tr className="problem">
                <td className="task">match</td>
                <td className="text">
                  {Parser(currentTextDataMatchTwo.matchDataDisplay2)}
                </td>
                <td className="result succeeded">
                  <img
                    src={currentImageTwo.taskImageShow2}
                    alt="To be completed"
                  />
                </td>
              </tr>
              <tr className="problem">
                <td className="task">match</td>
                <td className="text">
                  {Parser(currentTextDataMatchThree.matchDataDisplay3)}
                </td>
                <td className="result succeeded">
                  <img
                    src={currentImageThree.taskImageShow3}
                    alt="To be completed"
                  />
                </td>
              </tr>
              <tr className="problem">
                <td className="task">skip</td>
                <td className="text">
                  {Parser(currentSkipTextDataSkipOne.skipDataDisplay1)}
                </td>
                <td className="result succeeded">
                  <img
                    src={currentImageSkipOne.taskImageShowSkip1}
                    alt="To be completed"
                  />
                </td>
              </tr>
              <tr className="problem">
                <td className="task">skip</td>
                <td className="text">
                  {Parser(currentSkipTextDataSkipTwo.skipDataDisplay2)}
                </td>
                <td className="result succeeded">
                  <img
                    src={currentImageSkipTwo.taskImageShowSkip2}
                    alt="To be completed"
                  />
                </td>
              </tr>
              <tr className="problem">
                <td className="task">skip</td>
                <td className="text">
                  {Parser(currentSkipTextDataSkipThree.skipDataDisplay3)}
                </td>
                <td className="result succeeded">
                  <img
                    src={currentImageSkipThree.taskImageShowSkip3}
                    alt="To be completed"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="input_and_continue row" style={{ margin: 0 }}>
            <input
              className="exercise_input_field col-xs-12 col-sm-9 col-md-9"
              type="text"
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              placeholder="Type your pattern"
              value={inputData}
              onChange={handleInputChange}
            />
            <Link to="/lesson/excluding_characters">
              <input
                className={`continue col-xs-12 col-sm-3 col-md-3 ${continueButton}`}
                disabled={isDisabled}
                // type="submit"
                defaultValue="Continue ›"
              />
            </Link>
          </div>
          <div className="row" style={{ margin: 0 }}>
            <div
              className="solution col-xs-12"
              style={{ display: isDisplay ? "block" : "none" }}
            >
              <table>
                <tbody>
                  <tr>
                    <td className="title">Solution</td>
                    <td>
                      <p>
                        You can use the expression{" "}
                        <a
                          onClick={handleAddSolutionOne}
                          className="editor_val"
                          href="#"
                        >
                          [cmf]an
                        </a>{" "}
                        to match only 'can', 'man' and 'fan' without matching
                        any other line. As you will see in the next lesson, you
                        can also use the inverse expression{" "}
                        <a
                          onClick={handleAddSolutionTwo}
                          className="editor_val"
                          href="#"
                        >
                          [^drp]an
                        </a>{" "}
                        to match any three letter word ending with 'an' that
                        does not start with 'd', 'r' or 'p'.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="solution_hint">
            Solve the above task to continue on to the next problem, or read the{" "}
            <a
              onClick={handleShowSolution}
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
            to="/lesson/excluding_characters"
            title="Lesson 4: Excluding specific characters"
          >
            Lesson 4: Excluding specific characters
          </Link>
          <br />
          Previous –{" "}
          <Link to="/lesson/wildcards_dot" title="Lesson 2: The Dot">
            Lesson 2: The Dot
          </Link>
        </div>
      </div>
    </div>
  );
}
