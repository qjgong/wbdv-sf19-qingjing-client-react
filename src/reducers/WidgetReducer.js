import WidgetService from "../services/WidgetService";
import {HEADING, IMAGE, LINK, LIST, PARAGRAPH} from "../constants/constants";

let widgetService=new WidgetService();

const widgetReducer = (state, action) => {
    let newState = Object.assign({}, state);
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
        case "FIND_WIDGET":
            return {
                widgets: action.widgets
            };
        case "DELETE_WIDGET":
            widgetService.deleteWidget(action.widgetId);
            newState.widgets = widgetService.findWidgets(state.topicId);
            return newState;

        case 'TOGGLE_PREVIEW':


            newState.IsPreview = !newState.IsPreview;
            return newState;

        case "MOVE_UP":
            let index = state.widgets.indexOf(state.widgets.find(x=>x.id===action.widgetId));
            newState.widgets=SwapItems(state.widgets, index, index - 1);
            return newState;

        case "MOVE_DOWN":
            let index2 = state.widgets.indexOf(state.widgets.find(x=>x.id===action.widgetId));
            newState.widgets=SwapItems(state.widgets, index2, index2 +1)
            return newState;

        case "ADD_WIDGET":


            let newWidget = {
                "id": Math.floor(Math.random() * 99999),
                "type": "HEADING",
                "size": "h1",
                "text": "The Document Object Model",
                "name":"Test"
            };
            widgetService.createWidget(state.topicId,newWidget);
            newState.widgets = widgetService.findWidgets(state.topicId);
            console.log(newState);
            return newState;
        case "UPDATE_WIDGET":


            let widget = action.widget;
            if (action.text !== undefined) {
                widget.text = action.text;
            }
            if (action.name !== undefined) {
                widget.name = action.name;
            }
            if (action.size !== undefined) {
                widget.size = action.size;
            }
            if (action.widgetType) {
                let newWidget = {
                    id: widget.id,
                    type:action.widgetType,
                    name:""
                };
                switch(action.widgetType){
                    case HEADING:
                        newWidget = {...newWidget, size:"h1", text:"",};
                        break;
                    case PARAGRAPH:
                        newWidget={...newWidget, text:""};
                        break;
                    case LIST:
                        newWidget={...newWidget, items:""};
                        break;
                    case IMAGE:
                        newWidget={...newWidget, src:""};
                        break;
                    default:
                        newWidget={...newWidget, title:"", href:""};
                }
                widget = newWidget;
            }
            widgetService.updateWidget(widget.id, widget);
            newState.widgets = widgetService.findWidgets(state.topicId);
            return newState;

        default:
            return state;
    }
}

export default widgetReducer;