import WidgetService from "../services/WidgetService";
import {HEADING, IMAGE, LINK, LIST, PARAGRAPH} from "../constants/constants";

let widgetService=new WidgetService();

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
        case "FIND_WIDGET":
            return {
                widgets: action.widgets
            }
        case "DELETE_WIDGET":
            widgetService.deleteWidget(action.widgetId);
            let newState = Object.assign({}, state);
            newState.widgets = widgetService.findWidgets(state.topicId);
            return newState;

        case "MOVE_UP":
            let index = state.widgets.indexOf(state.widgets.find(x=>x.id===action.widgetId));
            return {widgets: SwapItems(state.widgets, index, index - 1)};

        case "MOVE_DOWN":
            let index2 = state.widgets.indexOf(state.widgets.find(x=>x.id===action.widgetId));
            return {widgets: SwapItems(state.widgets, index2, index2 +1)};

        case "ADD_WIDGET":
            let newState1 = Object.assign({}, state);

            let newWidget = {
                "id": Math.floor(Math.random() * 99999),
                "type": "HEADING",
                "size": "h1",
                "text": "The Document Object Model",
                "name":"Test"
            };
            widgetService.createWidget(state.topicId,newWidget);
            newState1.widgets = widgetService.findWidgets(state.topicId);
            console.log(newState1);
            return newState1
        case "UPDATE_WIDGET":
            console.log("widget")
            let newState2 = Object.assign({}, state);

            let widget = action.widget;

            // if (widget.text) {
            //     widget.text = action.text ? action.text : widget.text;
            // }
            // if (widget.name) {
            //     widget.name = action.name ? action.name : widget.name;
            // }
            // if(widget.size) {
            //     widget.size = action.size ? action.size : widget.size;
            // }
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
            newState2.widgets = widgetService.findWidgets(state.topicId);
            return newState2;

        default:
            return state;
    }
}

export default widgetReducer;