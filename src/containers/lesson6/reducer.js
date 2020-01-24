import { SHOW_SOLUTION, HANDLE_INPUT_CHANGE, SHOW_SOLUTION_ONE } from "./actions";

var initialState = {
    inputData: "",
    isDisplay: false,
    continueButton: "disabled",
    disabled: true,
    skipData1: "aax",
    skipData2: "bby",
    skipData3: "ccz",
    skipDataDisplay1: "aax",
    skipDataDisplay2: "bby",
    skipDataDisplay3: "ccz",

    matchData1: "Ana",
    matchData2: "Bob",
    matchData3: "Cpc",
    matchDataDisplay1: "Ana",
    matchDataDisplay2: "Bob",
    matchDataDisplay3: "Cpc",
    taskImageDefault: "/cs/images/task_default.png",
    taskImageShowSkip1: "/cs/images/task_default.png",
    taskImageShowSkip2: "/cs/images/task_default.png",
    taskImageShowSkip3: "/cs/images/task_default.png",

    taskImageShow1: "/cs/images/task_default.png",
    taskImageShow2: "/cs/images/task_default.png",
    taskImageShow3: "/cs/images/task_default.png",

    taskIncompleted: "/cs/images/task_incomplete.png",
    taskComplete: "/cs/images/task_complete.png"
};

