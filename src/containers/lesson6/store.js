let redux = require("redux");

var initialState = {
    name: "Vượng",
    age: 30,
    editStatus: true
};

var reducer1 = (state = initialState, action) => {
    if (action.type === "DO") {
        return { ...state, editStatus: !state.editStatus };
    } else if (action.type === "ADD") {
        //
        return { ...state, name: action.newName, test: action.newAge };
    }
    return state;
};

var store1 = redux.createStore(reducer1);

store1.dispatch({ type: "DO" });

//console.log(store1.getState());

store1.dispatch({
    type: "ADD",
    newName: "Cập nhật  - Yêu ngôn - Đổi tên",
    newAge: 20
});

console.log(JSON.stringify(store1.getState()));

export default store1;
