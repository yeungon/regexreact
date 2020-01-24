var initialState = {
    name: "Vượng - This is from Redux - Lesson8",
    age: 30,
    editStatus: true
};

var reducerLesson8 = (state = initialState, action) => {
    if (action.type === "DO") {
        return { ...state, editStatus: !state.editStatus };
    } else if (action.type === "ADD") {
        //
        return { ...state, name: action.newName, test: action.newAge };
    }
    return state;
};


// handleInputRun(state, action);
        
// function handleInputRun(state, action) {
//     try {
//         handleMatchDataCheck(state, action);
//     } catch (e) {
//         console.log(e.message);
//     }
// }

// function handleMatchDataCheck(state, action) {
//     const a = handleMatchDataAll(
//         state.matchData1,
//         "1",
//         state.taskIncompleted,
//         state,
//         action
//     );
// }

// function handleMatchDataAll(
//     matchData,
//     number,
//     taskIncompleted,
//     state,
//     action
// ) {
//     const matchDataDisplay = "matchDataDisplay" + number;

//     const taskImageShow = "taskImageShow" + number;

//     const regex = new RegExp(action.inputByUser);

//     let result = regex.test(matchData);

//     console.log(result);

//     if (result === true) {
//         let matchString = matchData.match(regex);

//         if (matchString !== null) {
//             return {
//                 ...state,
//                 inputData: action.inputByUser,

//                 [taskImageShow]: state.taskComplete,

//                 // Key of object as a variable https://stackoverflow.com/questions/11508463/javascript-set-object-key-by-variable
//                 [matchDataDisplay]: matchData.replace(
//                     regex,
//                     `<span class="match_succeeded">${matchString[0]}</span>`
//                 )
//             };
//         } else {
//             console.log("Don't match");
//         }

//         return result;
//     } else {
//         //   this.setState({
//         //     [taskImageShow]: taskIncompleted,
//         //     [matchDataDisplay]: matchData
//         //   });
//     }
// }

// return { 
//     ...state, 
//     inputData: action.inputByUser,            
// };
// }



export default reducerLesson8;