var reducerLesson6 = (state = initialState, action) => {
    if (action.type === SHOW_SOLUTION) {
        return {
            ...state,
            isDisplay: true
        };
    } else if (action.type === SHOW_SOLUTION_ONE) {
        return {
            ...state,
            inputData: "[A-C][n-p][a-c]"
        };
    } else if (action.type === HANDLE_INPUT_CHANGE) {
        if (0 === action.inputByUser.length) {
            return {
                ...state,
                isDisabled: true,
                inputData: action.inputByUser,
                taskImageShow1: state.taskImageDefault,
                taskImageShow2: state.taskImageDefault,
                taskImageShow3: state.taskImageDefault,
                matchDataDisplay1: state.matchData1,
                matchDataDisplay2: state.matchData2,
                matchDataDisplay3: state.matchData3
            };
        }

        try {                        
            var newinput = action.inputByUser;
            
        } catch (e) {
            console.log(e.message);
        }
        
        const regex = new RegExp(newinput);

        let result1 = regex.test(state.matchData1);
        let result2 = regex.test(state.matchData2);
        let result3 = regex.test(state.matchData3);

        var flag1 = false;
        var flag2 = false;
        var flag3 = false;

        var matchString1 = "";
        var matchString2 = "";
        var matchString3 = "";

        if (result1 === true) {
            matchString1 = state.matchData1.match(regex);

            if (matchString1 !== null) {
                flag1 = true;
            } else {
                console.log("Don't match case 1");
            }
        }

        if (result2 === true) {
            matchString2 = state.matchData2.match(regex);

            if (matchString2 !== null) {
                flag2 = true;
            } else {
                console.log("Don't match case 2");
            }
        }

        if (result3 === true) {
            matchString3 = state.matchData3.match(regex);

            if (matchString3 !== null) {
                flag3 = true;
            } else {
                console.log("Don't match case 3");
            }
        }

        let resultSkip1 = regex.test(state.skipData1);
        let resultSkip2 = regex.test(state.skipData2);
        let resultSkip3 = regex.test(state.skipData3);

        var flagSkip1 = false;
        var flagSkip2 = false;
        var flagSkip3 = false;

        var matchStringSkip1 = "";
        var matchStringSkip2 = "";
        var matchStringSkip3 = "";

        if (resultSkip1 === true) {

            matchStringSkip1 = state.skipData1.match(regex);

            if (matchStringSkip1 !== null) {
                flagSkip1 = true;

            } else {
                console.log("Don't match case SKIP 1");
            }
        }

        if (resultSkip2 === true) {

            matchStringSkip2 = state.skipData2.match(regex);

            if (matchStringSkip2 !== null) {
                flagSkip2 = true;
                                
            } else {
                console.log("Don't match case SKIP 2");
            }
        }

        if (resultSkip3 === true) {

            matchStringSkip3 = state.skipData3.match(regex);

            if (matchStringSkip3 !== null) {
                flagSkip3 = true;
                                
            } else {
                console.log("Don't match case SKIP 1");
            }
        }

        // need to implement skip flag
        if (flag1 && flag2 && flag3) {
            return {
                ...state,
                continueButton: "enabled",
                disabled: false,
                inputData: action.inputByUser,
                taskImageShow1: state.taskComplete,
                taskImageShow2: state.taskComplete,
                taskImageShow3: state.taskComplete,
                matchDataDisplay1: state.matchData1.replace(
                    regex,
                    `<span class="match_succeeded">${matchString1[0]}</span>`
                ),
                matchDataDisplay2: state.matchData2.replace(
                    regex,
                    `<span class="match_succeeded">${matchString2[0]}</span>`
                ),
                matchDataDisplay3: state.matchData3.replace(
                    regex,
                    `<span class="match_succeeded">${matchString3[0]}</span>`
                )
            };
        }
     
         if (flag1 && flag2) {
            return {
                ...state,
                inputData: action.inputByUser,
                taskImageShow1: state.taskComplete,
                taskImageShow2: state.taskComplete,
                
                matchDataDisplay1: state.matchData1.replace(
                    regex,
                    `<span class="match_succeeded">${matchString1[0]}</span>`
                ),
                matchDataDisplay2: state.matchData2.replace(
                    regex,
                    `<span class="match_succeeded">${matchString2[0]}</span>`
                ),                
            };
        }

        if (flag1 && flag3) {
            return {
                ...state,                
                inputData: action.inputByUser,
                taskImageShow1: state.taskComplete,                
                taskImageShow3: state.taskComplete,
                matchDataDisplay1: state.matchData1.replace(
                    regex,
                    `<span class="match_succeeded">${matchString1[0]}</span>`
                ),              
                matchDataDisplay3: state.matchData3.replace(
                    regex,
                    `<span class="match_succeeded">${matchString3[0]}</span>`
                )
            };
        }

        if (flag2 && flag3) {
            return {
                ...state,                
                inputData: action.inputByUser,                
                taskImageShow2: state.taskComplete,
                taskImageShow3: state.taskComplete,                
                matchDataDisplay2: state.matchData2.replace(
                    regex,
                    `<span class="match_succeeded">${matchString2[0]}</span>`
                ),
                matchDataDisplay3: state.matchData3.replace(
                    regex,
                    `<span class="match_succeeded">${matchString3[0]}</span>`
                )
            };
        }

        if (flag1) {
            return {
                ...state,
                inputData: action.inputByUser,                
                taskImageShow1: state.taskComplete,
                taskImageShow2: state.taskIncompleted,
                taskImageShow3: state.taskIncompleted,  
                matchDataDisplay1: state.matchData1.replace(
                    regex,
                    `<span class="match_succeeded">${matchString1[0]}</span>`
                ),                
            };
        }




        if (flag2) {
            return {
                ...state,
                inputData: action.inputByUser,                                
                taskImageShow1: state.taskIncompleted,
                taskImageShow2: state.taskComplete,                
                taskImageShow3: state.taskIncompleted, 
                matchDataDisplay2: state.matchData2.replace(
                    regex,
                    `<span class="match_succeeded">${matchString2[0]}</span>`
                ),                
            };
        }

        if (flag3) {
            return {
                ...state,
                inputData: action.inputByUser,  
                taskImageShow1: state.taskIncompleted,
                taskImageShow2: state.taskIncompleted,                
                taskImageShow3: state.taskComplete,
                matchDataDisplay3: state.matchData3.replace(
                    regex,
                    `<span class="match_succeeded">${matchString3[0]}</span>`
                ),                
            };
        }


        if (flagSkip1) {
            return {
                ...state,
                inputData: action.inputByUser,                 
                matchStringSkip1: state.skipData1.replace(
                    regex,
                    `<span class='match_failed'>${matchStringSkip1[0]}</span>`
                ),                
            };
        }

        return {
            ...state,
            inputData: action.inputByUser
        };
    }

    return state;
};

export default reducerLesson6;
