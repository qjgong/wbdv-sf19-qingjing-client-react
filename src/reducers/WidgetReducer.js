
const widgetReducer = (state = {widgets: []}, action) => {
    let newState = Object.assign({}, state);


    switch (action.type) {
        case "DELETE_WIDGET":
        case "CREATE_WIDGET":
        case "FIND_ALL_WIDGETS":
        case "UPDATE_WIDGET":
        case "FIND_WIDGET":
        case "MOVE_UP":
        case "MOVE_DOWN":
            newState.widgets = action.widgets;
            return newState;

        default:
            return state;
    }
};

export default widgetReducer;