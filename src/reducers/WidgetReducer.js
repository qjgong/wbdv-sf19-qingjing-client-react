import widgetService from '../services/WidgetService'


const widgetReducer = (state = {widgets:this.store.widgets}, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
        case "FIND_ALL_WIDGETS":
        case "DELETE_WIDGET":
        case "UPDATE_WIDGET":
            return {
                widgets: action.widgets
            }
        default:
            return state;
    }
}

export default widgetReducer;