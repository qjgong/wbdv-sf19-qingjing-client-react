

const widgetReducer = (state, action) => {
    function SwapItems(items, firstIndex, secondIndex) {
        let results = items.slice();
        let firstItem = items[firstIndex];
        results[firstIndex] = items[secondIndex];
        results[secondIndex] = firstItem;
        return results;
    }

    switch (action.type) {
        case "CREATE_WIDGET":
        case "FIND_ALL_WIDGETS":
        case "DELETE_WIDGET":
        case "UPDATE_WIDGET":
        case "FIND_WIDGET":
            return {
                widgets: action.widgets
            }
        case "MOVE_UP":
            let index = state.widgets.indexOf(state.widgets.find(x=>x.id===action.widgetId));
            return {widgets: SwapItems(state.widgets, index, index - 1)};

        case "MOVE_DOWN":
            let index2 = state.widgets.indexOf(state.widgets.find(x=>x.id===action.widgetId));
            return {widgets: SwapItems(state.widgets, index2, index2 +1)};


        default:
            return state;
    }
}

export default widgetReducer;